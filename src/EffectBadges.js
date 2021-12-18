import yogaEffects from './yoga_effects.json';
import Badge from './Badge';

function EffectBadges({ effects, currentFilters }) {
  return (
    <ul className="filters-list list-unstyled">
      {effects.map(effect => (
        <li className="filter-item" key={effect}>
          <Badge
            label={yogaEffects[effect]}
            isHighlighted={currentFilters.includes(effect)}
            key={yogaEffects[effect]}
          />
        </li>
      ))}
    </ul>
  )
}

EffectBadges.defaultProps = {
  currentFilters: []
};

export default EffectBadges;