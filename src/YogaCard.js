import { Link } from "react-router-dom";
import EffectBadges from "./EffectBadges";

function YogaCard(props) {
  return (
    <div class="col-sm-4 col-lg-3 mb-3">
      <Link to={`/poses/${props.pose.id}`}>
        <div class="card">
          <img
            className="card-img-top"
            width="100%"
            src={`/images/${props.pose.id}.jpg`}
          />
          <div class="card-body">
            <h5 class="card-title">{props.pose.name}</h5>
            <EffectBadges
              effects={props.pose.effects}
              currentFilters={props.currentFilters}
            />
            <h6 class="card-type">{props.pose.type}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default YogaCard;
