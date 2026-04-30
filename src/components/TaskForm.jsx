import { useState } from 'react'

const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
const prioridades = ['Baixa', 'Média', 'Alta']

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState('')
  const [dia, setDia] = useState('Segunda-feira')
  const [prioridade, setPrioridade] = useState('Baixa')

  function handleSubmit(e) {
    e.preventDefault()

    if (titulo.trim() === '') return

    onAdicionar({ title: titulo, day: dia, priority: prioridade })

    setTitulo('')
    setDia('Segunda-feira')
    setPrioridade('Baixa')
  }

  return (
    <div className="task-form">
      <h2>Nova Tarefa</h2>
      <div className="form-fields">
        <input
          type="text"
          placeholder="Nome da tarefa..."
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
        />
        <select value={dia} onChange={e => setDia(e.target.value)}>
          {dias.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select value={prioridade} onChange={e => setPrioridade(e.target.value)}>
          {prioridades.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <button onClick={handleSubmit}>Adicionar</button>
      </div>
    </div>
  )
}

export default TaskForm