import React from 'react'

import * as St from './styles'

const BlockDescriptionAbout: React.FC = () => {
  return (
    <St.Container>
      <St.InformationBlock>
        <St.TextContainer>
          <St.Text>
            Sou estudante de Engenharia de Computação, no Instituto Federal da
            Paraíba em Campina Grande . Tenho experiência na área de programação
            e eletrônica, desenvolvendo projetos envolvendo frontend, backend,
            mobile e microcontroladores. Começei a entrar no mundo da
            programação no início de 2018, e, desde então, venho aprimorando os
            conhecimentos na área de tecnologia. Ademais, na área de software,
            crio e projeto aplicações de web sites, apps desktop e mobile, já na
            area de hardware , tenho expericia em atividades no âmbito de
            sistemas embarcados e automação, programando microcontroladores,
            podendo ser para diversas aplicações. Custumo trabalhar utilizando
            diversas ferramentas para boas práticas e maneiras otimizadas de
            organizar meu trabalho, utilizando sempre o github para
            versionamento de código de projetos ou somente para estudo, além
            disso, ferramentas para organizar o dia a dia, como notion, google
            agendas e etc.
          </St.Text>
        </St.TextContainer>
        <St.VectorContainer>
          <St.Vector src="/vectors/Vector3.svg" unsized={true} />
        </St.VectorContainer>
      </St.InformationBlock>
    </St.Container>
  )
}

export default BlockDescriptionAbout
