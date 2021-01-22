import styled, { css } from 'styled-components'

interface propsOption {
  actived?: boolean
}

const fontProza = css`
  @font-face {
    font-family: praza;
    src: url('/fonts/proza_libre/ProzaLibre-Medium.ttf');
  }
  font-family: praza;
`

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 10vh;
    padding: 0 100px;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`

export const TitleContainer = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  border: none;
  @media (min-width: 768px) {
    width: 50%;
    justify-content: flex-start;
  }

  background-color: ${({ theme }) => theme.colors.white};

  :focus,
  :active {
    outline: none;
  }
`
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 26px;
  ${fontProza}
  :hover {
    cursor: pointer;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 480px;
  }
  @media (max-width: 767px) {
    justify-content: flex-end;
    padding-right: 2px;
  }
  /* border: 1px solid black; */
`
const underlineOption = css`
  margin-top: 2px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  cursor: pointer;
`
export const Option = styled.button<propsOption>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
    ${underlineOption}
  }
  :hover {
    cursor: pointer;
  }
  /* ${({ actived }) => {
    if (actived) {
      return underlineOption
    }
  }} */
`

export const DescriptionOption = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  opacity: 100%;
`
