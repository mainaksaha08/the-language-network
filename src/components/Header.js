import styled from 'styled-components';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {GiHamburgerMenu} from 'react-icons/gi';
import react from 'react';
import {AiOutlineCloseSquare} from 'react-icons/ai';

class Header extends react.Component {

  render() {

    function expand () {
      document.getElementById('curriList').style.visibility='visible';
      document.getElementById('curriList').style.top='51px';
      
    }
    function retract () {
      document.getElementById('curriList').style.visibility='hidden';
      document.getElementById('curriList').style.top='25px';

    }
    function menuBackExpand () {
      document.getElementById('overlay').style.width='100vw';
      document.getElementById('sidemenu').style.width='60vw';
    }

    function menuBackRetract () {
      document.getElementById('sidemenu').style.width='0vw';
      setTimeout(function wait(){
        document.getElementById('overlay').style.width='0vw';
    }, 500);
    }
    
    function curriListMExpand() {
      var text2 = "100%"
      var dom = document.getElementById('curriListM')
      var height = dom.style.height;
      var compare = height.localeCompare(text2);
      if (compare == -1) {
        dom.style.height='100%';
      }
      else if(compare == 0) {
        dom.style.height='0';   
        }
    }


    return(    
   <Nav>
     <Overlay id='overlay' onMouseDown={menuBackRetract}>
     </Overlay>
     <Sidemenu id='sidemenu'>
        <CloseBtn>
          <AiOutlineCloseSquare style={{color: '#000', float: 'right', fontSize: '37px'}} onMouseDown={menuBackRetract}/>
        </CloseBtn>
        <List>
          <li>Curriculum</li>
          <li onMouseDown={curriListMExpand}>Courses
          <IoIosArrowDown />
          </li>
          <div id='curriListM' >
            <ul>
              <span>KIDS COURSES</span>
              <a>English for kids</a>
              <a>French for kids</a>
              <a>Spanish for kids</a>
              <a>German for kids</a>
              <a>Mandarin for kids</a>
              <a>Japanese for kids</a>
              <a>Korean for kids</a>
            </ul>
            <ul>
              <span>ADOLESCENTS COURSES</span>
              <a>English for adolescents</a>
              <a>French for adolescents</a>
              <a>Spanish for adolescents</a>
              <a>German for adolescents</a>
              <a>Mandarin for adolescents</a>
              <a>Japanese for adolescents</a>
              <a>Korean for adolescents</a>
            </ul>
            <ul>
              <span>KIDS COURSES</span>
              <a>Introductory Courses</a>
              <a>Learn English</a>
              <a>Learn French</a>
              <a>Learn Spanish</a>
              <a>Learn German</a>
              <a>Learn Mandarin</a>
              <a>Learn Japanese</a>
              <a>Learn Korean</a>
            </ul>
            <ul>
              <span>PRICING</span>
              <a>English</a>
              <a>French</a>
              <a>Spanish</a>
              <a>German</a>
              <a>Mandarin</a>
              <a>Japanese</a>
              <a>Korean</a>
            </ul>
          </div>
          <li>Book a free trail</li>
        </List>
     </Sidemenu>
    <Logo>
      <img src="/images/Logo-website.png" alt="Logo" />
    </Logo>
    <NavMenu>
      <a>
        <span>Curriculum</span>
      </a>
      <a>
        <span id='curriculum'  onMouseOver={expand} onMouseLeave={retract}>
          courses
          <IoIosArrowDown />

         <div id='curriList' >
            <ul>
              <span>KIDS COURSES</span>
              <a>English for kids</a>
              <a>French for kids</a>
              <a>Spanish for kids</a>
              <a>German for kids</a>
              <a>Mandarin for kids</a>
              <a>Japanese for kids</a>
              <a>Korean for kids</a>
            </ul>
            <ul>
              <span>ADOLESCENTS COURSES</span>
              <a>English for adolescents</a>
              <a>French for adolescents</a>
              <a>Spanish for adolescents</a>
              <a>German for adolescents</a>
              <a>Mandarin for adolescents</a>
              <a>Japanese for adolescents</a>
              <a>Korean for adolescents</a>
            </ul>
            <ul>
              <span>KIDS COURSES</span>
              <a>Introductory Courses</a>
              <a>Learn English</a>
              <a>Learn French</a>
              <a>Learn Spanish</a>
              <a>Learn German</a>
              <a>Learn Mandarin</a>
              <a>Learn Japanese</a>
              <a>Learn Korean</a>
            </ul>
            <ul>
              <span>PRICING</span>
              <a>English</a>
              <a>French</a>
              <a>Spanish</a>
              <a>German</a>
              <a>Mandarin</a>
              <a>Japanese</a>
              <a>Korean</a>
            </ul>
          </div>
        </span>
      </a>

    </NavMenu>
    <Trial>
      <span>
        Book a free trial
      </span>
      
    </Trial>
    <Menu onMouseDown={menuBackExpand}>
        <GiHamburgerMenu style={{color: 'rgb(0 0 0)', width: "75%", height: '100%'}}/>
    </Menu>
  </Nav>
    )
}
}





