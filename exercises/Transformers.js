import React, { useState } from 'react';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';

const TransformerViz = () => {
  const [step, setStep] = useState(0);
  const [attention, setAttention] = useState([
    [0.7, 0.2, 0.1],
    [0.3, 0.6, 0.1],
    [0.1, 0.2, 0.7]
  ]);
  
  const inputTokens = ["How's", "it", "going"];
  const outputTokens = ["I'm", "doing", "fine"];

  const steps = [
    "Input embedding + positional encoding",
    "Self-attention computation",
    "Multi-head attention",
    "Feed-forward network",
    "Decoder attention",
    "Output generation"
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      updateAttention();
    }
  };

  const updateAttention = () => {
    // Simulate attention updates
    switch(step) {
      case 1:
        setAttention([
          [0.8, 0.1, 0.1],
          [0.2, 0.7, 0.1],
          [0.1, 0.1, 0.8]
        ]);
        break;
      case 2:
        setAttention([
          [0.9, 0.05, 0.05],
          [0.1, 0.8, 0.1],
          [0.05, 0.05, 0.9]
        ]);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setStep(0);
    setAttention([
      [0.7, 0.2, 0.1],
      [0.3, 0.6, 0.1],
      [0.1, 0.2, 0.7]
    ]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Transformer Architecture</h2>
        <div className="flex gap-4 mt-4">
          <button 
            onClick={nextStep}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
          >
            <Play size={16} /> Next Step
          </button>
          <button 
            onClick={reset}
            className="flex items-center gap-2 bg-gray-500 text-white px-4 py-2 rounded"
          >
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl mb-4">Step {step + 1}: {steps[step]}</h3>
        
        <div className="flex justify-between items-center mb-8">
          {/* Encoder */}
          <div className="w-64 bg-blue-50 p-4 rounded">
            <h4 className="font-bold mb-2">Encoder</h4>
            <div className="space-y-2">
              {inputTokens.map((token, idx) => (
                <div key={idx} className="bg-white p-2 rounded shadow">
                  {token}
                </div>
              ))}
            </div>
          </div>

          {/* Attention Matrix */}
          <div className="mx-4">
            <div className="grid grid-cols-3 gap-1">
              {attention.map((row, i) => 
                row.map((weight, j) => (
                  <div 
                    key={`${i}-${j}`}
                    className="w-8 h-8 flex items-center justify-center"
                    style={{
                      backgroundColor: `rgba(59, 130, 246, ${weight})`,
                      color: weight > 0.5 ? 'white' : 'black'
                    }}
                  >
                    {weight.toFixed(1)}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Decoder */}
          <div className="w-64 bg-green-50 p-4 rounded">
            <h4 className="font-bold mb-2">Decoder</h4>
            <div className="space-y-2">
              {outputTokens.map((token, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-2 rounded shadow transition-opacity duration-500 ${
                    step >= 4 ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  {token}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-bold mb-2">Key Equations:</h4>
          <div className="space-y-2 font-mono text-sm">
            <p>Attention(Q,K,V) = softmax(QK^T/√d_k)V</p>
            <p>MultiHead(Q,K,V) = Concat(head_1,...,head_h)W^O</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-bold mb-2">Architecture Details:</h4>
          <ul className="text-sm space-y-1">
            <li>• Multi-head attention allows parallel processing</li>
            <li>• Positional encoding preserves sequence order</li>
            <li>• Residual connections help with gradient flow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransformerViz;