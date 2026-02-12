# 🔄 GUÍA DE MIGRACIÓN: STREAMLIT → NEXT.JS

## 📊 Tabla de Equivalencias

### Componentes de UI

| Streamlit | Next.js/React | Ejemplo |
|-----------|---------------|---------|
| `st.title()` | `<h1>` tag | `<h1 className="text-3xl font-bold">Título</h1>` |
| `st.header()` | `<h2>` tag | `<h2 className="text-2xl font-semibold">Header</h2>` |
| `st.subheader()` | `<h3>` tag | `<h3 className="text-xl">Subheader</h3>` |
| `st.text()` | `<p>` tag | `<p className="text-gray-600">Texto</p>` |
| `st.markdown()` | `<div>` con dangerouslySetInnerHTML | Ver ejemplo abajo |
| `st.write()` | `<p>` o `<div>` | Depende del contenido |

### Inputs

| Streamlit | Next.js/React | Ejemplo |
|-----------|---------------|---------|
| `st.text_input()` | `<input type="text">` + useState | Ver ejemplo 1 |
| `st.number_input()` | `<input type="number">` + useState | Ver ejemplo 2 |
| `st.slider()` | `<input type="range">` + useState | Ver ejemplo 3 |
| `st.selectbox()` | `<select>` + useState | Ver ejemplo 4 |
| `st.checkbox()` | `<input type="checkbox">` + useState | Ver ejemplo 5 |
| `st.radio()` | `<input type="radio">` + useState | Ver ejemplo 6 |
| `st.button()` | `<button onClick={}>` | Ver ejemplo 7 |

### Layout

| Streamlit | Next.js/React | Ejemplo |
|-----------|---------------|---------|
| `st.columns()` | Flexbox o Grid | `<div className="grid grid-cols-2 gap-4">` |
| `st.sidebar` | Componente separado | Ver ejemplo 8 |
| `st.tabs()` | State + conditional rendering | Ver ejemplo 9 |
| `st.expander()` | Accordion component | Ver ejemplo 10 |
| `st.container()` | `<div>` | `<div className="container">` |

---

## 💡 EJEMPLOS DE CONVERSIÓN

### Ejemplo 1: Text Input

**Streamlit:**
```python
nombre = st.text_input("Ingrese su nombre", "")
st.write(f"Hola {nombre}")
```

**Next.js/React:**
```tsx
const [nombre, setNombre] = useState('');

return (
  <>
    <input
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      placeholder="Ingrese su nombre"
      className="border rounded px-3 py-2"
    />
    <p>Hola {nombre}</p>
  </>
);
```

---

### Ejemplo 2: Number Input (Calculadora IMC)

**Streamlit:**
```python
peso = st.number_input("Peso (kg)", min_value=0.0, max_value=300.0, value=70.0)
altura = st.number_input("Altura (cm)", min_value=0.0, max_value=250.0, value=170.0)

if st.button("Calcular IMC"):
    imc = peso / ((altura/100) ** 2)
    st.write(f"IMC: {imc:.2f}")
```

**Next.js/React:**
```tsx
const [peso, setPeso] = useState('70');
const [altura, setAltura] = useState('170');
const [resultado, setResultado] = useState<number | null>(null);

const calcular = () => {
  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura) / 100;
  const imc = pesoNum / (alturaNum * alturaNum);
  setResultado(imc);
};

return (
  <>
    <input
      type="number"
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
      placeholder="Peso (kg)"
      min="0"
      max="300"
      className="border rounded px-3 py-2"
    />
    <input
      type="number"
      value={altura}
      onChange={(e) => setAltura(e.target.value)}
      placeholder="Altura (cm)"
      min="0"
      max="250"
      className="border rounded px-3 py-2"
    />
    <button
      onClick={calcular}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Calcular IMC
    </button>
    {resultado && <p>IMC: {resultado.toFixed(2)}</p>}
  </>
);
```

---

### Ejemplo 3: Slider

**Streamlit:**
```python
edad = st.slider("Edad", min_value=0, max_value=120, value=30)
st.write(f"Edad: {edad} años")
```

**Next.js/React:**
```tsx
const [edad, setEdad] = useState(30);

return (
  <>
    <label>Edad: {edad} años</label>
    <input
      type="range"
      min="0"
      max="120"
      value={edad}
      onChange={(e) => setEdad(parseInt(e.target.value))}
      className="w-full"
    />
  </>
);
```

---

### Ejemplo 4: Selectbox

**Streamlit:**
```python
opcion = st.selectbox(
    "Seleccione una opción",
    ["Opción 1", "Opción 2", "Opción 3"]
)
st.write(f"Seleccionó: {opcion}")
```

