import React from "react"
import styled from 'styled-components'
import img from '../lib/images/lightleaves.jpg'

export const Footer = () => {
    return (
        <FooterSection>
            <Contact> <p>We would love to hear from you: </p><a href="mailto:someone@example.com">Send email</a>
            </Contact>
        </FooterSection>
    )
}

const FooterSection = styled.div`
background-color: #e3eee4;
background-image: url(${img});
background-attachment: fixed;
background-size: contain;
height: 100px;
`

const Contact = styled.div`
margin-left: 10px;
height:max-content;
a{
    color: black;
}
`