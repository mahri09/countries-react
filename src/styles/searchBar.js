import styled from "styled-components";

const Styles = styled.div`
  .search-bar {
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.bg1};
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
        box-shadow: ${({ theme }) => theme.box_shadow2};
        background-color: ${({ theme }) => theme.bg2};
        border: none;
        border-radius: 4px;
        display: block;
        padding: 9px 4px 9px 40px;
        margin: 1rem 0;

        @media (min-width: 950px) {
          width: 380px;
          height: 35px;
          font-size: 1.1rem;
        }
      }
    }
    select {
      background-color: ${({ theme }) => theme.bg2};
      border: none;
      box-shadow: ${({ theme }) => theme.box_shadow2};
      padding: 0.5em 1em;
      margin: 0;
      width: 200px;
      font-size: 0.9rem;
      cursor: inherit;
      line-height: 1;
      height: 32px;
      color: ${({ theme }) => theme.text1};

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
