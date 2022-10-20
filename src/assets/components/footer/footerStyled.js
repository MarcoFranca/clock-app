import styled from "styled-components";

export const FooterStiled = styled.footer`
  position: relative;
  bottom: 0;
  box-sizing: border-box;
  padding: 26px;
  background: ${props => (!props.background? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)")};
  backdrop-filter: blur(20.3871px);
  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: row;
    padding: 119px 0 119px 64px;
    gap: 80px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 0 40px 64px;
  }
`

export const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (!props.textColor? "rgba(255, 255, 255)" : "#303030")};
  margin: 16px 0;
  h1{
    font-weight: 400;
    font-size: 13px;
    line-height: 28px;
    letter-spacing: 2.6px;
  }
  p{
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 0;
  }
  @media screen and (min-width: 1024px) {
    h1{
      font-weight: 400;
      font-size: 13px;
      line-height: 28px;
      letter-spacing: 2.6px;
    }
    p{
      font-weight: 700;
      font-size: 35px;
      line-height: 43px;
    }
  }

  
`