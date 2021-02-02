import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import * as St from './styles'

const DesktopHeader: React.FC = () => {
  const router = useRouter()
  const [pageHasChanged, setPageHasChanged] = useState<boolean[]>([
    false,
    false,
    false,
    false
  ])
  function handleRoute(path: string) {
    router.push(path)
  }

  function handleClick(path: string) {
    handleRoute(path)
  }

  useEffect(() => {
    const path = router.pathname
    if (path === '/') {
      setPageHasChanged([true, false, false, false])
    }
    if (path === '/projects') {
      setPageHasChanged([false, true, false, false])
    }
    if (path === '/about') {
      setPageHasChanged([false, false, true, false])
    }
    if (path === '/contact') {
      setPageHasChanged([false, false, false, true])
    }
  }, [router.pathname])

  return (
    <St.Container>
      <St.TitleContainer onClick={() => handleClick('/')}>
        <St.Title>gledson.dev</St.Title>
      </St.TitleContainer>
      <St.OptionsContainer>
        <St.Option onClick={() => handleClick('/')} actived={pageHasChanged[0]}>
          <St.DescriptionOption>Home</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClick('/projects')}
          actived={pageHasChanged[1]}
        >
          <St.DescriptionOption>Projetos</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClick('/about')}
          actived={pageHasChanged[2]}
        >
          <St.DescriptionOption>Sobre</St.DescriptionOption>
        </St.Option>
        <St.Option
          onClick={() => handleClick('/contact')}
          actived={pageHasChanged[3]}
        >
          <St.DescriptionOption>Contato</St.DescriptionOption>
        </St.Option>
      </St.OptionsContainer>
    </St.Container>
  )
}

export default DesktopHeader
