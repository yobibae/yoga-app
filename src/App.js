import { Component } from 'react';
import yogaPoses from './yoga_poses.json';
import YogaCard from './YogaCard';
import Filters from './Filters';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
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
      <div className="container">
        <h1>Yoga App</h1>
        <div className="row">
          <Filters currentFilters={currentFilters} onClick={this.handleClickFilter} />
        </div>
        <div className="row" data-masonry='{"percentPosition": true }'>
          {visiblePoses.map(pose => (
            <YogaCard pose={pose} key={pose.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
