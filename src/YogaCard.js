import yogaEffects from './yoga_effects.json';

function YogaCard(props) {
  return (
    <div class="col-sm-6 col-lg-4 mb-4">
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
              <span class="badge bg-secondary">{yogaEffects[effect]}</span>
            ))}
          </ul>
          {props.pose.description.map(description => (
            <p class="card-text">{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YogaCard;
