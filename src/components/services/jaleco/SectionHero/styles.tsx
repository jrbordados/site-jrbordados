import styled from 'styled-components'

export const HeroContainer = styled.section`
  min-height: 570px;
  max-width: 100%;
  display: block;

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 60px;
`

export const VideoWrap = styled.div`
  z-index: 1;
`

export const Video = styled.video`
  box-sizing: border-box;
  position: absolute;

  top: 0;
  left: 0;
  object-fit: cover;

  width: 100%;
  height: 100%;
`

export const Overlay = styled.div`
  background: linear-gradient(to top, #000, transparent 100%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`
