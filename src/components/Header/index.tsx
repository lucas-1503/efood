import logo from '../../assets/icons/logo.png'
import { HeaderStyle } from './styles'
import { Branding, LinkRestaurantes, TextCart } from './styles'

const Header = () => {
  return (
    <HeaderStyle>
      <div className="container">
        <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
        <Branding src={logo} alt="Logo do restaurante" />
      </div>
    </HeaderStyle>
  )
}

export default Header
