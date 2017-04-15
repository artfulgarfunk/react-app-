import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
// iterating thru athleteData, creating an athletepreview for each of them. athleteDAta placeholder
// JSX spread operator...passes all the information about the current athlete as props!
        </div>
      </div>
    );
  }
}
