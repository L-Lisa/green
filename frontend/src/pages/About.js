import React from "react"
import styled from 'styled-components'
import img from '../lib/images/canva.jpg'

export const About = () => {
    return (
        <AboutContainer>
            <img src={img} alt="about info" class="mx-auto mw-100" />
        </AboutContainer>
    )
}


export const AboutContainer = styled.div`
height: auto;
` ;