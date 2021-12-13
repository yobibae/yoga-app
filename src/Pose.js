import { useParams } from "react-router-dom";
import Badge from "./Badge";
import yogaPoses from './yoga_poses.json';
import yogaEffects from './yoga_effects.json';

function Pose() {
  const params = useParams();

  const pose = yogaPoses.find(p => p.id === params.id);

  return (
    <div className="row">
      <div className="col">
        <img
          className="card-img-top"
          width="100%"
          src={`/images/${pose.id}.jpg`}
          alt="pose"
        />
        <div class="card-body">
          <h1 class="card-title">{pose.name}</h1>
          <ul>
            {pose.effects.map(effect => (
              <Badge
                label={yogaEffects[effect]}
                key={yogaEffects[effect]}
              />
            ))}
          </ul>
          {pose.description.map(description => (
            <p class="card-text">{description}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pose;
