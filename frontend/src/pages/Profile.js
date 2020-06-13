import React, { useState, useEffect } from 'react';
import { user, logout, getProfileMessage } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { AddPlant } from "../components/AddPlant"
import { PlantList } from "../components/PlantList"


const URL = 'http://localhost:8080/users';
export const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const profileMessage = useSelector((store) => store.user.login.profileMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <div>
      <h1>Profile</h1>
      Here goes your uploaded images
      {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
      {profileMessage && <h4>Profile Message : {`${profileMessage}`}</h4>}
      <h4>userId :</h4>
      <p> {`${userId}`}</p>
      <h4>accessToken :</h4>
      <p> {`${accessToken}`}</p>
      <AddPlant />
      <PlantList />


      <input
        type="submit"
        onClick={(e) => dispatch(getProfileMessage())}
        value="Test Profile Endpoint"
      />
      <input
        type="submit"
        onClick={(e) => dispatch(logout())}
        value="Test Logout"
      />
    </div>
  );
};
export default Profile;