const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 12vh;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 36px; */
  padding: 5px 80px 5px 80px;
  letter-spacing: 16px;
  z-index: 3;

  @media (max-width: 768px) {
      padding: 0 36px;
  }    
`;

const Logo = styled.a`
  padding: 0;
  width: 120px;
  margin-top: 4px;
  max-height: 80px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;


const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      display: flex;
      align-items: center;

      color: #000;
      font-size: 17px;
      font-weight: 500;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-decoration: none;
      /* transition: all 0.2s ease 0s; */
        &:hover {
          color: #707070;
        }
        
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        color: white;
        background-color: #ffffff;
        box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
        position: absolute;
        padding: 0;
        margin: 0;
        left: -356px;
        transition: all 0.2s ease 0s;
        top: 25px;
        min-width: 100vw;
        min-height: 30vh;
        overflow: visible;
        visibility: hidden;
        opacity: 1;
        
        
        ul{
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          span{
            font-size: 16px;
            font-weight: 500;
            font-family: 'roboto',Sans-serif;
          }
          a {
            font-family: 'Poppins',sans-serif;
            font-size: 11px;
            color: #777;
            padding: 0;
            &:hover{
              color: #40cbbb;
            }
          }
        }


    }
    }

        
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Trial = styled.a`
  background-color: #00cfb7;
  font-size: 16px;
    font-weight: 400;
    line-height: 0.8em;
    border-radius: 10px;    
    padding: 20px 30px 20px 30px;
    letter-spacing: 1.5px;
  span{
    display: flex;
    text-align: center;
    border: 0;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    vertical-align: baseline;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`

  width: 50px;
  @media (min-width: 768px){
    display: none;
  }

`;

const Overlay = styled.div`
  left: 0;
  top: 0;
  height: 100vh;
  width: 0vw;
  margin: 0;
  padding: 0;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  z-index: 5;
  overflow: visible;
  transition: all 0.2s ease 0s;
  @media (min-width: 768px){
    display: none;
  }

`;
const Sidemenu = styled.div`
  left: 0;
  top: 0;
  height: 100vh;
  width: 0vw;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  position: absolute;
  z-index: 6;
  transition: all 0.5s ease 0.2s;
  overflow: scroll;
  @media (min-width: 768px){
    display: none;
  }

`;

const CloseBtn = styled.div`
  /* width: 100%; */
  min-height: 40px;
`;

const List = styled.ul`
  padding: 0;
  li{
    position: relative;
    display: flex;
    align-items: center;
    color: #000;
    letter-spacing: 1px;
    padding: 10px 15px;
    font-family: poppins,Sans-serif;
    font-size: 20px;
    font-weight: 500;
    &:hover{
      color: #707070;
    }
  }
  div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        color: white;
        background-color: #ffffff;
        box-shadow: 0px 0px 8px 0px rgb(216 216 216 / 50%);
        position: relative;
        padding: 0;
        margin: 0;
        /* left: -356px; */
        transition: all 0.2s ease 0s;
        /* top: 25px; */
        /* min-width: 100vw; */
        /* min-height: 30vh; */
        /* overflow: visible;  */
        /* visibility: hidden; */
        opacity: 1;
        letter-spacing: 1px;
        height: 0px;
        overflow: hidden;
        
        
        ul{
          padding: 12px 0 9px 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          span{
          line-height: 2em;

            color: #000;
            font-size: 17px;
            font-weight: 500;
            font-family: 'roboto',Sans-serif;
          }
          a {
          line-height: 18px;

            font-family: 'Poppins',sans-serif;
            font-size: 14px;
            color: #777;
            padding: 0;
            &:hover{
              color: #40cbbb;
            }
          }
        }


    }
`;

export default Header;
