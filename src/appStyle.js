import styled from "styled-components";
import nightTimeDesk from "./assets/images/desktop/bg-image-nighttime.jpg";
import nightTimeTab from "./assets/images/tablet/bg-image-nighttime.jpg";
import nightTime from "./assets/images/mobile/bg-image-nighttime.jpg";
import dayTimeDesk from "./assets/images/desktop/bg-image-daytime.jpg";
import dayTimeTab from "./assets/images/tablet/bg-image-daytime.jpg";
import dayTime from "./assets/images/mobile/bg-image-daytime.jpg";
import {colors} from "./assets/global/colors/colors";

export const AppStyle = styled.div`
  background-image: ${props => (props.backGround ? `url(${dayTime})` : `url(${nightTime})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;  
  color: ${colors.white};
  
  :after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .3;
    top: 0;
    left: 0;
    background-color: ${colors.black};
  }

  @media screen and (min-width: 768px){
    background-image: ${props => (props.backGround ? `url(${dayTimeTab})` : `url(${nightTimeTab})`)};
  }
  
  @media screen and (min-width: 1024px){
    background-image: ${props => (props.backGround ? `url(${dayTimeDesk})` : `url(${nightTimeDesk})`)};
  }

`
