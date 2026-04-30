import TaskCard from './TaskCard'

function DayColumn({ dia, tarefas, onAlternar, onRemover }) {
  const tarefasDoDia = tarefas.filter(t => t.day === dia)

  return (
    <div className="day-column">
      <h3>{dia}</h3>
      {tarefasDoDia.length === 0 ? (
        <p className="empty">Nenhuma tarefa</p>
      ) : (
        tarefasDoDia.map(tarefa => (
          <TaskCard
            key={tarefa.id}
            tarefa={tarefa}
            onAlternar={onAlternar}
            onRemover={onRemover}
          />
        ))
      )}
    </div>
  )
}

export default DayColumn