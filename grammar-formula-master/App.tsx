import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ExerciseSection } from './components/ExerciseSection';
import { EXERCISE_DATA } from './data';

function App() {
  const [activePartId, setActivePartId] = useState(1);

  const activeData = EXERCISE_DATA.find(p => p.id === activePartId) || EXERCISE_DATA[0];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-10">
      <Navbar activePartId={activePartId} onSelectPart={setActivePartId} />
      <main className="pt-6">
        <ExerciseSection 
          key={activeData.id} // Force re-render on tab change
          partId={activeData.id}
          questions={activeData.questions}
          title={activeData.title}
          description={activeData.description}
          objective={activeData.objective}
        />
      </main>
    </div>
  );
}

export default App;