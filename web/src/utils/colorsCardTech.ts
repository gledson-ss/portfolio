import { IconType } from 'react-icons'
import { DiSqllite } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiC,
  SiCplusplus,
  SiElectron,
  SiJava,
  SiMysql,
  SiNextDotJs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVisualstudio
} from 'react-icons/si'
interface propsList {
  color: string
  name: string
  icon: IconType
}

interface propsColorList {
  C: propsList
  Cplusplus: propsList
  ElectronJs: propsList
  Java: propsList
  Javascript: propsList
  Mysql: propsList
  NextJs: propsList
  NodeJs: propsList
  Python: propsList
  React: propsList
  ReactNative: propsList
  Sqlite: propsList
  Typescript: propsList
  VsCode: propsList
}
export const TechList: propsColorList = {
  C: {
    color: '#555555',
    name: 'C',
    icon: SiC
  },
  Cplusplus: {
    color: '#f34b7d',
    name: 'C++',
    icon: SiCplusplus
  },
  ElectronJs: {
    color: '#74b1be',
    name: 'ElectronJs',
    icon: SiElectron
  },
  Java: {
    color: '#b07219',
    name: 'Java',
    icon: SiJava
  },
  Javascript: {
    color: '#fcdc00',
    name: 'Javascript',
    icon: IoLogoJavascript
  },
  Mysql: {
    color: '#0074a3',
    name: 'Mysql',
    icon: SiMysql
  },
  NextJs: {
    color: '#000',
    name: 'NextJs',
    icon: SiNextDotJs
  },
  NodeJs: {
    color: '#026e00',
    name: 'NodeJs',
    icon: FaNodeJs
  },
  Python: {
    color: '#3776ab',
    name: 'Python',
    icon: SiPython
  },
  React: {
    color: '#61DAFB',
    name: 'React',
    icon: SiReact
  },
  ReactNative: {
    color: '#61DAFB',
    name: 'React Native',
    icon: SiReact
  },
  Sqlite: {
    color: '#044a64',
    name: 'Sqlite',
    icon: DiSqllite
  },
  Typescript: {
    color: '#235a97',
    name: 'Typescript',
    icon: SiTypescript
  },
  VsCode: {
    color: '#0066B8',
    name: 'VsCode',
    icon: SiVisualstudio
  }
}
