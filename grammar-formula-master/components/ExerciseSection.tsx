import React, { useState, useEffect } from 'react';
import { Question, QuestionType, UserAnswers, AnswerStatus } from '../types';

interface ExerciseSectionProps {
  partId: number;
  questions: Question[];
  title: string;
  description: string;
  objective: string;
}

export const ExerciseSection: React.FC<ExerciseSectionProps> = ({
  partId,
  questions,
  title,
  description,
  objective,
}) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Reset state when switching parts
  useEffect(() => {
    setUserAnswers({});
    setIsSubmitted(false);
    setScore(0);
  }, [partId]);

  const handleInputChange = (questionId: number, value: string, index: number = 0) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const current = prev[questionId];
      // If it's a question with multiple blanks (based on current state being an array or not)
      // But initially it's undefined. We need to check the question definition to be safe,
      // but locally we can infer.
      const question = questions.find(q => q.id === questionId);
      const isMultiple = question?.text.includes('{{1}}');

      if (isMultiple) {
        const arr = Array.isArray(current) ? [...current] : ['', ''];
        arr[index] = value;
        return { ...prev, [questionId]: arr };
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const checkAnswers = () => {
    let newScore = 0;
    questions.forEach((q) => {
      const userAns = userAnswers[q.id];
      
      if (q.type === QuestionType.MultipleChoice) {
        if (typeof userAns === 'string' && userAns === q.correctOption) {
          newScore++;
        }
      } else if (q.type === QuestionType.FillBlank) {
        const correctAnswers = q.answers || [];
        if (Array.isArray(userAns)) {
           // Check if every blank is correct
           const allCorrect = userAns.length === correctAnswers.length && userAns.every((ans, idx) => 
             ans.toLowerCase().trim() === correctAnswers[idx].toLowerCase().trim()
           );
           if (allCorrect) newScore++;
        } else {
          // Single blank
          if (typeof userAns === 'string' && correctAnswers[0] && userAns.toLowerCase().trim() === correctAnswers[0].toLowerCase().trim()) {
            newScore++;
          }
        }
      } else if (q.type === QuestionType.ErrorCorrection) {
         const correctAnswers = q.answers || [];
         // Allow flexible matching for error correction (user might type just the word or full phrase)
         // We check if user's input matches ANY of the valid acceptable answers
         if (typeof userAns === 'string' && correctAnswers.some(a => userAns.toLowerCase().trim() === a.toLowerCase())) {
           newScore++;
         }
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
  };

  const renderFillBlank = (q: Question) => {
    const parts = q.text.split(/{{(\d+)}}/g);
    return (
      <div className="text-lg leading-loose text-gray-800">
        {parts.map((part, index) => {
          // Even indices are text, odd indices are placeholder numbers
          if (index % 2 === 0) return <span key={index}>{part}</span>;
          
          const blankIndex = parseInt(part, 10);
          const inputVal = Array.isArray(userAnswers[q.id]) 
            ? (userAnswers[q.id] as string[])[blankIndex] || '' 
            : (userAnswers[q.id] as string) || '';
          
          const correctAns = q.answers ? q.answers[blankIndex] : '';
          const isCorrect = isSubmitted && inputVal.toLowerCase().trim() === correctAns.toLowerCase().trim();
          const isWrong = isSubmitted && !isCorrect;

          return (
            <span key={index} className="inline-block mx-1 relative group">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => handleInputChange(q.id, e.target.value, blankIndex)}
                disabled={isSubmitted}
                className={`border-b-2 bg-transparent py-1 px-2 w-32 sm:w-40 focus:outline-none transition-colors font-medium
                  ${isSubmitted 
                    ? (isCorrect ? 'border-green-500 text-green-700 bg-green-50' : 'border-red-500 text-red-700 bg-red-50') 
                    : 'border-gray-300 focus:border-indigo-500 text-indigo-900'
                  }`}
                placeholder="..."
                autoComplete="off"
              />
              {isWrong && (
                <span className="absolute -top-6 left-0 text-xs text-white bg-green-600 px-2 py-0.5 rounded shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {correctAns}
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  const renderMultipleChoice = (q: Question) => {
    return (
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-800 mb-3">{q.text.replace('______', '_______')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {q.options?.map((option) => {
            const letter = option.split('.')[0].trim(); // "A"
            const isSelected = userAnswers[q.id] === letter;
            const isCorrectOption = q.correctOption === letter;
            
            let btnClass = "border-gray-200 hover:bg-gray-50";
            if (isSubmitted) {
              if (isCorrectOption) btnClass = "bg-green-100 border-green-500 text-green-800 font-semibold";
              else if (isSelected && !isCorrectOption) btnClass = "bg-red-100 border-red-500 text-red-800";
              else btnClass = "border-gray-200 opacity-60";
            } else {
              if (isSelected) btnClass = "bg-indigo-100 border-indigo-500 text-indigo-900 ring-1 ring-indigo-500";
            }

            return (
              <button
                key={option}
                onClick={() => handleInputChange(q.id, letter)}
                disabled={isSubmitted}
                className={`text-left px-4 py-3 border rounded-lg transition-all duration-200 ${btnClass}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderErrorCorrection = (q: Question) => {
    const userVal = (userAnswers[q.id] as string) || '';
    const correctAns = q.answers ? q.answers[0] : '';
    const isCorrect = isSubmitted && q.answers?.some(a => userVal.toLowerCase().trim() === a.toLowerCase());
    
    return (
      <div className="space-y-3">
        <div className="bg-yellow-50 p-3 rounded border border-yellow-200 text-yellow-800 text-sm italic">
           <span className="font-bold">Hint:</span> {q.hint}
        </div>
        <p className="text-lg font-medium text-gray-800">{q.text}</p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Correction:</span>
            <input
              type="text"
              value={userVal}
              onChange={(e) => handleInputChange(q.id, e.target.value)}
              disabled={isSubmitted}
              className={`border rounded px-3 py-2 w-full sm:w-64 focus:outline-none transition-all
                  ${isSubmitted 
                    ? (isCorrect ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-500 bg-red-50 text-red-800') 
                    : 'border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500'
                  }`}
              placeholder="Type the corrected part..."
            />
        </div>
        {isSubmitted && !isCorrect && (
           <div className="text-sm text-green-600 font-semibold mt-1">
              Answer: {correctAns}
           </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pb-24">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r">
          <p className="text-indigo-800 font-medium">{objective}</p>
        </div>
      </header>

      <div className="space-y-8">
        {questions.map((q, index) => (
          <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md">
            <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 font-bold text-sm">
                 {q.id}
               </div>
               <div className="flex-grow">
                 {q.type === QuestionType.FillBlank && renderFillBlank(q)}
                 {q.type === QuestionType.MultipleChoice && renderMultipleChoice(q)}
                 {q.type === QuestionType.ErrorCorrection && renderErrorCorrection(q)}

                 {isSubmitted && (
                   <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                     <div className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 p-3 rounded">
                       <svg className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                       <div>
                         <span className="font-bold text-indigo-900">Explanation: </span>
                         {q.explanation}
                       </div>
                     </div>
                   </div>
                 )}
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 flex items-center justify-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40">
        {!isSubmitted ? (
          <button
            onClick={checkAnswers}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1"
          >
            Check Answers
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">
              Score: <span className={score === questions.length ? "text-green-600" : "text-indigo-600"}>{score}</span> / {questions.length}
            </div>
            {score === questions.length && (
              <span className="text-yellow-500 font-bold animate-bounce">Perfect! 🌟</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};