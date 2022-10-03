import ExpressoTradicional from '../assets/expresso-tradicional.svg'
import Americano from '../assets/expresso-americano.svg'
import CreamyCoffe from '../assets/expresso-cremoso.svg'
import CoffeWithMilk from '../assets/coffee-with-milk.svg'
import Latte from '../assets/latte.svg'
import Cappuccino from '../assets/cappuccino.svg'
import Moccaccino from '../assets/moccaccino.svg'
import HotChocolate from '../assets/hot-chocolate.svg'
import Cuban from '../assets/cuban.svg'
import Arabic from '../assets/arabic.svg'
import Irish from '../assets/irish.svg'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
    imgSource: ExpressoTradicional,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgSource: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
    imgSource: CreamyCoffe,
  },

  {
    id: 4,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgSource: CoffeWithMilk,
  },
  {
    id: 5,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgSource: Latte,
  },
  {
    id: 6,
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgSource: Cappuccino,
  },
  {
    id: 7,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
    imgSource: Moccaccino,
  },
  {
    id: 8,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
    imgSource: HotChocolate,
  },
  {
    id: 9,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
    imgSource: Cuban,
  },
  {
    id: 10,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
    imgSource: Arabic,
  },
  {
    id: 11,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
    imgSource: Irish,
  },
]
