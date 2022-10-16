import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  padding-top: 66.67px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .quotes{
    margin-left: 165px;
    width: 520px;
    h1{
      margin: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
    p{
      margin-top: 13px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
  }
  .image{
    width: 20px;
    margin-left: 5px;
    margin-top: 5px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));
    cursor: pointer;
    :hover{
      filter: none;
    }
  }

  img{
    width: 100%;
    mix-blend-mode: normal;
    opacity: .7;
    :hover{
      opacity: 1;
    }
  }
`