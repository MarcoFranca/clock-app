import styled from "styled-components";

export const MainStiled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  box-sizing: border-box;
  margin-left: 15px;
  

  .clock{
    display: flex;
    flex-direction: column;
    .clock__greeting {
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

        span {
          display: none;
        }
      }
    }
      
    .clock__time{
      h2{
        margin: 16px 0;
        font-weight: 700;
        font-size: 100px;
        line-height: 100px;
        letter-spacing: -2.5px;
      }
      h3{
        margin-left: 5px;
        font-weight: 700;
        font-size: 15px;
        line-height: 28px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }
    }
  }
  .button{
    align-self: flex-start;
    color: #303030;
    button{
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
      p{
        margin-left: 10px;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 3.75px;
        text-transform: uppercase;
      }
        svg {
          width: 32px;
          height: 32px;
        }
        
      
    }
  }
}

@media screen and (min-width: 760px) {
  .clock{
    .clock__greeting {
      h1 {
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 3.6px;

        span {
          display: initial;
        }
      }
    }
    .clock__time{
      h2{
        font-weight: 700;
        font-size: 175px;
        line-height: 175px;
        letter-spacing: -4.375px;
      }
      h3{
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 3.6px;
      }
    }
  }
  .button{
    button{
      width: 146px;
      height: 56px;
      p{
        margin-left: 15px;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 5px;
      }
      svg{
        width: 40px;
        height: 40px;
      }}}
}
  
  @media screen and (min-width: 1024px) {
    
  flex-direction: row;
  justify-content: space-between;
  margin-left: 167px;
  margin-bottom: 98px;
  margin-right: 165px;

  .clock{
    .clock__greeting{
      h1{
        font-size: 22px;
        line-height: 28px;
        letter-spacing: 4px;
      }
    }
    .clock__time{
      h2{
      font-weight: 700;
      font-size: 200px;
      line-height: 200px;
      letter-spacing: -5px;
      }
      h3{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 4.8px;
      }
    }
  }
  .button{
    align-self: flex-end;
    button{ 
      width: 146px;
      height: 56px;

      p{
        margin-left: 15px;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 5px;
      }
      svg{
        width: 40px;
        height: 40px;
        cursor: pointer;
        :hover circle{
          fill: gray;
          transition: 400ms;
        }
        }
      }
    }
  }
{`
