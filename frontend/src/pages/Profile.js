import React, { useState, useEffect } from 'react';
import { user, logout, getProfileMessage } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { AddPlant } from "../components/AddPlant"
import { PlantList } from "../components/PlantList"
import styled from "styled-components/macro"

const URL = 'https://home-grown-green.herokuapp.com/users';
export const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const userId = useSelector((store) => store.user.login.userId);
  const profileMessage = useSelector((store) => store.user.login.profileMessage);
  const errorMessage = useSelector((store) => store.user.login.errorMessage);

  return (
    <ProfileContainer>
      <div>
        <h1>Welcome</h1>
        <input
          type="submit"
          onClick={(e) => dispatch(getProfileMessage())}
          value="secretendpoint/getname tester"
        />
        {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
        {profileMessage && <h4> Welcome to your Home Grown page {`${profileMessage}`}</h4>}
        {/*  <h4>userId :</h4>
      <p> {`${userId}`}</p>
      <h4>accessToken :</h4>
      <p> {`${accessToken}`}</p> */}
      </div>
      <AddPlant />
      <PlantList />


      {/* <input
        type="submit"
        onClick={(e) => dispatch(logout())}
        value="Test Logout"
      /> */}

    </ProfileContainer>
  );
};

export const ProfileContainer = styled.section`
div{


}
`