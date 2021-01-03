import React from 'react'
import { IconType } from 'react-icons/lib'
import styled from 'styled-components'

import { TechList } from '../../utils/colorsCardTech'
import * as St from './styles'
interface cardProps {
  tech: string
  placeUtilized?: string
}
const TechnologyCard: React.FC<cardProps> = ({ tech, placeUtilized }) => {
  function handleIcon(Icon: IconType, Color: string) {
    const CurrentIcon = styled(Icon)`
      width: 1.5vw;
      height: 3.5vh;
      margin-top: -5px;
      color: ${() => Color};

      @media (max-width: 767px) {
        width: 100%;
        height: 8vh;
      }
    `
    return <CurrentIcon />
  }
  return (
    <St.Container Color={TechList[tech].color}>
      <St.HeaderContainer>
        <St.IconContainer>
          {handleIcon(TechList[tech].icon, TechList[tech].color)}
        </St.IconContainer>
        <St.TitleContainer>
          <St.Title>{TechList[tech].name}</St.Title>
        </St.TitleContainer>
      </St.HeaderContainer>
      <St.DescriptionContainer>
        <St.Description>{placeUtilized}</St.Description>
      </St.DescriptionContainer>
    </St.Container>
  )
}

export default TechnologyCard
