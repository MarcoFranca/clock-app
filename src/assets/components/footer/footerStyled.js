import styled from "styled-components";

export const FooterStiled = styled.footer`
  position: relative;
  bottom: 0;
  box-sizing: border-box;
  padding: 26px;
  background: ${props => (!props.background? "rgba(0, 0, 0, 0.75)" : "rgba(255, 255, 255, 0.75)")};
  backdrop-filter: blur(20.3871px);
`

export const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (!props.textColor? "rgba(255, 255, 255)" : "#303030")};
  margin: 16px 0;
  h1{
    font-weight: 400;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 2px;
  }
  p{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`