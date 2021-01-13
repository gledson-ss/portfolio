import { FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'
export const Container = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 4px;

  cursor: pointer;
  :focus {
    outline: none;
  }

  @media (max-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`

export const ArrowImage = styled(FaArrowUp)`
  width: 26px;
  height: 26px;

  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1280px) {
    width: 18px;
    height: 18px;
  }
`
