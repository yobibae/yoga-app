import { useParams } from "react-router-dom";
import yogaPoses from './yoga_poses.json';
import YogaCard from "./YogaCard";

function Pose() {
  const params = useParams();

  const pose = yogaPoses.find(p => p.id === params.id);

  return (
    <div className="container-sm pose-view">
      <div className="row">
        <div className="col pose-card-wrapper">
          <YogaCard
            pose={pose}
            displayDescription
          />
        </div>
      </div>
    </div>
  )
}

export default Pose;
