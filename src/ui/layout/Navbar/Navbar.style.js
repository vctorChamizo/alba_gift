import styled from "@emotion/styled"

const SCNavbar = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f2f6f9;
  z-index: 10;

  .main-header__wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 96px;
    height: 96px;
  }

  .main-nav__ul {
    display: flex;
    align-items: center;
    padding: 0;

    li {
      button.active {
        font-family: "Satoshi-Black";
      }
      min-width: 76px;
      display: inline-block;
      a {
        &.active {
          color: #48d8bf;
          font-family: "Satoshi-Bold";
        }
      }
      &:not(:last-child) {
        margin-right: 72px;
      }
      &:hover {
        opacity: 0.8;

        a {
          font-family: "Satoshi-Bold";
          letter-spacing: 0px;
        }

        transition: opacity 0.7s ease;
      }
    }
  }

  .main-nav__item {
    cursor: pointer;
    list-style-type: none;
  }

  .mobile-menu-button {
    display: none;
    cursor: pointer;
  }
  .mobile-menu-button span {
    position: relative;
    display: inline-block;
    width: 16px;
    border-radius: 8px;
    height: 2px;

    background: #002338;
    transition: all 0.4s ease-out;

    &:not(:last-child) {
      margin-bottom: 4px;
    }
  }

  .mobile-menu-button.active {
    position: relative;
    left: 16px;
    padding: 16px;
  }
  .mobile-menu-button.active span:first-child {
    transform: rotate(-45deg);
    top: 4px;
    background-color: #f9f9ff;
  }
  .mobile-menu-button.active span:last-child {
    transform: rotate(45deg);
    bottom: 8px;
    background-color: #f9f9ff;
  }
  .mobile-menu-button.active span:nth-child(2) {
    opacity: 0;
  }

  .brand svg {
    cursor: pointer;
    width: 168px;
    height: 56px;
  }

  height: 96px;

  .copyright {
    display: none;
  }

  @media screen and (max-width: 768px) {
    height: 76px;
    .brand {
      position: relative;
      z-index: 1;
      svg {
        width: 123px;
        height: 38px;
      }
    }
    .main-nav {
      visibility: hidden;
      width: 0;
      transition: all 0.4s ease-out;
      position: fixed;
      top: 0;
      right: -100vw;
      height: 100vh;
    }
    .main-nav__ul {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 160px 32px 32px;
      height: 100%;
      li {
        margin: 0 0 32px 0 !important;

        button {
          color: #f9f9ff;
          font-size: 48px;
          line-height: 56px;
          font-family: "Satoshi-Bold";
          &.active {
            color: #48d8bf;
          }
          &::after {
            display: none;
          }
        }

        a {
          color: #f9f9ff;
          font-size: 48px;
          line-height: 56px;
          font-family: "Satoshi-Bold";
          &.active {
            color: #48d8bf;
          }
        }
      }
    }

    .brand.visible {
      svg {
        path {
          transition: fill 0.8s ease-out;
          fill: #fbfbfb;
        }
      }
    }

    .main-nav.visible {
      width: 100%;
      background: #002338;
      right: 0;
      visibility: visible;
      transition: all 0.8s ease-out;

      .copyright {
        display: block;
        position: absolute;
        width: calc(100% - 64px);
        min-width: calc(100vw - 64px);
        transform: translateX(-50%);
        left: 50%;
        margin: 0 auto;
        bottom: 32px;
        border-top: 1px solid #fbfbfb;

        p {
          font-size: 10px;
          line-height: 24px;
        }
      }
    }
    .mobile-menu-button {
      display: flex;
      flex-direction: column;
      z-index: 9;
    }

    .main-header__wrapper {
      padding: 0 32px;
      height: 76px;
    }
  }
`

export default SCNavbar
