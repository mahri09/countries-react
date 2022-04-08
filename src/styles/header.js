import styled from "styled-components";
import { colors } from "./elements/elements";

export const Styles = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.bg2};
  box-shadow: 0 4px 2px -1px ${colors.border3};
  height: 80px;
 
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:0 2rem;
          padding:1rem;
    color: text1;
    @media (min-width: 950px) {
    padding: 1rem 2rem;
        }
    h1{
      font-size:1.5rem;
       @media (min-width: 950px) {
          font-size: 2rem;
        }
    }
    button {
      border: none;
      background-color: transparent;
      align-items: center;
      font-weight:600;
      img {
        width: 1.2rem;
        height: auto;
        border: none;
        margin-bottom: -7px;
        margin-right: 4px;
         @media (min-width: 950px) {
          width: 1.6rem;
        }
        }
        span{
          font-size:0.8rem;
        }
      }
    }
  }
`;
