import React from 'react'

import * as St from './styles'

interface CarouselVideoProps {
  isVideo?: boolean
  media?: string
  name?: string
  setIndexArray?: React.Dispatch<React.SetStateAction<number>>
  indexArray?: number
  sizeArray?: number
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({
  isVideo,
  media,
  name,
  setIndexArray,
  indexArray,
  sizeArray
}) => {
  function growUpIndexArray() {
    if (indexArray === sizeArray) {
      setIndexArray(0)
      return
    }
    setIndexArray(indexArray + 1)
  }
  function growDownIndexArray() {
    if (indexArray === 0) {
      setIndexArray(sizeArray)
      return
    }
    setIndexArray(indexArray - 1)
  }
  return (
    <St.Container>
      <St.CarouselContainer>
        <St.CarouselVideoContainer>
          <St.ArrowContainer side="left">
            <St.ArrowButton onClick={() => growDownIndexArray()}>
              <St.ArrowLeftIcon />
            </St.ArrowButton>
          </St.ArrowContainer>
          <St.VideoContainer>
            <St.TitleContainer>
              <St.Title>{name}</St.Title>
            </St.TitleContainer>
            {isVideo ? <St.Video src={media} /> : <St.Image src={media} />}
          </St.VideoContainer>
          <St.ArrowContainer side="right">
            <St.ArrowButton onClick={() => growUpIndexArray()}>
              <St.ArrowRightIcon />
            </St.ArrowButton>
          </St.ArrowContainer>
        </St.CarouselVideoContainer>
      </St.CarouselContainer>
    </St.Container>
  )
}

export default CarouselVideo
