import React, { useState, useEffect } from 'react'
import { user, logout, getProfileMessage } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { AddPlant } from "../components/AddPlant"
import { PlantList } from "../components/PlantList"
import styled from "styled-components/macro"
import img from '../lib/images/gardener.jpg'
import { Link, NavLink } from "react-router-dom"
import { Form, Button } from "../lib/Form"
const URL = 'https://home-grown-green.herokuapp.com/users'

export const ProfileContainer = styled.section`
h2{
text-transform: uppercase;
font-size: 1rem;
letter-spacing: 1.5px;
width: 80%;
text-align: center; 
margin: 0 auto;
margin-top: 30px;
background-color: #fff;
padding: 7px;
}
`;
export const DescisionContainer = styled.section`
background-image: url(${img});
width: 100%;
height: 100vh;
font-family: Merriweather;
color: whitesmoke;
background-position:50% 50%;
padding: 20px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
display: flex;
align-items: center;
justify-content: center;
  h1{
  width: max-content;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1.5px;
  width: 80%;
  font-size: 1.5rem;
  font-weight: 400;
  }
  div{
  width: 80%;
  display: flex;
  flex-direction: column;
  }
 `;

export const Profile = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const profileMessage = useSelector((store) => store.user.login.profileMessage)
  const errorMessage = useSelector((store) => store.user.login.errorMessage)

  return (
    <ProfileContainer>
      <DescisionContainer>
        <div>
          <h1>Welcome back, are you buying or selling plants today?</h1>
          <Link to="/plants"><Button>Go shopping for plants</Button></Link>
          <Button input
            type="submit"
            onClick={(e) => dispatch(getProfileMessage())}
            value="Go to profile"
          >Go to profile</Button>
        </div>
      </DescisionContainer>
      {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
      {profileMessage && <><h2> Welcome to your Home Grown page {`${profileMessage}`} Please add more plants to our page!
        </h2>
        <AddPlant />
        <PlantList />
      </>}
    </ProfileContainer>
  )
}


