import React from 'react';
import { Link } from 'react-router';

export default class AthletePreview extends React.Component {
  render() {
    return (
      <Link to={`/athlete/${this.props.id}`}>
      // creating a link to a path...whatever props.id Link gets passed, it creates a link to that path. 
        <div className="athlete-preview">
          <img src={`img/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count"><img src="/img/medal.png"/> {this.props.medals.length}</span>
        </div>
      </Link>
    );
  }
}
