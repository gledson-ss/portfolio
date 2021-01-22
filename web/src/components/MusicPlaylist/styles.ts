import styled from 'styled-components'

export const Container = styled.div`
  /* height: 58vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const NameMusicContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 6vw;
`

export const BlockName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30vh;
`
export const MusicListContainer = styled.div`
  display: flex;
  padding-left: 6vw;
`

export const MusicList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;

  @media (max-width: 767px) {
    overflow-y: scroll;
    height: 100px;
  }
`

export const Music = styled.iframe`
  height: 80px;
`

export const Audio = styled.audio`
  :focus {
    outline: none;
  }
`
export const Description = styled.p`
  font-size: 32px;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza_libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1440px) {
    font-size: 32px;
  }
  @media (max-width: 1279px) {
    font-size: 26px;
  }
  @media (max-width: 719px) {
    font-size: 5.4vw;
  }
`
