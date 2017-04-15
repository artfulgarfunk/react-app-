import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className='app-container'>
        <header>
          <Link to='/'>
          // presumably just links to homepage (samepage)
            <img className='logo' src='/img/log-judo-heroes.png'/>
          </Link>
        </header>
        <div className='app-content'>{this.props.children}</div>
        <footer>
          <p>
            This is a lovely, lovely demo application
          </p>
        </footer>
      </div>
    );
  }
}
