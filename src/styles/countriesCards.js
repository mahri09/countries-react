import styled from "styled-components";
import { colors } from "./elements/elements";

export const Styles = styled.div`
  .cards-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 100%;
    background-color: ${colors.bg1};
    border-radius: 6px;

    @media (min-width: 950px) {
      max-width: 1170px;
    }
    @media (min-width: 1150px) {
      max-width: 1600px;
    }

    .country-card {
      background-color: ${colors.bg2};
      padding-bottom: 1.5rem;
      border-radius: 4%;
      width: 400px;
      curser: pointer;
      margin: 2rem 1rem 0 1rem;
      color: ${colors.text1};
      box-shadow: ${colors.box_shadow};
      .card-img {
        width: 100%;
        border-radius: 4% 4% 0 0;
        height: 235px;
      }

      .card-body {
        margin-top: 1rem 1.5rem;
        padding: 1rem;
      }

      .card-body p {
        font-size: 1.2rem;
        margin-top: 0.5rem;
      }
      .card-body span {
        font-weight: lighter;
        margin-left: 0.5rem;
      }
      @media (min-width: 950px) {
        margin: 2rem 0.5rem;
        width: 340px;
      }
      @media (min-width: 1150px) {
        margin: 2rem 0.8rem;
        width: 360px;
      }

      &:hover {
        background-color: ${colors.bg3};
        color: ${colors.text2};
      }
    }
  }
`;
