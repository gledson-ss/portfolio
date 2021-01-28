import styled from 'styled-components'

interface blockProps {
  isDislocated: boolean
}

export const Container = styled.div``

export const HeaderDescriptionContainer = styled.div`
  padding: 0 100px;
  /* border: 1px solid blue; */
  @media (max-width: 767px) {
    padding: 0;
    margin-top: 10px;
    margin-bottom: 60px;
  }
`

export const ProjectsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 100px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin: 0;
  }
`

export const Block = styled.div<blockProps>`
  display: flex;
  justify-content: ${({ isDislocated }) =>
    isDislocated ? 'flex-start' : 'flex-end'};

  @media (max-width: 1183px) {
    justify-content: center;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 767px) {
    margin: 0;
  }
`

export const Button = styled.button`
  width: 200px;
  height: 60px;
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

  @media (max-width: 1183px) {
    width: 160px;
    height: 50px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  color: ${({ theme }) => theme.colors.black};
  @media (max-width: 1183px) {
    font-size: 12px;
  }
`
