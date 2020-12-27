import { useRouter } from 'next/router'
import React, { useState } from 'react'

import * as St from './styles'

const Header: React.FC = () => {
  const [currentOption, setCurrentOption] = useState<boolean[]>([
    true,
    false,
    false,
    false
  ])

  const [buttonMenuOptionsActived, setButtonMenuOptionsActived] = useState<
    boolean
  >(false)

  const router = useRouter()

  function handleRoute(path: string) {
    router.push(path)
    setButtonMenuOptionsActived(false)
  }

  function handleClickAbout(
    indexOption: number,
    path: string,
    isMobile: boolean
  ) {
    if (isMobile) {
      setButtonMenuOptionsActived(!buttonMenuOptionsActived)
    }
    handleUnderlineOptions(indexOption)
    handleRoute(path)
  }

  function handleUnderlineOptions(clikedOption: number) {
    const auxArray = []

    for (let i = 0; i < 4; i++) {
      auxArray.push(false)
      if (i === clikedOption) {
        auxArray[i] = true
      }
    }
    setCurrentOption(auxArray)
  }

  return (
    <>
      <St.Container>
        <St.TitleContainer onClick={() => handleClickAbout(0, '/', false)}>
          <St.Title>gledson.dev</St.Title>
        </St.TitleContainer>
        <St.OptionsContainer>
          <St.Option
            actived={currentOption[0]}
            onClick={() => handleClickAbout(0, '/', false)}
          >
            <St.DescriptionOption>Home</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[1]}
            onClick={() => handleClickAbout(1, '/projects', false)}
          >
            <St.DescriptionOption>Projetos</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[2]}
            onClick={() => handleClickAbout(2, '/about', false)}
          >
            <St.DescriptionOption>Sobre</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[3]}
            onClick={() => handleClickAbout(3, '/contact', false)}
          >
            <St.DescriptionOption>Contato</St.DescriptionOption>
          </St.Option>
        </St.OptionsContainer>
      </St.Container>

      <St.mobileHeader>
        <St.OptionMenuButton
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
          actived={buttonMenuOptionsActived}
        >
          <St.iconOptionButton size={32} id="icon" />
        </St.OptionMenuButton>

        <St.TitleContainer onClick={() => handleUnderlineOptions(0)}>
          <St.Title>gledson.dev</St.Title>
        </St.TitleContainer>

        <St.OptionsContainer>
          <St.Option
            actived={false}
            onClick={() => handleRoute('projects')}
            id="mobile-header"
          >
            <St.DescriptionOption>Projetos</St.DescriptionOption>
          </St.Option>
        </St.OptionsContainer>
      </St.mobileHeader>

      <St.mobileMenuContainer hasMenuClicked={buttonMenuOptionsActived}>
        <St.Option
          onClick={() => handleClickAbout(0, '/', true)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Home</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClickAbout(1, '/projects', true)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClickAbout(2, '/about', true)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Sobre</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClickAbout(3, '/contact', true)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Contato</St.DescriptionOption>
        </St.Option>
      </St.mobileMenuContainer>
    </>
  )
}

export default Header
