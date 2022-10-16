import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  align-items: flex-start;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 32px 26px;

  .quotes {
    max-width: 80%;
    h1 {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
    }

    p {
      margin-top: 8px;
      font-weight: 700;
      font-size: 12px;
      line-height: 22px;
    }
  }

  .image {
    width: 15px;
    margin-left: 15px;
    margin-top: 5px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));

  }

  img {
    width: 100%;
    mix-blend-mode: normal;
    opacity: .8;
  }

  @media screen and (min-width: 700px) {
    padding: 80px 64px;

    .quotes {
      
    }
    .image {
      width: 17px;
      margin-left: 5px;
      margin-top: 5px;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));

    }
  }
  
  @media screen and (min-width: 1024px) {
    display: flex;
    position: relative;
    padding-top: 66.67px;

  .quotes {
    margin-left: 165px;
    max-width: 45%;

    h1 {
      margin: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }

    p {
      margin-top: 13px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
  }

  .image {
    width: 20px;
    margin-left: 5px;
    margin-top: 5px;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 1));
    
  }
  img {
    width: 100%;
    mix-blend-mode: normal;
    opacity: .8;
    cursor: pointer;
    :hover {
      opacity: 1;
      color: white;
      mix-blend-mode: unset;
      
    }
  }
}
`