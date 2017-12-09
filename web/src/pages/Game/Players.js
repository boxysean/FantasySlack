import React from 'react';
import PropTypes from 'prop-types';

import PlayersStandingsTable from './PlayersStandingsTable';

class Players extends React.Component {
  static propTypes = {
    game: PropTypes.object,
  };

  render() {
    if (this.props.game) {
      return (
        <div>
          <h1>Players</h1>
          <PlayersStandingsTable slug={this.props.game.slug} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Players;
