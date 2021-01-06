import React from 'react'

import * as St from './styles'
const CarouselVideo: React.FC = () => {
  return (
    <St.Container>
      <St.CarouselContainer>
        <St.CarouselVideoContainer>
          <St.ArrowContainer>
            <St.ArrowButton>
              <St.ArrowLeftIcon />
            </St.ArrowButton>
          </St.ArrowContainer>
          <St.VideoContainer>
            <St.TitleContainer>
              <St.Title>eu odeios os minios</St.Title>
            </St.TitleContainer>
            <St.Video
              src="https://drive.google.com/file/d/1qwhJJ-IS-0ezRDRX2rQ_MlRn1tKMWhI7/preview"
              allowFullScreen={true}
            />
          </St.VideoContainer>
          <St.ArrowContainer>
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
