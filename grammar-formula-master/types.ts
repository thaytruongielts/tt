export enum QuestionType {
  FillBlank = 'FILL_BLANK',
  MultipleChoice = 'MULTIPLE_CHOICE',
  ErrorCorrection = 'ERROR_CORRECTION'
}

export interface QuestionPart {
  id: number;
  title: string;
  description: string;
  objective: string;
  questions: Question[];
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string; // The sentence or prompt
  verbs?: string[]; // For questions like "sleep", "work" in brackets
  answers?: string[]; // Correct answers (array for multiple blanks)
  options?: string[]; // For multiple choice
  correctOption?: string; // "A", "B", "C", "D"
  hint?: string; // Specific hints (Part 5)
  explanation: string; // The logic/formula explanation
}

export interface UserAnswers {
  [questionId: number]: string | string[]; // Single string or array for multiple blanks
}

export interface AnswerStatus {
  [questionId: number]: boolean; // true if correct
}