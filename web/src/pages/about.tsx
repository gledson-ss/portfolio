import React from 'react'

import CarouselVideo from '../components/CarouselVideo'
import Footer from '../components/Footer'
import GamerSection from '../components/GamerSection'
import MusicPlaylist from '../components/MusicPlaylist'
import TechnologyCard from '../components/TechnologyCard'
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
        <St.BottomVectorInitialContainer>
          <St.BottomVector src="/vectors/Vector4.png" unsized={true} />
        </St.BottomVectorInitialContainer>
      </St.InitialContainer>
      <St.SkillsMusicContainer>
        <St.SkillsMusicVectorContainer>
          <St.VectorRightSkillsMusicContainer
            src={'/vectors/Vector5.png'}
            unsized={true}
          />
        </St.SkillsMusicVectorContainer>
        <St.SkillsContainer>
          <St.Header>
            <St.TitleHeaderContainer>
              <St.Title>Skills</St.Title>
            </St.TitleHeaderContainer>
            <St.TitleDescriptionContainer>
              <St.Description>
                Tecnologias que estudo e utilizo em projetos
              </St.Description>
            </St.TitleDescriptionContainer>
          </St.Header>
          <St.TechnologiesContainer>
            <St.TechnologiesBlock>
              <TechnologyCard
                tech="React"
                placeUtilized="Projetos Web, Desktop e Mobile"
              />
              <TechnologyCard
                tech="ReactNative"
                placeUtilized="Projetos Mobile"
              />
              <TechnologyCard
                tech="Typescript"
                placeUtilized="Projetos com Javascript"
              />
              <TechnologyCard
                tech="Javascript"
                placeUtilized="Projetos Web, Desktop, servidor, Mobile e etc"
              />
              <TechnologyCard tech="NextJs" placeUtilized="projetos Web" />
              <TechnologyCard
                tech="NodeJs"
                placeUtilized="Projetos com Javascript"
              />
              <TechnologyCard
                tech="ElectronJs"
                placeUtilized="Projetos para App Desktop"
              />
              <TechnologyCard
                tech="VsCode"
                placeUtilized="Meu Editor de Código Principal"
              />
              <TechnologyCard tech="Java" placeUtilized="Projetos em Deskop" />
              <TechnologyCard
                tech="Python"
                placeUtilized="Análise de Dados e Estatística"
              />
              <TechnologyCard
                tech="Cplusplus"
                placeUtilized="Projetos em Automação, Sistema Embarcados"
              />
              <TechnologyCard
                tech="C"
                placeUtilized="Projetos em Automação, Sistema Embarcados"
              />
              <TechnologyCard
                tech="Mysql"
                placeUtilized="Voltado para Banco de Dados"
              />
              <TechnologyCard
                tech="Sqlite"
                placeUtilized="Voltado para Banco de Dados"
              />
            </St.TechnologiesBlock>
          </St.TechnologiesContainer>
        </St.SkillsContainer>
        <St.MusicContainer>
          <St.Header>
            <St.TitleHeaderContainer>
              <St.Title>Gostos pessoais</St.Title>
            </St.TitleHeaderContainer>
            <St.TitleDescriptionContainer>
              <St.Description>
                Vamo deixar de lado um pouco a parte técnica
              </St.Description>
            </St.TitleDescriptionContainer>
          </St.Header>
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
