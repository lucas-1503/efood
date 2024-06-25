import logo from '../../assets/icons/logo.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import twitter from '../../assets/icons/twitter.png'
import { FooterStyle, Branding, SocialMedia, Disclaimer } from './styles'

const Footer = () => (
  <FooterStyle>
    <Branding src={logo} alt="Logo do efood" />
    <SocialMedia>
      <img src={facebook} alt="" />
      <img src={instagram} alt="" />
      <img src={twitter} alt="" />
    </SocialMedia>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterStyle>
)

export default Footer
