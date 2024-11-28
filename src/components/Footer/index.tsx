import { Container, SectionTitle, Links, Link, FooterSection } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link to="/categories#rpg">RPG</Link>
          </li>
          <li>
            <Link to="/categories#action">ACAO</Link>
          </li>
          <li>
            <Link to="/categories#sports">ESPORTES</Link>
          </li>
          <li>
            <Link to="/categories#simulation">SIMULACAO</Link>
          </li>
          <li>
            <Link to="/categories#fight">LUTA</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rapido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">PROMOCOES</Link>
          </li>
          <li>
            <Link to="/#coming-soon">EM BREVE</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <p>{currentYear} - &copy; E-Play Todos os direitos reservados</p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
