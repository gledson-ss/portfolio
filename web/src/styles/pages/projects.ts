import styled from 'styled-components'

export const Container = styled.div``

export const HeaderDescriptionContainer = styled.div`
  padding: 0 100px;
`

export const ProjectsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 100px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  width: 11vw;
  height: 6vh;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 28px;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.orange};

    #text {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Text = styled.p`
  font-size: 1vw;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
`
