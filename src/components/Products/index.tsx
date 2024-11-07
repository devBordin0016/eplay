import Tag from '../Tag'

import { Card, Decricao, Titulo, Infos } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag size="small">{category}</Tag>
    <Tag size="small">{system}</Tag>
    <Decricao>{description}</Decricao>
  </Card>
)

export default Product
