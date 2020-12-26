import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Form = styled.form`
  border: 1px solid orange;
  height: 63vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SectionInput = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
`

export const TitleInputContainer = styled.div`
  margin-bottom: 8px;
`

export const TitleInput = styled.label`
  font-size: 18px;
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  @media (max-width: 1440px) {
    font-size: 14px;
  }
`
export const InputMessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 138px;
  border: 1px solid #6f6f6f;
  box-sizing: border-box;
  border-radius: 10px;
`
const borders = css`
  border: 1px solid #6f6f6f;
  box-sizing: border-box;
  border-radius: 10px;
`

export const TextArea = styled.textarea`
  display: flex;
  width: 400px;
  height: 50px;
  padding: 10px;

  ${borders}

  color: ${({ theme }) => theme.colors.orange};
  @font-face {
    font-family: open;
    src: url('/fonts/Open_sans/OpenSans-Regular.ttf');
  }
  font-family: open;
  font-size: 18px;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.orange};
  }
  resize: none;
`
export const ButtonContainer = styled.div``
