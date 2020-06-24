import React from "react"
import styled from 'styled-components'
import img from '../lib/images/canva.jpg'

export const AboutContainer = styled.div`
height: auto;
`;
export const About = () => {
    return (
        <AboutContainer>
            <img src={img} alt="about info" className="mx-auto mw-100" />
        </AboutContainer>
    )
}
