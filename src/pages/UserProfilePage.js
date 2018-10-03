import React from 'react';
import classes from './Pages.css'

const UserProfilePage = ({ match }) => (
  <div>
    User Profile for user: {match.params.userId}
    <button className={classes.BreadBottom} />
  </div>
)

export default UserProfilePage