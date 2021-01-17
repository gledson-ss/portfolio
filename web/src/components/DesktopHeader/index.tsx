import { useRouter } from 'next/router'
import React, { useState } from 'react'

import * as St from './styles'

const HeaderDesktop: React.FC = () => {
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

  function handleClickAbout(path: string, isMobile: boolean) {
    if (isMobile) {
      setButtonMenuOptionsActived(!buttonMenuOptionsActived)
    }

    handleRoute(path)
  }
  return (
    <St.Container>
      <St.TitleContainer onClick={() => handleClickAbout('/', false)}>
        <St.Title>gledson.dev</St.Title>
      </St.TitleContainer>
      <St.OptionsContainer>
        <St.Option onClick={() => handleClickAbout('/', false)}>
          <St.DescriptionOption>Home</St.DescriptionOption>
        </St.Option>
        <St.Option onClick={() => handleClickAbout('/projects', false)}>
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
        <St.Option onClick={() => handleClickAbout('/about', false)}>
          <St.DescriptionOption>Sobre</St.DescriptionOption>
        </St.Option>
        <St.Option onClick={() => handleClickAbout('/contact', false)}>
          <St.DescriptionOption>Contato</St.DescriptionOption>
        </St.Option>
      </St.OptionsContainer>
    </St.Container>
  )
}

export default HeaderDesktop
