 
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
 

const Container = styled.div`
border-style: solid;
border-width: 4px;
border-radius: 50px;
background-color:rgba(37, 159, 235, 0.911);
width: 100%;
 height: 350px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;


const Title = styled.h1`
font-size: 60px;
margin-bottom: 20px;
`;


const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;


const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
 
`;

const Input = styled.input`
border: none;
flex: 8;
padding: 20px;

`;

const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputContainer>
            <Input placeholder="Your email"/>
            <Button>
                <Send/>
            </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
