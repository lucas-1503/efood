import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <>
      <Container>
        <PacmanLoader color={colors.vermelho} />
      </Container>
    </>
  )
}

export default Loader
