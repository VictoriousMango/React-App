import { useState } from 'react'
import NavBar from './components/NavBar'
import ListGroup from './components/ListGroup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const coffee_names = [
    {
      name : "Caffe Latte", 
      img : "./src/assets/Caffe_Latte_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk"],
      content:'Caffé Latte - or just Latte - is a very popular milk-based coffee drink. It got its name from Italy, where "Caffé" means coffee and "Latte" means milk. It has an espresso shot at the bottom, steamed milk, and a small amount of milk foam. '
    },
    {
      name : "Cappuccino", 
      img : "./src/assets/Cappuccino_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk"],
      content : "A Cappuccino, just like a latte, has steamed milk and milk foam. The key difference is that a Cappuccino has more milk foam at the top. A good thumb rule is that a perfect cappuccino should be able to hold a teaspoon, by itself, from the edge of the cup and further out on the foam."
    },
    {
      name : "Cortado", 
      img : "./src/assets/Cortado_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk"],
      content : "A Cortado consists of an espresso shot and steamed milk. A Cortado is close to a flat white - just with less steamed milk and with no foam."
    },
    {
      name : "Espresso", 
      img : "./src/assets/Espresso_Coffee.png", 
      ingredients:["Espresso"],
      content : "First, let's start with the basics: you can primarily get coffee with or without milk. Without milk, it's typically referred to as a pure espresso shot, an Americano (an espresso shot with hot water poured in)."
    },
    {
      name : "Espresso Macchiato", 
      img : "./src/assets/Espresso_Macchiato_Coffee.png", 
      ingredients:["Espresso", "Foam Milk"],
      content : 'Compared to the Latte Macchiato, here, you just add "spotting" of the foamed milk directly on top of the espresso shot - no steamed milk or anything else. This is the type of coffee with the least amount of milk in it.'
    },
    {
      name : "Flat White", 
      img : "./src/assets/Flat_White_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk"],
      content : "A flat white works on the same principles as a latte - it is just more concentrated, which means that there's still an espresso shot in but less steamed milk and even less foamed milk. The foamed milk should barely even be visible, and it's not everywhere you can even get latte art with your flat white - it depends on how 'flat' your local barista makes it."
    },
    {
      name : "Latte Macchiato", 
      img : "./src/assets/Latte_Macchiato_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk"],
      content : 'Here, you start with the steamed milk at the bottom and then pour in the espresso shot. After, you add "spotting" of foamed milk on top. Macchiato means "stained" or "spotted", so it has a literal meaning for these coffee types.'
    },
    {
      name : "Mocha", 
      img : "./src/assets/Mocha_Coffee.png", 
      ingredients:["Espresso", "Steamed Milk", "Foam Milk", "Chocolate"],
      content : "A mocha coffee drink adds chocolate in it after the espresso shot and before the milk is added. Apart from that, it can follow all the previously mentioned types when processing the milk."
    },
]

const sideBarElements = [
    {img : "./src/assets/Chocolate.png", coffeeClass : "Chocolate", options : "1"},
    {img : "./src/assets/Espresso.png", coffeeClass : "Espresso", options : "8"},
    {img : "./src/assets/Foam_Milk.png", coffeeClass : "Foam Milk", options : "7"},
    {img : "./src/assets/Steamed_Milk.png", coffeeClass : "Steamed Milk", options : "6"}
]
  return (
    <>
    <NavBar />
    <div> <ListGroup coffee_names={coffee_names} sideBarElements={sideBarElements}/></div>
    </>
  )
}

export default App
