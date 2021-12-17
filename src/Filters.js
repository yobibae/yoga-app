import Badge from './Badge';
import yogaEffects from './yoga_effects.json';
import './Filters.css';

function Filters({ currentFilters, onClick }) {
  return (
    <div>
      <h5>フィルター</h5>
      <ul className="filters-list list-unstyled">
        {Object.keys(yogaEffects).map(effectKey => {
          return (
            <li className="filter-item" key={effectKey} onClick={() => onClick(effectKey)}>
              <Badge
                label={yogaEffects[effectKey]}
                isHighlighted={currentFilters.includes(effectKey)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filters;
