import styled from "styled-components";

export const FooterStiled = styled.footer`
  position: relative;
  bottom: 0;
  box-sizing: border-box;
  padding: 26px;
  background: ${props => (!props.background ? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)")};
  backdrop-filter: blur(20.3871px);
  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: row;
    padding: 119px 0 119px 64px;
    gap: 80px;
  }
  @media screen and (min-width: 1024px) {
    padding: 25px 0 25px 64px;
    max-height: 50vh;
    .container1 {
      border-right: solid 1px rgba(48, 48, 48, 0.25);
      padding-right: 5vw;
    }
  }
`

export const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (!props.textColor? "rgba(255, 255, 255)" : "#303030")};
  margin: 16px 0;
  @media screen and (min-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0;
  }
  h1{
    font-weight: 400;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 2.6px;
    @media screen and (min-width: 760px) {
        font-size: 13px;
        line-height: 28px;
      }}
  p{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    @media screen and (min-width: 760px) {
        font-size: 35px;
        line-height: 43px;
      }}  
`