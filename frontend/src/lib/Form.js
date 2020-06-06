import styled from 'styled-components'

export const Form = styled.form`
  width: 300px;
  height: auto;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 2rem;
  
   &:focus{
     color: yellow;
   }
`

export const Button = styled.button`
width: 150px;
background-color: green;
color: wheat;
&:hover {
    background: wheat;
    color: green;
  }
`