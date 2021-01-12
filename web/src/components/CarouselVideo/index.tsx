import React from 'react'

import * as St from './styles'

interface CarouselVideoProps {
  hasTitle: boolean
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ hasTitle }) => {
  return (
    <St.Container>
      <St.CarouselContainer>
        <St.CarouselVideoContainer>
          <St.ArrowContainer side="left">
            <St.ArrowButton>
              <St.ArrowLeftIcon />
            </St.ArrowButton>
          </St.ArrowContainer>
          <St.VideoContainer>
            <St.TitleContainer>
              {hasTitle && <St.Title>eu odeios os minios</St.Title>}
            </St.TitleContainer>
            <St.Video
              src="https://drive.google.com/file/d/1qwhJJ-IS-0ezRDRX2rQ_MlRn1tKMWhI7/preview"
              allowFullScreen={true}
            />
          </St.VideoContainer>
          <St.ArrowContainer side="right">
            <St.ArrowButton>
              <St.ArrowRightIcon />
            </St.ArrowButton>
          </St.ArrowContainer>
        </St.CarouselVideoContainer>
      </St.CarouselContainer>
    </St.Container>
  )
}

export default CarouselVideo
