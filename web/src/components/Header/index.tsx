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
        <St.TitleContainer onClick={() => handleUnderlineOptions(0)}>
          <St.Title>gledson.dev</St.Title>
        </St.TitleContainer>
        <St.OptionsContainer>
          <St.Option
            actived={currentOption[0]}
            onClick={() => handleUnderlineOptions(0)}
          >
            <St.DescriptionOption>Home</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[1]}
            onClick={() => handleUnderlineOptions(1)}
          >
            <St.DescriptionOption>Projetos</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[2]}
            onClick={() => handleUnderlineOptions(2)}
          >
            <St.DescriptionOption>Sobre</St.DescriptionOption>
          </St.Option>
          <St.Option
            actived={currentOption[3]}
            onClick={() => handleUnderlineOptions(3)}
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

        <St.Option
          actived={false}
          onClick={() => setButtonMenuOptionsActived(false)}
          id="mobile-header"
        >
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
      </St.mobileHeader>

      <St.mobileMenuContainer hasMenuClicked={buttonMenuOptionsActived}>
        <St.Option
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Home</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Sobre</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => setButtonMenuOptionsActived(!buttonMenuOptionsActived)}
          id="menu-options-mobile"
        >
          <St.DescriptionOption>Contato</St.DescriptionOption>
        </St.Option>
      </St.mobileMenuContainer>
    </>
  )
}

export default Header
