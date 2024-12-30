import React, { useState } from 'react';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';

const QuickSortClassroom = () => {
  const [array, setArray] = useState([7, 3, 6, 1, 9, 4, 2, 5]);
  const [step, setStep] = useState(0);
  const [pivot, setPivot] = useState(null);
  const [leftPtr, setLeftPtr] = useState(null);
  const [rightPtr, setRightPtr] = useState(null);
  const [sorted, setSorted] = useState([]);
  
  const steps = [
    "Let's start with our initial array.",
    "We'll choose the last element as our pivot (5).",
    "We'll partition the array around the pivot.",
    "Elements less than pivot go left, greater go right.",
    "Place pivot in its final position.",
    "Recursively sort left partition.",
    "Recursively sort right partition.",
    "Array is now sorted!"
  ];

  const resetDemo = () => {
    setArray([7, 3, 6, 1, 9, 4, 2, 5]);
    setStep(0);
    setPivot(null);
    setLeftPtr(null);
    setRightPtr(null);
    setSorted([]);
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      
      // Simulate sorting steps
      if (step === 1) setPivot(7);
      if (step === 2) {
        setLeftPtr(0);
        setRightPtr(6);
      }
      if (step === 4) {
        setArray([3, 1, 2, 4, 5, 6, 9, 7]);
        setSorted([4]);
      }
      if (step === 5) {
        setArray([1, 2, 3, 4, 5, 6, 9, 7]);
        setSorted([0, 1, 2, 3, 4]);
      }
      if (step === 6) {
        setArray([1, 2, 3, 4, 5, 6, 7, 9]);
        setSorted([0, 1, 2, 3, 4, 5, 6, 7]);
      }
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">QuickSort Interactive Lesson</h2>
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={nextStep}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <Play size={16} /> Next Step
          </button>
          <button 
            onClick={resetDemo}
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl mb-4">Step {step + 1}: {steps[step]}</h3>
        <div className="flex gap-4 items-center mb-8">
          {array.map((num, idx) => (
            <div 
              key={idx}
              className={`
                w-12 h-12 flex items-center justify-center rounded-lg
                ${pivot === idx ? 'bg-yellow-200 border-2 border-yellow-500' : 
                  sorted.includes(idx) ? 'bg-green-200' : 'bg-blue-100'}
                ${leftPtr === idx ? 'border-t-4 border-red-500' : ''}
                ${rightPtr === idx ? 'border-b-4 border-purple-500' : ''}
                transition-all duration-300
              `}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded">
        <h3 className="font-bold mb-2">Key Concepts:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Pivot selection is crucial for performance</li>
          <li>Partitioning divides problem into sub-problems</li>
          <li>Time Complexity: O(n log n) average case</li>
          <li>Space Complexity: O(log n) due to recursion</li>
        </ul>
      </div>
      
      <div className="mt-6 bg-blue-50 p-4 rounded">
        <h3 className="font-bold mb-2">Mathematical Expression:</h3>
        <p className="font-mono">
          T(n) = T(k) + T(n-k-1) + Θ(n)
        </p>
        <p className="text-sm text-gray-600 mt-2">
          where k is the size of the left partition after splitting
        </p>
      </div>
    </div>
  );
};

export default QuickSortClassroom;