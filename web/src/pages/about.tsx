import React from 'react'

import * as St from '../styles/pages/about'

const About: React.FC = () => {
  return (
    <St.Container>
      <St.InitialContainer>
        <St.InformationBlock>
          <St.TextContainer>
            <St.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
              turpis fermentum mauris sed tristique. Neque sed lectus erat
              dictum tellus eget. Iaculis elementum nunc ultrices non arcu
              tincidunt eu. Convallis leo tortor vel, purus. Adipiscing sapien
              rhoncus nibh aliquam magna in sed in. Lectus nibh gravida eu
              tincidunt purus diam. Est vulputate turpis vitae at duis ultricies
              magna ac. Placerat ultrices mattis neque eu elementum egestas
              amet. Tempor, consectetur posuere quis praesent nunc blandit.
              Pulvinar molestie leo, etiam et. Facilisi mauris sodales porttitor
              non, amet lorem habitasse lacus. Fusce fames a eu, faucibus in
              nibh eget turpis eu. Eu ultrices scelerisque sapien et, amet. Diam
              integer ullamcorper ullamcorper vel pulvinar. Et cursus sed
              senectus tellus placerat risus faucibus faucibus. Quam ut iaculis
              integer a, diam pellentesque mauris aliquet. At id non nascetur
              tempor rhoncus, felis, tristique ut. Risus aliquam libero urna,
              lacus, ridiculus id auctor.
            </St.Text>
          </St.TextContainer>
          <St.VectorContainer>
            <St.Vector src="/vectors/Vector3.svg" unsized={true} />
          </St.VectorContainer>
        </St.InformationBlock>
        <St.PhotoContainer />
        {/* <St.MoreSeeButtonContainer>
          <St.Button></St.Button>
        </St.MoreSeeButtonContainer> */}
        <St.BottomVectorInitialContainer>
          <St.BottomVector src="/vectors/Vector4.png" unsized={true} />
        </St.BottomVectorInitialContainer>
      </St.InitialContainer>
    </St.Container>
  )
}

export default About
