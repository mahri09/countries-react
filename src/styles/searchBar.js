import styled from "styled-components";
import { colors } from "./elements/elements";

const Styles = styled.div`
  .search-bar {
    width: 100%;
    padding: 1rem;
    background-color: ${colors.bg1};
    margin: 0 auto;
    @media (min-width: 950px) {
      max-width: 1170px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2.6rem;
    }
    @media (min-width: 1150px) {
      max-width: 1600px;
    }

    form.search-form {
      border: none;
      padding: 0;

      input {
        width: 400px;
        box-shadow: ${colors.box_shadow2};
        background-color: ${colors.text2};
        border: none;
        border-radius: 4px;
        display: block;
        padding: 9px 4px 9px 40px;
        margin: 1rem 0;
        background: transparent
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
          no-repeat 13px center;

        @media (min-width: 950px) {
          width: 380px;
          height: 35px;
          font-size: 1.1rem;
        }
      }
    }
    select {
      background-color: ${colors.text2};
      border: none;
      box-shadow: ${colors.box_shadow2};
      padding: 0.5em 1em;
      margin: 0;
      width: 200px;
      font-size: 0.9rem;
      cursor: inherit;
      line-height: 1;
      height: 32px;
      color: ${colors.text1};

      select > option {
        font-size: 0.9rem;
      }
      @media (min-width: 950px) {
        width: 270px;
        height: 35px;
        font-size: 1rem;
      }
    }
  }
`;

export default Styles;
