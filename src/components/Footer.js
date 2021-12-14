import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";
 
import styled from "styled-components"
 


const Container = styled.div`
display: flex;

 
`;


const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;


const Logo = styled.h1`
font-family: Georgia;
font-size: 40px;
display: flex;
color: rgba(37, 159, 235, 0.911);

`;

const Desc = styled.p`
margin: 20px 0px;
display: flex;
 text-align: space-between;
 font-size: 16px;
font-family: Lucida Sans Unicode;

`;

const SocialContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
&:hover {
    transform: translateY(-20px);
   
        transition: 2s;
      
    }
 

`;


const Center = styled.div`
flex: 1;
padding: 20px;
 
`;

const Title = styled.h3`
margin-bottom: 30px;
font-family: Georgia;
font-size: 30px;
color: rgba(37, 159, 235, 0.911);

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
font-size: 20px;
 
`;

const Right = styled.div`
flex: 1;
padding: 20px;
 

`;

const ContactItem = styled.div`
margin-bottom: 20px;
font-size: 20px;
 
display: flex;
align-items: center;

`;


 const Payment = styled.img`
 width: 50px;

 `


const Footer = () => {
    return (
        <Container>
            <Left>
              <Logo>BOOK SHOP</Logo>
              <Desc>
              
              All data presented on the site are purely informational in nature and are not exhaustive. For more information, please contact the company's 
              managers at the phone numbers listed on the website.
                    
                
              </Desc>
             
            </Left>


            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>About us</ListItem>
                    <ListItem>Contacts</ListItem>
                    <ListItem>Booking</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>My Account</ListItem>
                    
                </List>
                <SocialContainer>
                  <a href="https://www.instagram.com/">
                  <SocialIcon color="E4405F">
                      <Instagram/>
                  
                  </SocialIcon>
                  </a>
                  
                     <a href="https://www.facebook.com/">
                      <SocialIcon color="3B5999">
                      <Facebook/>
                        </SocialIcon >

                         </a>

                     <a href="https://www.twitter.com/">
                        <SocialIcon color="55ACEE">
                          <Twitter/>
                         </SocialIcon>
                    </a>
                     <a href="https://www.pinterest.ru/">
                    <SocialIcon color="E60023">
                      <Pinterest/>
                  </SocialIcon>
                     </a>
                
              </SocialContainer>
            </Center>


            <Right>

         <Title>Contact</Title>
         <ContactItem>
             <Room styled={{marginRight:"10px"}}/>
           Tabyshalieva 29
         </ContactItem>
         <ContactItem>
             <Phone styled={{marginRight:"10px"}}/>
            +1 234 45 456
         </ContactItem>
         <ContactItem>
             <MailOutline styled={{marginRight:"10px"}}/>
             bookshop@bish
         </ContactItem>
         <Payment src =""/>
            </Right>
        </Container>
    )
}

export default Footer