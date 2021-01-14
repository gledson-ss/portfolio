import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    overflow: scroll;
  }
`

export const TechnologiesBlock = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
