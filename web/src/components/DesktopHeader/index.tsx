import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import * as St from './styles'

const DesktopHeader: React.FC = () => {
  const router = useRouter()
  const [hasChangePage, setHasChangePage] = useState<boolean>(false)
  const [currentOption, setCurrentOption] = useState<boolean[]>([
    false,
    false,
    false,
    false
  ])

  function handleRoute(path: string) {
    router.push(path)
  }

  function handleClickAbout(path: string) {
    setHasChangePage(!hasChangePage)
    handleRoute(path)
  }

  return (
    <St.Container>
      <St.TitleContainer onClick={() => handleClickAbout('/')}>
        <St.Title>gledson.dev</St.Title>
      </St.TitleContainer>
      <St.OptionsContainer>
        <St.Option
          actived={currentOption[0]}
          onClick={() => handleClickAbout('/')}
        >
          <St.DescriptionOption>Home</St.DescriptionOption>
        </St.Option>
        <St.Option
          actived={currentOption[1]}
          onClick={() => handleClickAbout('/projects')}
        >
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
        <St.Option
          actived={currentOption[2]}
          onClick={() => handleClickAbout('/about')}
        >
          <St.DescriptionOption>Sobre</St.DescriptionOption>
        </St.Option>
        <St.Option
          actived={currentOption[3]}
          onClick={() => handleClickAbout('/contact')}
        >
          <St.DescriptionOption>Contato</St.DescriptionOption>
        </St.Option>
      </St.OptionsContainer>
    </St.Container>
  )
}

export default DesktopHeader
