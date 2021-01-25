import React from 'react'

import CarouselVideo from '../CarouselVideo'
import * as St from './styles'
const GamerSection: React.FC = () => {
  return (
    <St.Container>
      <St.DescriptionBlock>
        <St.TitleContainer>
          <St.TitleBlock>Games</St.TitleBlock>
        </St.TitleContainer>
        <St.DescriptionContainer>
          <St.Description>
            Gosto de jogos elétronicos para descontrair, sendo os de fps(first
            person shooter), aventura e estratégias os que mais curto jogar.
            Segue uma lista de jogos que mais gosto.
          </St.Description>
        </St.DescriptionContainer>
      </St.DescriptionBlock>
      <St.ImageContainer>
        <St.ControlImage unsized={true} src="/vectors/Vector7.png" />
      </St.ImageContainer>
      <St.CorouselContainer>
        <CarouselVideo hasTitle={false} />
      </St.CorouselContainer>
    </St.Container>
  )
}

export default GamerSection
