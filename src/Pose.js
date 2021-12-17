import { useParams } from "react-router-dom";
import yogaPoses from './yoga_poses.json';
import EffectBadges from "./EffectBadges";

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
          <EffectBadges effects={pose.effects} />
          {pose.description.map(description => (
            <p class="card-text">{description}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pose;
