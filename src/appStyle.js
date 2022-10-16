import styled from "styled-components";
import nightTimeDesk from "./assets/images/desktop/bg-image-nighttime.jpg";
import nightTimeTab from "./assets/images/tablet/bg-image-nighttime.jpg";
import nightTime from "./assets/images/mobile/bg-image-nighttime.jpg";
import dayTimeDesk from "./assets/images/desktop/bg-image-daytime.jpg";
import dayTimeTab from "./assets/images/tablet/bg-image-daytime.jpg";
import dayTime from "./assets/images/mobile/bg-image-daytime.jpg";
import {colors} from "./assets/global/colors/colors";

export const AppStyle = styled.div`

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${props => (props.backGround ? `url(${dayTime})` : `url(${nightTime})`)} no-repeat center;
  width: 100vw;
  height: 100vh;
  color: ${colors.white};
  background-size: cover;

  @media screen and (min-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${props => (props.backGround ? `url(${dayTimeTab})` : `url(${nightTimeTab})`)} no-repeat center;
    background-size: cover;
  }

  @media screen and (min-width: 1024px) {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), ${props => (props.backGround ? `url(${dayTimeDesk})` : `url(${nightTimeDesk})`)} no-repeat center;
    background-size: cover;
  }

`
