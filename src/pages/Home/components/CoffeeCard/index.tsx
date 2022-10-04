import {
  Tag,
  TagGroup,
  CoffeeCardContainer,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { RegularText, TitleText } from '../../../../components/Typography'
import { formatMoney } from '../../../../utils/formatMoney'
import { QuantityInput } from '../../../../components/QuantityInput'
import { useCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number
  name: string
  price: number
  description: string
  tags: string[]
  imgSource: string
}

export interface CoffeeCardProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    addCoffeeToCart(coffee, quantity)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.imgSource} alt="" />
      <TagGroup>
        {coffee.tags.map((tag) => {
          return <Tag key={`${coffee.id}-${tag}`}>{tag}</Tag>
        })}
      </TagGroup>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
