import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { plant } from "../reducers/plantReducer"
import styled from "styled-components/macro"

const DetailsContainer = styled.section`
display: flex;
flex-direction: column;
justify-self:center;
width: fit-content;
height: max-content;
width: 320px;
border: solid 1px rgba(0, 0, 0, 0.2);
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
border-radius: 3px;
background: white;
margin: 0 auto;
margin-top: 40px;
margin-bottom: 30px;
background-color: #9ec2a285;
    @media (min-width: 650px) {
    flex-direction:row;
    height: fit-content;
    width: max-content;
    }
    img{
    width: auto;
    height: unset;
    margin: 5px 0;
    object-fit: contain;
    width: 318px;
    }
    h1{
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    color: black; 
    text-align: center;
    padding-top: 2px;
    @media (min-width: 650px) {
    align-self: center;
    padding: 10px;
    width: 150px
    }
    }
    h2{
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1.5px;
    color: black; 
    text-align: center;
    padding-top: 2px;
    }
    h3{
    font-size: 1rem;
    }
    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    @media (min-width: 650px) {
    width: 200px
    }
    @media (min-width: 750px) {
    width: 300px
    }
    @media (min-width: 850px) {
    width: 400px
    }}
    a{
    color: black;
    }
    `;

export const SinglePlantPage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState();
    const singleUrl = `https://home-grown-green.herokuapp.com/plants/${id}`
    useEffect(() => {
        fetch(singleUrl)
            .then(res => res.json())
            .then(json => setDetails(json))
    }, [singleUrl, id])

    return (
        <DetailsContainer>
            <h1>Bring me home!</h1>
            <img src={details?.imageUrl} key={details?._id} />
            <div>
                <h2> {details?.title}</h2>
                <h3>{name?.name}</h3>
                <h3>{details?.description}</h3>
                <a href={`mailto:${details?.email}`}>Contact & buy: <i className="fas fa-envelope fa-2x"></i></a>
            </div>
        </DetailsContainer>
    )
}

