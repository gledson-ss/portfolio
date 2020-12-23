import { IoMenu } from 'react-icons/io5'
import styled, { css } from 'styled-components'

interface propsOption {
  actived?: boolean
}

interface propsOptionMenuMobile {
  hasMenuClicked?: boolean
}

const fontProza = css`
  @font-face {
    font-family: praza;
    src: url('/fonts/proza-libre/ProzaLibre-Medium.ttf');
  }
  font-family: praza;
`

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    height: 80px;
    padding: 0 100px;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`

export const mobileHeader = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80px;
  }
`

const buttonMenuEffect = css`
  #icon {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 20px;
  }
`

export const OptionMenuButton = styled.button<propsOption>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2px;

  border: none;

  :focus {
    outline: none;
  }
  #project-header {
  }

  ${({ actived }) => {
    if (actived) {
      return buttonMenuEffect
    }
  }}
`
export const iconOptionButton = styled(IoMenu)`
  color: #fc7c1c;
`
export const mobileMenuContainer = styled.div<propsOptionMenuMobile>`
  @media (min-width: 768px) {
    display: none;
  }

  ${({ hasMenuClicked }) => {
    if (hasMenuClicked) {
      return 'display: grid;'
    } else {
      return 'display: none;'
    }
  }}

  height: 150px;
  /* border: 1px solid green; */
  grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const TitleContainer = styled.button`
  display: flex;
  height: 100%;
  align-items: center;
  @media (min-width: 768) {
    width: 50%;
    justify-content: flex-start;
  }

  background-color: ${({ theme }) => theme.colors.white};
  border: none;
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

const styleMenuHeaderOption = css`
  justify-content: flex-start;
  margin: 0 35px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
`
const styleMobileHeader = css`
  justify-content: flex-end;
`

export const Option = styled.button<propsOption>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  @media (max-width: 767px) {
    height: 27px;
    background-color: ${({ theme }) => theme.colors.white};

    ${({ id }) => {
      if (id === 'mobile-header') {
        return styleMobileHeader
      } else {
        return styleMenuHeaderOption
      }
    }}
  }

  :focus {
    outline: none;
  }
  :hover {
    @media (min-width: 768px) {
      ${underlineOption}
    }
  }

  ${({ actived }) => {
    if (actived) {
      return underlineOption
    }
  }}
`

export const DescriptionOption = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 18px;
  opacity: 100%;
`
