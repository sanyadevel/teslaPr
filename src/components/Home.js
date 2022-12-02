import React from 'react';
import styled from "styled-components";
import Section from "./Section";


function Home (){

    return (
        <Container>
            <Section
                id={0}
                title= "Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg = "./images/model-s.jpg"
                range= {390}
                time= {1.99}
                topSpeed= {200}
                peakPower= "1,020"
                leftBtnText='CUSTOM ORDER'
                rightBtnText='EXISTING INVENTORY'
                downBtn='./images/down-arrow.svg'
            />
            <Section
                id= {1}
                title= "Model 3"
                description= "Order Online for Touchless Delivery"
                backgroundImg = "./images/model-x.jpg"
                range= "400"
                time= "2.99"
                topSpeed= "180"
                peakPower= "900"
                leftBtnText='CUSTOM ORDER'
                rightBtnText='EXISTING INVENTORY'
                downBtn='./images/down-arrow.svg'
            />
            <Section
                id= {2}
                title= "Model X"
                description ="Order Online for Touchless Delivery"
                backgroundImg= "./images/model-3.jpg"
                range= "350"
                time= "1.55"
                topSpeed= "150"
                peakPower= "1,130"
                leftBtnText='CUSTOM ORDER'
                rightBtnText='EXISTING INVENTORY'
                downBtn='./images/down-arrow.svg'
            />
            <Section
                id= {3}
                title=  "Model Y"
                description= "Order Online for Touchless Delivery"
                backgroundImg = "./images/model-y.jpg"
                range= {410}
                time= {2.05}
                topSpeed= {190}
                peakPower= "1,040"
                leftBtnText='CUSTOM ORDER'
                rightBtnText='EXISTING INVENTORY'
                downBtn= './images/down-arrow.svg'
            />
            <Section
                id= {4}
                title=  "Lowest Cost Solar Panels in America"
                description= "Money-back guarantee"
                backgroundImg = "./images/solar-panel.jpg"
                leftBtnText='ORDER NOW'
                rightBtnText='LEARN MORE'
                downBtn= './images/down-arrow.svg'

            />
            <Section
                id= {5}
                title=  "Solar for New Roofs"
                description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels "
                backgroundImg = "./images/solar-roof.jpg"
                leftBtnText='ORDER NOW'
                rightBtnText='LEARN MORE'
                downBtn= './images/down-arrow.svg'
            />
            <Section
                id= {6}
                title = "Accessories"
                description= ""
                backgroundImg = "./images/accessories.jpg"
                leftBtnText='SHOP NOW'
                downBtn= './images/down-arrow.svg'
            />
        </Container>
    )
}

export default Home;



const Container = styled.div`
height:100vh;

`