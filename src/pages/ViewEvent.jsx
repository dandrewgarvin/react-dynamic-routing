/**
 * @author Andrew Garvin
 * @timestamp April 12, 2020
 * @copyright ControlBit Studios 2020. All rights reserved.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ViewEvent() {
  return (
    <section id="ViewEvent">
      <h1>ViewEvent Section</h1>
      <Link to="/">Home</Link>
    </section>
  );
}

ViewEvent.propTypes = {};

export default ViewEvent;