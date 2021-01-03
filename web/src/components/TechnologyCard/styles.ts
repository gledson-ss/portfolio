import styled from 'styled-components'

interface propsContainer {
  Color: string
}

export const Container = styled.div<propsContainer>`
  width: 11vw;
  height: 9vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.8vw;

  border-radius: 10px;
  border: 1px solid ${({ Color }) => Color};
  @media (max-width: 1440px) {
    width: 13vw;
    height: 10.5vh;
  }

  @media (max-width: 767px) {
    width: 30vw;
    height: 20vh;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    height: 10vh;
  }
`
export const TitleContainer = styled.div`
  width: 70%;
  @media (max-width: 767px) {
    width: 60%;
  }
`

export const Title = styled.p`
  font-size: 1vw;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 767px) {
    font-size: 3vw;
  }
`
export const DescriptionContainer = styled.div`
  width: 100%;
  height: 4.5vh;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    height: 10vh;
  }
`

export const Description = styled.p`
  font-size: 0.8vw;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.gray};
  @media (max-width: 767px) {
    font-size: 2vw;
  }
`
export const IconContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 8px;

  @media (max-width: 767px) {
    width: 40%;
  }
`
