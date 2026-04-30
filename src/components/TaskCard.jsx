function TaskCard({ tarefa, onAlternar, onRemover }) {
  return (
    <div className={`task-card ${tarefa.priority === 'Alta' ? 'alta' : tarefa.priority === 'Média' ? 'media' : 'baixa'} ${tarefa.done ? 'done' : ''}`}>
      <div className="task-info">
        <span className="task-title">{tarefa.title}</span>
        <span className="task-priority">{tarefa.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => onAlternar(tarefa.id)}>
          {tarefa.done ? '↩ Desfazer' : '✔ Concluir'}
        </button>
        <button className="btn-remover" onClick={() => onRemover(tarefa.id)}>
          🗑
        </button>
      </div>
    </div>
  )
}

export default TaskCard