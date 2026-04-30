import { useState } from 'react'
import tasksData from './data/tasks.json'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import WeekBoard from './components/WeekBoard'
import Summary from './components/Summary'
import './index.css'

function App() {
  const [tarefas, setTarefas] = useState(tasksData)

  // adiciona uma nova tarefa na lista
  function adicionarTarefa(novaTarefa) {
    const tarefa = {
      id: Date.now(),
      ...novaTarefa,
      done: false
    }
    setTarefas([...tarefas, tarefa])
  }

  // alterna entre concluida e pendente
  function alternarStatus(id) {
    const atualizadas = tarefas.map(t => {
      if (t.id === id) {
        return { ...t, done: !t.done }
      }
      return t
    })
    setTarefas(atualizadas)
  }

  // remove uma tarefa da lista
  function removerTarefa(id) {
    const filtradas = tarefas.filter(t => t.id !== id)
    setTarefas(filtradas)
  }

  return (
    <div className="app">
      <Header />
      <Summary tarefas={tarefas} />
      <TaskForm onAdicionar={adicionarTarefa} />
      <WeekBoard
        tarefas={tarefas}
        onAlternar={alternarStatus}
        onRemover={removerTarefa}
      />
    </div>
  )
}

export default App