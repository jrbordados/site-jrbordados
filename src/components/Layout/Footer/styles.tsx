import styled from 'styled-components'

export const StyledFooter = styled.footer`
  position: relative;
  min-height: 412px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 80px 0px;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4));
  }

  p {
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
  }
`
