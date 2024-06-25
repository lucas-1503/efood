import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { useGetRestaurantSelectedQuery } from '../../services/api'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantFood } = useGetRestaurantSelectedQuery(id)

  if (restaurantFood) {
    return (
      <>
        <Header />
        <Apresentacao restaurant={restaurantFood} />
        <FoodList restaurant={restaurantFood} />
        <Footer />
      </>
    )
  }
  return <Loader />
}

export default Perfil