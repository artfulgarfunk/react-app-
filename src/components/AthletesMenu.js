import React from 'react';
import { Link } from 'react-router';

export default class AthletesMenu extends React.Component {
  render() {
    return (
      <nav className="athletes-menu">
      // expecting the data to be passed in the component through an athletes prop
        {this.props.athletes.map(menuAthlete => {
          return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
// don't fully understand line 10.
// using the prop activeClassName to use the class active when the current route
// matches the path of the link. ???? 
            {menuAthlete.name}
          </Link>;
          // generating a link component for each athlete
          // Link is a special component provided by React Router to create links between views
        })}
      </nav>
    );
  }
}
