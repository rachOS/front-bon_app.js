// import core
import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileContainer({ getUserDatas }) {
  return (
    <>
      <Profile getUserDatas={getUserDatas} />
    </>
  );
}
ProfileContainer.propTypes = {
  getUserDatas: PropTypes.func,
};
export default ProfileContainer;
