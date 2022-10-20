import styled from "styled-components";

export const MainStiled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => (!props.position? "flex-end" : "center")};
  min-height: 50%;
  box-sizing: border-box;
  margin-left: 15px;
  

  @media screen and (min-width: 760px) {
    margin-left: 64px;
  }
  
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;
    margin-left: 50px;
    margin-right: 165px;
    margin-bottom: 40px ;
  }
`

export const Clock = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px){
    width: 50%;
  }
`

export const Button = styled.div`
  display: flex;
  align-self: flex-start;
  p{
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (min-width: 1024px) {
    align-self: flex-end;
    align-items: flex-end;
    width: 50%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
    margin-bottom: 40px;
    width: 115px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 28px;
    border: none;
    @media screen and (min-width: 760px) {
      margin-top: 80px;
      width: 146px;
      height: 56px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
      margin-left: 167px;
      margin-bottom: 0;
      margin-right: 165px;
    }

    p {
      margin-left: 10px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 3.75px;
      text-transform: uppercase;
      @media screen and (min-width: 760px) {
        margin-left: 15px;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 5px;
      }
    }

    svg {
      width: 32px;
      height: 32px;
      @media screen and (min-width: 760px) {
        width: 40px;
        height: 40px;
      }
      @media screen and (min-width: 1024px) {
        width: 40px;
        height: 40px;
        cursor: pointer;
        :hover circle {
          fill: gray;
          transition: 400ms;
        }
      }
    }
`



export const ClockGreeting = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 7px;
  gap: 16px;

  img {
    width: 24px;
    height: 24px;
  }

  h1 {
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 3px;
    text-transform: uppercase;
    @media screen and (min-width: 760px) {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: 3.6px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 22px;
      letter-spacing: 4px;
    }
    span {
      display: none;
      @media screen and (min-width: 760px) {
        display: initial;
      }
    }
  }
`

export const ClockTime = styled.div`

  h2{
    margin: 16px 0;
    font-weight: 700;
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -2.5px;
    @media screen and (min-width: 760px) {
      font-size: 175px;
      line-height: 175px;
      letter-spacing: -4.375px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 150px;
      line-height: 150px;
      letter-spacing: -5px;
    }
  }
  h3{
    margin-left: 5px;
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    @media screen and (min-width: 760px) {
      font-size: 18px;
      letter-spacing: 3.6px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 24px;
      letter-spacing: 4.8px;
    }
  }
`
