import { Link } from "react-router-dom";
import Badge from './Badge';
import yogaEffects from './yoga_effects.json';

function YogaCard(props) {
  return (
    <div class="col-sm-6 col-lg-4 mb-4">
      <Link to={`/poses/${props.pose.id}`}>
        <div class="card">
          <img
            className="card-img-top"
            width="100%"
            src={`/images/${props.pose.id}.jpg`}
          />
          <div class="card-body">
            <h5 class="card-title">{props.pose.name}</h5>
            <ul>
              {props.pose.effects.map(effect => (
                <Badge
                  label={yogaEffects[effect]}
                  isHighlighted={props.currentFilters.includes(effect)}
                  key={yogaEffects[effect]}
                />
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default YogaCard;