**Next.js/React:**
```tsx
const [opcion, setOpcion] = useState('Opción 1');

return (
  <>
    <select
      value={opcion}
      onChange={(e) => setOpcion(e.target.value)}
      className="border rounded px-3 py-2"
    >
      <option>Opción 1</option>
      <option>Opción 2</option>
      <option>Opción 3</option>
    </select>
    <p>Seleccionó: {opcion}</p>
  </>
);
```

---

### Ejemplo 5: Checkbox

**Streamlit:**
```python
acepto = st.checkbox("Acepto los términos")
if acepto:
    st.write("✅ Términos aceptados")
```

**Next.js/React:**
```tsx
const [acepto, setAcepto] = useState(false);

return (
  <>
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={acepto}
        onChange={(e) => setAcepto(e.target.checked)}
        className="mr-2"
      />
      Acepto los términos
    </label>
    {acepto && <p>✅ Términos aceptados</p>}
  </>
);
```

---

### Ejemplo 6: Radio Buttons

**Streamlit:**
```python
genero = st.radio("Género", ["Masculino", "Femenino", "Otro"])
st.write(f"Género: {genero}")
```

**Next.js/React:**
```tsx
const [genero, setGenero] = useState('Masculino');

return (
  <>
    <div>
      <label>Género:</label>
      <label className="block">
        <input
          type="radio"
          value="Masculino"
          checked={genero === 'Masculino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Masculino
      </label>
      <label className="block">
        <input
          type="radio"
          value="Femenino"
          checked={genero === 'Femenino'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Femenino
      </label>
      <label className="block">
        <input
          type="radio"
          value="Otro"
          checked={genero === 'Otro'}
          onChange={(e) => setGenero(e.target.value)}
        />
        Otro
      </label>
    </div>
    <p>Género: {genero}</p>
  </>
);
```

---

### Ejemplo 7: Button

**Streamlit:**
```python
if st.button("Enviar"):
    st.success("Formulario enviado!")
```

**Next.js/React:**
```tsx
const [enviado, setEnviado] = useState(false);

const handleEnviar = () => {
  setEnviado(true);
  // Lógica adicional
};

return (
  <>
    <button
      onClick={handleEnviar}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Enviar
    </button>
    {enviado && (
      <div className="bg-green-100 text-green-800 p-3 rounded mt-2">
        ✅ Formulario enviado!
      </div>
    )}
  </>
);
```

---

### Ejemplo 8: Sidebar

**Streamlit:**
```python
with st.sidebar:
    st.title("Navegación")
    opcion = st.radio("Ir a:", ["Inicio", "Calculadoras", "Acerca de"])
```

**Next.js/React:**
```tsx
// Crear componente Sidebar.tsx
export default function Sidebar({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Navegación</h2>
      <nav>
        <button
          onClick={() => onNavigate('inicio')}
          className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded"
        >
          Inicio
        </button>
        <button
          onClick={() => onNavigate('calculadoras')}
          className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded"
        >
          Calculadoras
        </button>
        <button
          onClick={() => onNavigate('acerca')}
          className="block w-full text-left px-3 py-2 hover:bg-gray-200 rounded"
        >
          Acerca de
        </button>
      </nav>
    </aside>
  );
}

// Usar en página principal
const [currentPage, setCurrentPage] = useState('inicio');

return (
  <div className="flex">
    <Sidebar onNavigate={setCurrentPage} />
    <main className="flex-1">
      {/* Contenido según currentPage */}
    </main>
  </div>
);
```

---

### Ejemplo 9: Tabs

**Streamlit:**
```python
tab1, tab2, tab3 = st.tabs(["Datos", "Gráfico", "Info"])

with tab1:
    st.write("Contenido de Datos")

with tab2:
    st.write("Contenido de Gráfico")

with tab3:
    st.write("Contenido de Info")
```

**Next.js/React:**
```tsx
const [activeTab, setActiveTab] = useState('datos');

return (
  <>
    <div className="border-b border-gray-200">
      <nav className="flex space-x-8">
        {['datos', 'grafico', 'info'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>

    <div className="mt-4">
      {activeTab === 'datos' && <div>Contenido de Datos</div>}
      {activeTab === 'grafico' && <div>Contenido de Gráfico</div>}
      {activeTab === 'info' && <div>Contenido de Info</div>}
    </div>
  </>
);
```

---

### Ejemplo 10: Expander (Accordion)

**Streamlit:**
```python
with st.expander("Ver más información"):
    st.write("Contenido adicional aquí")
    st.write("Más detalles...")
```

