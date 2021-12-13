import yogaEffects from './yoga_effects.json';

function Filters({ currentFilters, onClick }) {
  return (
    <ul>
      {Object.keys(yogaEffects).map(effectKey => {
        const bgClassName = currentFilters.includes(effectKey) ? 'bg-primary' : 'bg-secondary';
        return (
          <li key={effectKey} onClick={() => onClick(effectKey)}>
            <span class={`badge ${bgClassName}`}>
              {yogaEffects[effectKey]}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default Filters;
