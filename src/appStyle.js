import styled from "styled-components";
import daytime from "./assets/images/mobile/bg-image-daytime.jpg";

export const AppStyle = styled.div`
  background-image: url(${daytime});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  
  :after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: .3;
    top: 0;
    left: 0;
    background-color: black;
  }

`
