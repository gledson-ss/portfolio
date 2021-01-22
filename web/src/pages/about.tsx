import React from 'react'

import BlockDescriptionAbout from '../components/BlockDescriptionAbout'
import CarouselVideo from '../components/CarouselVideo'
import Footer from '../components/Footer'
import GamerSection from '../components/GamerSection'
import HeaderContainer from '../components/HeaderDescription'
import MusicPlaylist from '../components/MusicPlaylist'
import TechnologiSection from '../components/TechnologiSection'
import * as St from '../styles/pages/about'

const About: React.FC = () => {
  return (
    <St.Container>
      <BlockDescriptionAbout />
      <St.SkillsMusicContainer>
        <St.SkillsMusicVectorContainer>
          <St.VectorRightSkillsMusicContainer
            src={'/vectors/Vector5.png'}
            unsized={true}
          />
        </St.SkillsMusicVectorContainer>
        <St.SkillsContainer>
          <HeaderContainer
            Title="Skills"
            Description="Tecnologias que estudo e utilizo em projetos"
          />

          <TechnologiSection />
        </St.SkillsContainer>
        <St.MusicContainer>
          <HeaderContainer
            Title="Gostos pessoais"
            Description="Vamo deixar de lado um pouco a parte técnica"
          />

          <St.GuitarContainer>
            <St.BlockGuitar>
              <St.GuitarVectorContainer>
                <St.GuitarVector
                  src={'/vectors/guitarVector.png'}
                  unsized={true}
                />
              </St.GuitarVectorContainer>
              <St.GuitarDescriptionContainer>
                <St.TitleDescriptionContainer>
                  <St.TitleBlock>Musica</St.TitleBlock>
                </St.TitleDescriptionContainer>
                <St.DescriptionBlockContainer>
                  <St.DescriptionBlock>
                    Et cursus sed senectus tellus placerat risus faucibus
                    faucibus. Quam ut iaculis integer a, diam pellentesque
                    mauris aliquet. At id non nascetur tempor rhoncus, felis,
                    tristique ut. Risus aliquam libero urna, lacus, ridiculus id
                    auctor. felis, tristique ut. Risus aliquam libero urna,
                    lacus, ridiculus id auctor.
                  </St.DescriptionBlock>
                </St.DescriptionBlockContainer>
              </St.GuitarDescriptionContainer>
            </St.BlockGuitar>
            <St.MusicVideoSectionContainer>
              <CarouselVideo hasTitle={true} />
            </St.MusicVideoSectionContainer>
          </St.GuitarContainer>
        </St.MusicContainer>
      </St.SkillsMusicContainer>
      <St.SectionMusicContainer>
        <St.LateralImageLeft src="/vectors/Vector6.png" unsized={true} />
        <St.TopMusicContainer>
          <St.TopMusicDescriptionContainer>
            <St.TitleDescriptionContainer>
              <St.TitleBlock>Top 3 músicas</St.TitleBlock>
            </St.TitleDescriptionContainer>
            <St.DescriptionBlockContainer>
              <St.DescriptionBlock>
                Risus aliquam libero urna, lacus, ridiculus id auctor. felis,
                tristique ut. Risus aliquam libero urna, lacus, ridiculus id
                auctor.
              </St.DescriptionBlock>
            </St.DescriptionBlockContainer>
          </St.TopMusicDescriptionContainer>
          <MusicPlaylist />
        </St.TopMusicContainer>
      </St.SectionMusicContainer>
      <GamerSection />
      <Footer />
    </St.Container>
  )
}

export default About
