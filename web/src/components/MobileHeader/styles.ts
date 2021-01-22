import { IoMenu } from 'react-icons/io5'
import styled, { css } from 'styled-components'
interface propsOption {
  actived?: boolean
}

interface propsOptionMenuMobile {
  hasMenuClicked?: boolean
}
const buttonMenuEffect = css`
  #icon {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 20px;
  }
`

const OptionsContainerStyle = css`
  #menu {
    height: 100%;
    justify-content: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
    margin: 0 40px;
  }
`

const fontProza = css`
  @font-face {
    font-family: praza;
    src: url('/fonts/proza_libre/ProzaLibre-Medium.ttf');
  }
  font-family: praza;
`

export const Container = styled.div`
  /* border: 1px solid red; */
`

export const HeaderInitial = styled.section`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80px;
  }
`

export const OptionMenuButton = styled.button<propsOption>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }

  ${({ actived }) => {
    if (actived) {
      return buttonMenuEffect
    }
  }}
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 5px;
`

export const Option = styled.button<propsOption>`
  height: 27px;
  display: flex;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};

  :focus {
    outline: none;
  }
`

export const Menu = styled.div<propsOptionMenuMobile>`
  height: 150px;
  display: ${({ hasMenuClicked }) => (hasMenuClicked ? 'flex' : 'none')};
  flex-direction: column;

  ${OptionsContainerStyle}
`
export const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  opacity: 100%;
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

export const iconOptionButton = styled(IoMenu)`
  color: #fc7c1c;
`
