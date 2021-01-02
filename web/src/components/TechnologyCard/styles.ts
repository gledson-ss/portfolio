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
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-size: 1vw;
  @font-face {
    font-family: proza;
    src: url('/fonts/proza-libre/ProzaLibre-Regular.ttf');
  }
  font-family: proza;
  color: ${({ theme }) => theme.colors.black};
`
export const DescriptionContainer = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  align-items: center;
`

export const Description = styled.p`
  font-size: 0.8vw;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.gray};
`
export const IconContainer = styled.div`
  width: 1.5vw;
  height: 4.5vh;
  display: flex;
  align-items: center;
  margin-right: 8px;
`
