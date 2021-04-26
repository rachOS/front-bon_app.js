// import core
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function PrivateRoute({ path, component }) {
  return <Route exact path={path} component={component} />;
}

PrivateRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
};

export default PrivateRoute;
