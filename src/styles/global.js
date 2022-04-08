import styled from "styled-components";
import { fonts } from "./elements/elements";

const Styles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: 1.1rem;
      font-family:${fonts.roboto};
      };

      @media (min-width: 768px) {
        font-size: 1.1rem)};
      }

      @media (min-width: 1024px) {
        font-size: 1rem};
      }
    }
`;

export default Styles;
