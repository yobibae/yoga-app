import Badge from './Badge';
import yogaEffects from './yoga_effects.json';

function Filters({ currentFilters, onClick }) {
  return (
    <ul>
      {Object.keys(yogaEffects).map(effectKey => {
        return (
          <li key={effectKey} onClick={() => onClick(effectKey)}>
            <Badge
              label={yogaEffects[effectKey]}
              isHighlighted={currentFilters.includes(effectKey)}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Filters;
