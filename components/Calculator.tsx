'use client';

import { useState } from 'react';

export default function Calculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<{
    imc: number;
    categoria: string;
    color: string;
  } | null>(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100; // convertir cm a metros

    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      let categoria = '';
      let color = '';

      if (imc < 18.5) {
        categoria = 'Bajo peso';
        color = 'text-blue-600';
      } else if (imc < 25) {
        categoria = 'Peso normal';
        color = 'text-green-600';
      } else if (imc < 30) {
        categoria = 'Sobrepeso';
        color = 'text-yellow-600';
      } else if (imc < 35) {
        categoria = 'Obesidad I';
        color = 'text-orange-600';
      } else if (imc < 40) {
        categoria = 'Obesidad II';
        color = 'text-red-600';
      } else {
        categoria = 'Obesidad III (Mórbida)';
        color = 'text-red-800';
      }

      setResultado({ imc, categoria, color });
    }
  };

  const limpiar = () => {
    setPeso('');
    setAltura('');
    setResultado(null);
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Calculadora de IMC
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Peso (kg)
          </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ej: 70"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Altura (cm)
          </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ej: 170"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={calcularIMC}
            className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Calcular
          </button>
          <button
            onClick={limpiar}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Limpiar
          </button>
        </div>
      </div>

      {resultado && (
        <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Resultado:
          </h4>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">IMC:</span>{' '}
              <span className="text-2xl font-bold text-indigo-600">
                {resultado.imc.toFixed(2)}
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Categoría:</span>{' '}
              <span className={`font-bold ${resultado.color}`}>
                {resultado.categoria}
              </span>
            </p>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Referencias:</strong>
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Bajo peso: {'<'} 18.5</li>
              <li>• Normal: 18.5 - 24.9</li>
              <li>• Sobrepeso: 25.0 - 29.9</li>
              <li>• Obesidad I: 30.0 - 34.9</li>
              <li>• Obesidad II: 35.0 - 39.9</li>
              <li>• Obesidad III: ≥ 40.0</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
