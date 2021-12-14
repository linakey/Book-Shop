import { Box, Grid } from '@material-ui/core';
import React from 'react';
import Content from '../components/Content/Content';
import Footer from '../components/Footer';
 
 
import Sidebar from '../components/Sidebar/Sidebar';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home/Home';
 
import NewsLetter from '../components/NewsLetter';

const MainPage = () => {
    return (
        <MainLayout>
            <Box p={5}>
                <Grid container spacing={3}>
                    <Home/>
                      
                    <Sidebar />
                    <Content />
                    <NewsLetter/>
                    <Footer/>
                </Grid>
            </Box>
        </MainLayout>
    );
};

export default MainPage;
