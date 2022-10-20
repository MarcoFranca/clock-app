import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: ${props => (props.hidding? "none":"flex")};
  position: relative;
  align-items: flex-start;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 32px 26px;

  @media screen and (min-width: 700px) {
    padding: 80px 64px;
  }
  @media screen and (min-width: 700px) {
    padding: 80px 40px;
  }
`
export const Quotes = styled.div`
  max-width: 85%;
  @media screen and (min-width: 1024px) {
    max-width: 45%;
  }
  h1 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    @media screen and (min-width: 700px) {
      margin: 0;
      font-size: 18px;
      line-height: 28px;
    }}

  p {
    margin-top: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    @media screen and (min-width: 700px) {
      margin-top: 13px;
      font-size: 18px;
      line-height: 28px;
    }}
  
`

export const Image = styled.div`
  width: 17px;
  margin-left: 5px;
  margin-top: 5px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));
  @media screen and (min-width: 700px) {
    width: 17px;
    margin-left: 15px;
    margin-top: 5px;
  }
  @media screen and (min-width: 1024px) {
    width: 20px;
  }
  img {
    width: 100%;
    mix-blend-mode: normal;
    opacity: .8;
    
    @media screen and (min-width: 1024px) {
        cursor: pointer;
        :hover {
          opacity: 1;
          color: white;
          mix-blend-mode: unset;
        }   
    }}
`