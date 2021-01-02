import React from 'react'
import { IconType } from 'react-icons/lib'

import { TechList } from '../../utils/colorsCardTech'
import * as St from './styles'
interface cardProps {
  tech: string
  placeUtilized?: string
}
const TechnologyCard: React.FC<cardProps> = ({ tech, placeUtilized }) => {
  function handleIcon(Icon: IconType, color: string) {
    return (
      <Icon
        style={{
          color: color,
          width: '2.5vw',
          height: '2.5vh',
          marginTop: '-5px'
        }}
      />
    )
  }
  return (
    <St.Container Color={TechList[tech].color}>
      <St.TitleContainer>
        <St.IconContainer>
          {handleIcon(TechList[tech].icon, TechList[tech].color)}
        </St.IconContainer>

        <St.Title>{TechList[tech].name}</St.Title>
      </St.TitleContainer>
      <St.DescriptionContainer>
        <St.Description>{placeUtilized}</St.Description>
      </St.DescriptionContainer>
    </St.Container>
  )
}

export default TechnologyCard
