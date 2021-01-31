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
      <St.BottomVectorInitialContainer>
        <St.BottomVector src="/vectors/Vector4.png" unsized={true} />
      </St.BottomVectorInitialContainer>
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

        <HeaderContainer
          Title="Gostos pessoais"
          Description="Vamos deixar de lado um pouco a parte técnica"
        />

        <St.GuitarContainer>
          <St.BlockGuitar>
            <St.GuitarVectorContainer>
              <St.GuitarVector
                src={'/vectors/guitarVector.png'}
                unsized={true}
              />
            </St.GuitarVectorContainer>
            <St.MusicTextContainer>
              <St.TitleDescriptionContainer>
                <St.TitleBlock>Música</St.TitleBlock>
              </St.TitleDescriptionContainer>
              <St.DescriptionBlockContainer>
                <St.DescriptionBlock>
                  Toco violão há muitos anos, faço aulas com professor
                  particular e estudo música por prazer. Durante muitos anos
                  venho estudando e praticando técnicas para executar uma música
                  de boa qualidade, aprendendo música clássica, erudita,
                  contemporanea e etc.
                </St.DescriptionBlock>
              </St.DescriptionBlockContainer>
            </St.MusicTextContainer>
          </St.BlockGuitar>
          <St.MusicVideoSectionContainer>
            <CarouselVideo />
          </St.MusicVideoSectionContainer>
        </St.GuitarContainer>
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
                Gosto de escutar diversos tipos de música, rock, clássico,
                sertanejo, forró, eletrônico, rap, pop, mpb e etc. Procuro ouvir
                as mais variadas bandas possíveis.
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
