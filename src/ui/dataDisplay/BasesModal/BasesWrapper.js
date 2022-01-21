import styled from "@emotion/styled"

export const BasesWrapper = styled.div`
  * {
    color: #002338;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Satoshi-Bold";
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;

    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  p,
  a {
    font-family: "Satoshi-Regular";
    font-size: 16px;
    line-height: 24px;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  a {
    text-decoration: none;
  }

  @media only screen and (min-width: 769px) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Satoshi-Bold";
      font-size: 20px;
      line-height: 32px;
      text-transform: uppercase;
      &:not(:first-child) {
        margin-top: 40px;
      }
    }

    p {
      font-family: "Satoshi-Regular";
      font-size: 20px;
      line-height: 32px;
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }
  @media print {
    .footer,
    #non-printable {
      display: none !important;
    }
    #printable {
      display: block;
    }
  }
`
