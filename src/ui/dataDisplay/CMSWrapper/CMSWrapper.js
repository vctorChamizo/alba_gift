import styled from "@emotion/styled"

export const CMSWrapper = styled.div`
  * {
    color: ${({ color = "#002338" }) => color};
  }

  h1 {
    font-family: "Satoshi-Medium";
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -2px;
  }

  h2 {
    font-family: "Satoshi-Regular";
    font-size: 16px;
    line-height: 24px;
  }

  h3 {
    font-family: "Satoshi-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.03em;
  }

  h4 {
    font-family: "Satoshi-Bold";
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.03em;
  }

  h5,
  h6 {
    font-family: "Satoshi-Bold";
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
  }

  p,
  a,
  span {
    font-family: "Satoshi-Regular";
    font-size: 16px;
    line-height: 24px;
    &:not(:first-child) {
      margin-top: 16px;
    }

    strong,
    b {
      font-family: "Satoshi-Bold";
    }
  }

  strong,
  b {
    font-family: "Satoshi-Bold";
    font-size: 16px;
    line-height: 24px;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  a {
    text-decoration: none;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    &:not(:first-child) {
      margin-top: 24px;
    }
  }

  @media only screen and (min-width: 769px) {
    h1 {
      font-size: 64px;
      line-height: 80px;
    }

    h2 {
      font-size: 24px;
      line-height: 32px;
    }

    p,
    a,
    span {
      letter-spacing: -0.01em;
      font-family: "Satoshi-Regular";
      font-size: 20px;
      line-height: 32px;

      strong,
      b {
        font-family: "Satoshi-Bold";
        letter-spacing: -0.01em;
      }
    }

    strong,
    b {
      font-family: "Satoshi-Bold";
      font-size: 20px;
      line-height: 32px;
      letter-spacing: -0.01em;
    }
  }
`
