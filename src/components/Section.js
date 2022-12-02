import React from 'react';
import styled from 'styled-components'
// import carDatas from "../carDatas";
import Home from "./Home";
import Fade from 'react-reveal/Fade';

function  Section (props) {

    return (
        <Wrap style={{ backgroundImage: `url(${props.backgroundImg})` }}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnText}
                        </LeftButton>
                        {props.rightBtnText &&
                            <RightButton>
                                {props.rightBtnText}
                            </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src={props.downBtn}/>
            </Buttons>

        </Wrap>
    );
};

export default Section;


const Wrap = styled.div`
  z-index: 10;
  //width:100vh;
  height:100vh;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical 
  align-items: center; //horizontal
`;

const ItemText =styled.div`
    padding-top: 20vh;
    text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const LeftButton =styled.div`
  background-color: rgba(23,26,32,0.8);
  height: 40px;
  width:256px;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin:8px
`;
const RightButton =styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color:black
    `
// ; вот то что здесь скопирует все стили которые у LeftButton чобы не переписывать все

const DownArrow = styled.img`
  margin-top:20px;
  height:40px;
  animation: animateDown infinite 1.5s;
  overflow-x:hidden;
 
`

const Buttons = styled.div`
   
`
