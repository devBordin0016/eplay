class Game {
  categoria: string
  descricao: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    id: number,
    categoria: string,
    descricao: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.categoria = categoria
    this.descricao = descricao
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
