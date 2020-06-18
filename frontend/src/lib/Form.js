import styled from 'styled-components'

import img from './images/darkleaves.jpg';

export const Form = styled.form`
margin-top: 80px;
width: 400px;
height: auto;
border: 1px solid #004c1f;
border-radius: 4px;
margin: 0 auto;
display: flex;
padding: 1rem;
flex-direction: column;
align-content: flex-start;
justify-content: flex-start;
text-align: center;
align-items: center;
line-height: 2rem;   
   h1{
    background-image: url(${img});
    font-family: Merriweather;
    background-size: cover;
    color: whitesmoke;
    background-position:50% 50%;
    padding: 20px;
    margin:-1rem -1rem 0 -1rem;
   }
   label{
     margin-top: 10px;
     align-self: flex-start;
   }
   input{
    height: 1.5rem;
    width: 200px;
    margin: 0 50px;
   }
      &:focus{
     border: yellow;
   }
`

export const Button = styled.button`
width: 150px;
background-color: #9ec2a2;
border-radius: 2px;
color: white;
&:hover {
    background: wheat;
    color: #9ec2a2;
  }
`
