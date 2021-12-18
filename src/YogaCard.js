import { Link } from "react-router-dom";
import EffectBadges from "./EffectBadges";

function YogaCard(props) {
  const url = `${document.location.origin}/poses/${props.pose.id}`;
  return (
    <div className="yoga-card card h-100">
      <Link to={`/poses/${props.pose.id}`}>
        <img
          className="card-img-top"
          width="100%"
          src={`/images/${props.pose.id}.jpg`}
          alt="card"
        />
      </Link>
      <div className="card-body">
        <div className="card-content">
          <h5 className="card-title">
            <Link to={`/poses/${props.pose.id}`}>
              {props.pose.name}
            </Link>
          </h5>
          <EffectBadges
            effects={props.pose.effects}
            currentFilters={props.currentFilters}
          />
        </div>
      </div>
      {props.displayDescription && (
        <ul className="yoga-steps list-group list-group-flush">
          {props.pose.description.map((description, index) => (
            <li className="list-group-item" key={description}>
              <div className="pose-step-index text-white bg-success">{index + 1}</div>
              <div className="pose-step-description text-success bg-white">{description}</div>
            </li>
          ))}
        </ul>
      )}
      <div className="card-footer">
        <ul className="list-unstyled social-actions">
          <li>
            <a href={`mailto:?body=${url}&subject=${props.pose.name}`}>
              <i className="bi bi-envelope"></i>
            </a>
          </li>
          <li>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noreferrer">
              <i className="bi bi-facebook"></i>
              </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${url}`}>
              <i className="bi bi-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="card-type">
          <small className="text-muted">{props.pose.type}</small>
        </div>
      </div>
    </div>
  );
}

export default YogaCard;
