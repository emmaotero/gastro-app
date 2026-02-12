'use client';

import { useState } from 'react';
import Calculator from '@/components/Calculator';

export default function Home() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            🏥 Gastro App
          </h1>
          <p className="text-gray-600 mt-2">
            Herramienta para cálculos gastroenterológicos
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 mt-4">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {['inicio', 'calculadoras', 'scores', 'escalas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'inicio' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Bienvenido a Gastro App
            </h2>
            <p className="text-gray-600 mb-6">
              Esta aplicación te permite realizar cálculos y evaluaciones
              comunes en gastroenterología de forma rápida y precisa.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon="📊"
                title="Calculadoras"
                description="Calcula índices y parámetros clínicos"
              />
              <FeatureCard
                icon="🎯"
                title="Scores"
                description="Evalúa severidad y riesgo de patologías"
              />
              <FeatureCard
                icon="📈"
                title="Escalas"
                description="Aplica escalas diagnósticas validadas"
              />
            </div>
          </div>
        )}

        {activeTab === 'calculadoras' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Calculadoras Clínicas
            </h2>
            <Calculator />
          </div>
        )}

        {activeTab === 'scores' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Scores de Severidad
            </h2>
            <p className="text-gray-600">
              Próximamente: Child-Pugh, MELD, Glasgow-Blatchford, etc.
            </p>
          </div>
        )}

        {activeTab === 'escalas' && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Escalas Diagnósticas
            </h2>
            <p className="text-gray-600">
              Próximamente: Escala de Bristol, Roma IV, etc.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Gastro App - Herramienta de uso clínico</p>
          <p className="text-sm mt-2">
            Esta herramienta es de apoyo educativo. Siempre consulte con un
            profesional de la salud.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
