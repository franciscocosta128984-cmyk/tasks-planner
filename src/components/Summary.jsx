function Summary({ tarefas }) {
  const total = tarefas.length
  const concluidas = tarefas.filter(t => t.done).length
  const pendentes = total - concluidas

  return (
    <div className="summary">
      <div className="summary-card">
        <span>Total</span>
        <strong>{total}</strong>
      </div>
      <div className="summary-card">
        <span>Concluídas</span>
        <strong>{concluidas}</strong>
      </div>
      <div className="summary-card">
        <span>Pendentes</span>
        <strong>{pendentes}</strong>
      </div>
    </div>
  )
}

export default Summary