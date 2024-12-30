import React, { useState } from 'react';
import { Lock, Unlock, RotateCcw, Play, Key } from 'lucide-react';

const RSADemo = () => {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('HELLO');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [publicKey, setPublicKey] = useState({ e: 65537, n: 3233 });
  const [privateKey, setPrivateKey] = useState({ d: 2753, n: 3233 });

  const steps = [
    "Key Generation (p=61, q=53)",
    "Computing Public Key (e,n)",
    "Computing Private Key (d,n)",
    "Message Encryption",
    "Message Decryption"
  ];

  function modPow(base, exponent, modulus) {
    let result = 1;
    while (exponent > 0) {
      if (exponent % 2 === 1)
        result = (result * base) % modulus;
      base = (base * base) % modulus;
      exponent = Math.floor(exponent / 2);
    }
    return result;
  }

  const nextStep = () => {
    if (step >= steps.length - 1) return;
    
    setStep(step + 1);
    if (step === 3) {
      // Simulate encryption
      const encrypted = message.split('').map(char => 
        modPow(char.charCodeAt(0), publicKey.e, publicKey.n)
      );
      setEncryptedMessage(encrypted.join(','));
    }
  };

  const reset = () => {
    setStep(0);
    setEncryptedMessage('');
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">RSA Encryption</h2>
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

      <div className="mb-8">
        <h3 className="text-xl mb-4">Step {step + 1}: {steps[step]}</h3>
        
        <div className="grid grid-cols-3 gap-8">
          {/* Message Input */}
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold mb-2">Original Message</h4>
            <div className="bg-white p-3 rounded shadow">
              {message}
            </div>
          </div>

          {/* Encryption Process */}
          <div className="bg-gray-50 p-4 rounded flex flex-col items-center justify-center">
            {step >= 3 ? (
              <div className="flex flex-col items-center">
                <Lock className="text-blue-500 mb-2" size={24} />
                <div className="text-sm">Encrypting...</div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <Key className="text-gray-500 mb-2" size={24} />
                <div className="text-sm">Generate Keys</div>
              </div>
            )}
          </div>

          {/* Encrypted Result */}
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold mb-2">Encrypted Message</h4>
            <div className="bg-white p-3 rounded shadow break-all">
              {encryptedMessage || '...'}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-yellow-50 p-4 rounded">
          <h4 className="font-bold mb-2">Public Key (e,n):</h4>
          <div className="font-mono text-sm">
            e = {publicKey.e}
            <br />
            n = {publicKey.n}
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded">
          <h4 className="font-bold mb-2">Private Key (d,n):</h4>
          <div className="font-mono text-sm">
            d = {step >= 2 ? privateKey.d : '???'}
            <br />
            n = {privateKey.n}
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded">
        <h4 className="font-bold mb-2">Key Mathematical Steps:</h4>
        <div className="space-y-2 text-sm">
          <p>1. Choose primes p, q</p>
          <p>2. n = p × q</p>
          <p>3. φ(n) = (p-1)(q-1)</p>
          <p>4. Choose e where 1 &lt; e &lt; φ(n)</p>
          <p>5. Find d where (d × e) mod φ(n) = 1</p>
        </div>
      </div>
    </div>
  );
};

export default RSADemo;