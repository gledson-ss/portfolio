import React, { useState } from 'react'

import GamesJson from '../../utils/games.json'
import CarouselVideo from '../CarouselVideo'
import * as St from './styles'
const GamerSection: React.FC = () => {
  const [gamesArray] = useState(Object.entries(GamesJson))
  const [index, setIndex] = useState<number>(0)

  return (
    <St.Container>
      <St.DescriptionBlock>
        <St.TitleContainer>
          <St.TitleBlock>Games</St.TitleBlock>
        </St.TitleContainer>
        <St.DescriptionContainer>
          <St.Description>
            Gosto de jogos elétronicos para descontrair, sendo os de fps(first
            person shooter), aventura, puzzle os que mais curto jogar. Segue uma
            lista dos meus jogos favoritos.
          </St.Description>
        </St.DescriptionContainer>
      </St.DescriptionBlock>
      <St.ImageContainer>
        <St.ControlImage unsized={true} src="/vectors/Vector7.png" />
      </St.ImageContainer>
      <St.CorouselContainer>
        <CarouselVideo
          key={gamesArray[index][1].name}
          name={gamesArray[index][1].name}
          media={gamesArray[index][1].image}
          setIndexArray={setIndex}
          indexArray={index}
          sizeArray={gamesArray.length - 1}
          isMusic={false}
        />
      </St.CorouselContainer>
    </St.Container>
  )
}

export default GamerSection
