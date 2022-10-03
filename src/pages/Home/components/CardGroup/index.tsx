import { CoffeeCard } from '../CoffeeCard'
import { CardGroupContainer, CoffeeList } from './styles'
import { coffees } from '../../../../data/coffees'
import { TitleText } from '../../../../components/Typography'
export const CardGroup = () => {
  return (
    <CardGroupContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CardGroupContainer>
  )
}
