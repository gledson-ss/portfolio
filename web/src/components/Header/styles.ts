import { IoMenu } from 'react-icons/io5'
import styled, { css } from 'styled-components'

interface propsOption {
  actived?: boolean
}

const fontProza = css`
  @font-face {
    font-family: praza;
    src: url('/fonts/proza-libre/ProzaLibre-Medium.ttf');
  }
  font-family: praza;
`
const underlineOption = css`
  margin-top: 2px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.orange};
  cursor: pointer;
`

export const Container = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  height: 80px;
  /* border: 1px solid black; */
  margin: 0 135px;
  justify-content: space-between;
  align-items: center;
`

export const mobileContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
  height: 80px;
  margin: 0 135px;
  justify-content: space-between;
  align-items: center;
`

export const OptionButton = styled.button`
  border: none;
  :focus {
    outline: none;
  }
  background-color: ${({ theme }) => theme.colors.white};
`
export const iconOptionButton = styled(IoMenu)`
  color: #fc7c1c;
`
export const TitleContainer = styled.button`
  display: flex;
  height: 30px;
  @media (min-width: 768) {
    width: 50%;
  }
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  :focus,
  :active {
    outline: none;
  }
`
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 24px;
  ${fontProza}
  :hover {
    cursor: pointer;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 480px;
  /* border: 1px solid black; */
`

export const Option = styled.button<propsOption>`
  display: flex;
  height: 27px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  :focus {
    outline: none;
  }
  :hover {
    ${underlineOption}
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
`
