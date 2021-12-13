function Badge(props) {
  const bgClassName = props.isHighlighted ? 'bg-primary' : 'bg-secondary';
  return (
    <span className={`badge ${bgClassName}`}>{props.label}</span>
  )
}

export default Badge;