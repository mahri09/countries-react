import styled from "styled-components";
import { colors } from "./elements/elements";

export const Styles = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.bg2};
  height: 80px;
 
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin:0 2rem;
    padding: 1rem 2rem;
    color: text1;
    button {
      border: none;
      background-color: transparent;
      align-items: center;
      font-weight:600;
      img {
        width: 1.7rem;
        height: auto;
        border: none;
          margin-bottom: -7px;
          margin-right: 4px;
        }
      }
    }
  }
`;
