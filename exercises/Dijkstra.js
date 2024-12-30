import React, { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

const DijkstraVisualizer = () => {
  const [step, setStep] = useState(0);
  const [currentNode, setCurrentNode] = useState('A');
  const [distances, setDistances] = useState({
    'A': 0,
    'B': Infinity,
    'C': Infinity,
    'D': Infinity,
    'F': Infinity,
    'Z': Infinity
  });
  const [visited, setVisited] = useState(['A']);

  const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'D': 3, 'C': 1 },
    'C': { 'F': 8 },
    'D': { 'F': 2, 'Z': 4 },
    'F': { 'Z': 4 },
    'Z': {}
  };

  const nodePositions = {
    'A': { x: 50, y: 120 },
    'B': { x: 150, y: 60 },
    'C': { x: 150, y: 180 },
    'D': { x: 250, y: 60 },
    'F': { x: 250, y: 180 },
    'Z': { x: 350, y: 120 }
  };

  const steps = [
    'Start at node A (distance = 0)',
    'Update distances to neighbors B(4) and C(2)',
    'Visit C (smallest distance = 2)',
    'Update distance to F through C',
    'Visit B (next smallest distance = 4)',
    'Update distances through B to D',
    'Visit D, update F and Z',
    'Complete path found to Z!'
  ];

  const nextStep = () => {
    if (step >= steps.length - 1) return;
    
    setStep(step + 1);
    
    // Update visualization state based on current step
    switch(step) {
      case 0:
        setDistances({...distances, 'B': 4, 'C': 2});
        break;
      case 1:
        setCurrentNode('C');
        setVisited([...visited, 'C']);
        setDistances({...distances, 'F': 10});
        break;
      case 2:
        setCurrentNode('B');
        setVisited([...visited, 'B']);
        break;
      case 3:
        setDistances({...distances, 'D': 7});
        break;
      case 4:
        setCurrentNode('D');
        setVisited([...visited, 'D']);
        setDistances({...distances, 'Z': 11, 'F': 9});
        break;
      default:
        break;
    }
  };

  const resetDemo = () => {
    setStep(0);
    setCurrentNode('A');
    setDistances({
      'A': 0,
      'B': Infinity,
      'C': Infinity,
      'D': Infinity,
      'F': Infinity,
      'Z': Infinity
    });
    setVisited(['A']);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Dijkstra's Algorithm Visualization</h2>
        <div className="flex gap-4 mb-4">
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

      <div className="mb-6">
        <h3 className="text-xl mb-2">Step {step + 1}: {steps[step]}</h3>
        <svg width="400" height="240" className="bg-gray-50 rounded">
          {/* Edges */}
          {Object.entries(graph).map(([from, edges]) => 
            Object.entries(edges).map(([to, weight]) => (
              <g key={`${from}-${to}`}>
                <line 
                  x1={nodePositions[from].x + 20} 
                  y1={nodePositions[from].y + 20}
                  x2={nodePositions[to].x + 20} 
                  y2={nodePositions[to].y + 20}
                  stroke={visited.includes(from) && visited.includes(to) ? 'green' : 'gray'}
                  strokeWidth="2"
                />
                <text 
                  x={(nodePositions[from].x + nodePositions[to].x) / 2}
                  y={(nodePositions[from].y + nodePositions[to].y) / 2 - 10}
                  className="text-sm"
                >
                  {weight}
                </text>
              </g>
            ))
          )}
          
          {/* Nodes */}
          {Object.entries(nodePositions).map(([node, pos]) => (
            <g key={node}>
              <circle 
                cx={pos.x + 20} 
                cy={pos.y + 20} 
                r="20"
                fill={currentNode === node ? 'yellow' : visited.includes(node) ? 'lightgreen' : 'white'}
                stroke="black"
              />
              <text 
                x={pos.x + 20} 
                y={pos.y + 25}
                textAnchor="middle"
                className="font-bold"
              >
                {node}
              </text>
              <text 
                x={pos.x + 20} 
                y={pos.y + 45}
                textAnchor="middle"
                className="text-sm"
              >
                {distances[node] === Infinity ? '∞' : distances[node]}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-bold mb-2">Algorithm Properties:</h3>
          <ul className="space-y-1 text-sm">
            <li>• Time Complexity: O((V + E) log V)</li>
            <li>• Space Complexity: O(V)</li>
            <li>• Uses Priority Queue for efficiency</li>
            <li>• Guarantees shortest path in weighted graphs</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h3 className="font-bold mb-2">Current State:</h3>
          <div className="space-y-1 text-sm">
            <p>Current Node: {currentNode}</p>
            <p>Visited: {visited.join(' → ')}</p>
            <p>Distance to Z: {distances['Z'] === Infinity ? '∞' : distances['Z']}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DijkstraVisualizer;