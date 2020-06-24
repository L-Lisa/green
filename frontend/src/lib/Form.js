import styled from 'styled-components/macro'
import img from './images/darkleaves.jpg'

export const Form = styled.form`
margin-top: 80px;
width: 320px;
height: auto;
border: 1px solid #004c1f;
border-radius: 4px;
margin: 0 auto;
display: flex;
margin-top: 15px;
flex-direction: column;
align-content: flex-start;
justify-content: flex-start;
text-align: center;
align-items: center;
line-height: 2rem;   
box-shadow: 0px 10px 30px -15px rgba(0, 0, 0, 0.3);
margin-bottom: 15px;
background-color: #fff;
   h1{
    background-image: url(${img});
    font-family: Merriweather;
    background-size: cover;
    color: whitesmoke;
    background-position:50% 50%;
    padding: 20px;
    width: 100%;
   }
   label{
     margin-top: 10px;
     padding:10px;
     width: 300px;
     display: flex;
     justify-content: space-between;
   }
   button{
     margin: 15px;
     border-radius: 4px;
   }
   input{
     width: 180px;
    &:focus{
     border: yellow;
   }
   }
   span{
     border: 1px solid black;
     border-radius: 2px;
     padding: 4px;
     align-self: flex-end;
     margin:5px;
     &:hover {
    background: #9ec2a2;
    color: white;
  }
   }
`;
export const Button = styled.button`
width: 150px;
background-color: #9ec2a2;
border-radius: 2px;
color: white;
margin: 5px;
&:hover {
    background: wheat;
    color: #9ec2a2;
  }
`
