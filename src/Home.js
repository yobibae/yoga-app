import { Component } from 'react';
import yogaPoses from './yoga_poses.json';
import YogaCard from './YogaCard';
import Filters from './Filters';
import Cover from './Cover';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poses: [...yogaPoses],
      currentFilters: []
    }
  }

  handleClickFilter = (effect) => {
    if (this.state.currentFilters.includes(effect)) {
      this.setState({ currentFilters: this.state.currentFilters.filter(f => f !== effect) })
    } else {
      this.setState({ currentFilters: [...this.state.currentFilters, effect] });
    }
  }

  render() {
    const { poses, currentFilters } = this.state;
    let visiblePoses = [];
    if ( currentFilters.length === 0) {
      visiblePoses = poses;
    } else {
      currentFilters.forEach(filter => {
        poses.forEach(pose => {
          if (pose.effects.includes(filter) && !visiblePoses.includes(pose)) {
            visiblePoses.push(pose);
          }
        });
      });
    }

    return (
      <div>
        <Cover />
        <div className="container-xl">
          <div className="row">
            <Filters currentFilters={currentFilters} onClick={this.handleClickFilter} />
          </div>
          <div className="row" data-masonry='{"percentPosition": true }'>
            {visiblePoses.map(pose => (
              <YogaCard
                pose={pose}
                currentFilters={this.state.currentFilters}
                key={pose.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
