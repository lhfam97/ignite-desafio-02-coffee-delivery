import { CardGroup } from './components/CardGroup'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <CardGroup />
    </HomeContainer>
  )
}