**Next.js/React:**
```tsx
const [isExpanded, setIsExpanded] = useState(false);

return (
  <div className="border rounded">
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="w-full text-left px-4 py-2 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
    >
      <span>Ver más información</span>
      <span>{isExpanded ? '▼' : '▶'}</span>
    </button>
    {isExpanded && (
      <div className="px-4 py-3 border-t">
        <p>Contenido adicional aquí</p>
        <p>Más detalles...</p>
      </div>
    )}
  </div>
);
```

---

## 🎨 SISTEMA DE ESTILOS

### Streamlit vs Tailwind CSS

**Streamlit** usa configuración en `config.toml`:
```toml
[theme]
primaryColor = "#0066cc"
backgroundColor = "#FFFFFF"
```

**Next.js con Tailwind** usa clases utilitarias:
```tsx
// Colores
<div className="bg-blue-600 text-white">Fondo azul, texto blanco</div>

// Espaciado
<div className="p-4 m-2">Padding 1rem, margin 0.5rem</div>

// Tipografía
<h1 className="text-3xl font-bold">Título grande</h1>

// Bordes y sombras
<div className="border rounded-lg shadow-md">Card con sombra</div>

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

---

## 🔧 FUNCIONALIDADES ESPECIALES

### Gráficos

**Streamlit:** `st.plotly_chart()`, `st.line_chart()`

**Next.js:** Usa librerías como:
- **Recharts**: Para gráficos simples
- **Chart.js**: Para gráficos avanzados
- **Plotly React**: Para interactividad compleja

Ejemplo con Recharts:
```bash
npm install recharts
```

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { name: 'Ene', valor: 400 },
  { name: 'Feb', valor: 300 },
  { name: 'Mar', valor: 600 },
];

<LineChart width={600} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Line type="monotone" dataKey="valor" stroke="#8884d8" />
</LineChart>
```

---

### DataFrames

**Streamlit:** `st.dataframe(df)`

**Next.js:** Usa librerías como:
- **TanStack Table** (react-table)
- **AG Grid**
- Tabla HTML simple

Ejemplo simple:
```tsx
interface Data {
  id: number;
  nombre: string;
  valor: number;
}

const datos: Data[] = [
  { id: 1, nombre: 'Item 1', valor: 100 },
  { id: 2, nombre: 'Item 2', valor: 200 },
];

<table className="min-w-full border">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left">ID</th>
      <th className="px-6 py-3 text-left">Nombre</th>
      <th className="px-6 py-3 text-left">Valor</th>
    </tr>
  </thead>
  <tbody>
    {datos.map((item) => (
      <tr key={item.id} className="border-t">
        <td className="px-6 py-4">{item.id}</td>
        <td className="px-6 py-4">{item.nombre}</td>
        <td className="px-6 py-4">{item.valor}</td>
      </tr>
    ))}
  </tbody>
</table>
```

---

## 📝 PLANTILLA DE CONVERSIÓN

Para convertir cualquier función de Streamlit:

```tsx
'use client'; // Siempre al inicio si usas useState

import { useState } from 'react';

export default function MiCalculadora() {
  // 1. Define estados para cada input de Streamlit
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  // 2. Crea funciones para cálculos
  const calcular = () => {
    // Tu lógica aquí
    const res = parseFloat(valor1) + parseFloat(valor2);
    setResultado(res);
  };

  // 3. Renderiza UI
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Mi Calculadora</h2>
      
      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="number"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          placeholder="Valor 1"
          className="w-full border rounded px-3 py-2"
        />
        
        <input
          type="number"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          placeholder="Valor 2"
          className="w-full border rounded px-3 py-2"
        />
        
        <button
          onClick={calcular}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calcular
        </button>
      </div>
      
      {/* Resultado */}
      {resultado !== null && (
        <div className="mt-4 p-4 bg-blue-50 rounded">
          <p className="font-semibold">Resultado: {resultado}</p>
        </div>
      )}
    </div>
  );
}
```

---

## ✅ CHECKLIST DE MIGRACIÓN

Para cada feature de tu app Streamlit:

- [ ] Identificar qué componentes de Streamlit usa
- [ ] Buscar el equivalente en la tabla de arriba
- [ ] Crear estados necesarios con `useState`
- [ ] Implementar la lógica de cálculo
- [ ] Crear el UI con JSX y Tailwind
- [ ] Probar localmente con `npm run dev`
- [ ] Hacer commit y push a GitHub
- [ ] Verificar en Vercel

---

¡Con esta guía puedes convertir cualquier componente de Streamlit a Next.js! 🚀
