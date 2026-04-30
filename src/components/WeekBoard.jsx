import DayColumn from './DayColumn'

const dias = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']

function WeekBoard({ tarefas, onAlternar, onRemover }) {
  return (
    <div className="week-board">
      {dias.map(dia => (
        <DayColumn
          key={dia}
          dia={dia}
          tarefas={tarefas}
          onAlternar={onAlternar}
          onRemover={onRemover}
        />
      ))}
    </div>
  )
}

export default WeekBoard