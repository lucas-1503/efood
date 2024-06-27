import { useDispatch, useSelector } from 'react-redux'
import {
  Overlay,
  CartContainer,
  AddCartButton,
  Sidebar,
  ItemCart,
  ImageItem,
  InfosItem,
  DeleteItemButton,
  InfosCart,
  CartStage
} from './styles'
import { RootReducer } from '../../store'
import { close, removeItem } from '../../store/reducers/cart'
import { priceFormat } from '../FoodList'

const Cart = () => {
  const { isOpen, pedido, isAddress, isCart } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulator, actualValue) => {
      return (acumulator += actualValue.preco)
    }, 0)
  }
  const remItem = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={openCart} />
      <Sidebar>
        <CartStage className={!isCart ? 'is-checkout' : ''}>
          <ul>
            {pedido.map((p) => (
              <ItemCart key={p.id}>
                <ImageItem src={p.foto} alt="" />
                <InfosItem>
                  <h3>{p.nome}</h3>
                  <span>{priceFormat(p.preco)}</span>
                </InfosItem>
                <DeleteItemButton type="button" onClick={() => remItem(p.id)} />
              </ItemCart>
            ))}
          </ul>
          <InfosCart>
            <p>Valor total</p>
            <span>{priceFormat(getTotalPrice())}</span>
          </InfosCart>
          <AddCartButton>Continuar com a esntrega</AddCartButton>
        </CartStage>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
