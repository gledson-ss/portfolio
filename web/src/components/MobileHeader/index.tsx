import { useRouter } from 'next/router'
import React, { useState } from 'react'

import * as St from './styles'

const MobileHeader: React.FC = () => {
  const [buttonMenuOptionsActived, setButtonMenuOptionsActived] = useState<
    boolean
  >(false)
  const router = useRouter()
  function handleRoute(path: string) {
    router.push(path)
    setButtonMenuOptionsActived(false)
  }

  return (
    <St.Container>
      <St.HeaderInitial>
        <St.OptionMenuButton
          actived={buttonMenuOptionsActived}
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
        >
          <St.iconOptionButton size={32} id="icon" />
        </St.OptionMenuButton>

        <St.TitleContainer onClick={() => handleRoute('/')}>
          <St.Title>gledson.dev</St.Title>
        </St.TitleContainer>

        <St.OptionsContainer>
          <St.Option onClick={() => handleRoute('projects')}>
            <St.Description>Projetos</St.Description>
          </St.Option>
        </St.OptionsContainer>
      </St.HeaderInitial>

      <St.Menu hasMenuClicked={buttonMenuOptionsActived}>
        <St.OptionsContainer id="menu">
          <St.Option onClick={() => handleRoute('/')}>
            <St.Description>Home</St.Description>
          </St.Option>
        </St.OptionsContainer>
        <St.OptionsContainer id="menu">
          <St.Option onClick={() => handleRoute('/projects')}>
            <St.Description>Projetos</St.Description>
          </St.Option>
        </St.OptionsContainer>

        <St.OptionsContainer id="menu" onClick={() => handleRoute('/about')}>
          <St.Option>
            <St.Description>Sobre</St.Description>
          </St.Option>
        </St.OptionsContainer>

        <St.OptionsContainer id="menu" onClick={() => handleRoute('/contact')}>
          <St.Option>
            <St.Description>Contato</St.Description>
          </St.Option>
        </St.OptionsContainer>
      </St.Menu>
    </St.Container>
  )
}

export default MobileHeader
