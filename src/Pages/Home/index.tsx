import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    categoria: 'Acao',
    descricao:
      'Resident Evil 4 , conhecido no Japao como Biohazard 4, é um jogo eletronico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10 %', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    categoria: 'Acao',
    descricao:
      'Resident Evil 4 , conhecido no Japao como Biohazard 4, é um jogo eletronico de survival horror...',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    categoria: 'Acao',
    descricao:
      'Resident Evil 4 , conhecido no Japao como Biohazard 4, é um jogo eletronico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10 %', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    categoria: 'Acao',
    descricao:
      'Resident Evil 4 , conhecido no Japao como Biohazard 4, é um jogo eletronico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10 %', 'R$ 250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    categoria: 'RPG',
    descricao:
      'Diablo IV é um RPG de acao  em desenvolvimento pela Blizzard Entertaiment.',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    categoria: 'RPG',
    descricao:
      'Diablo IV é um RPG de acao  em desenvolvimento pela Blizzard Entertaiment.',
    title: 'Zelda TOK',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: zelda
  },
  {
    id: 7,
    categoria: 'RPG',
    descricao:
      'Diablo IV é um RPG de acao  em desenvolvimento pela Blizzard Entertaiment.',
    title: 'Star Wars Survivor',
    system: 'Windows',
    infos: ['17/05'],
    image: starWars
  },
  {
    id: 8,
    categoria: 'RPG',
    descricao:
      'Resident Evil 4 , conhecido no Japao como Biohazard 4, é um jogo eletronico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Nintendo Switch',
    infos: ['17/05'],
    image: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promocoes" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
