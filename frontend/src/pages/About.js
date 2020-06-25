import React from "react"
import styled from 'styled-components'
import img from '../lib/images/canva.jpg'

export const AboutContainer = styled.div`
height: auto;
margin: 0 auto;
display: flex;
justify-content:center;
img{
    width:600px;
}
`;
export const About = () => {
    return (
        <AboutContainer>
            <img src={img} alt="about info" />
        </AboutContainer>
    )
}
