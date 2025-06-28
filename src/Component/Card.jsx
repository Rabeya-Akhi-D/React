import React from 'react'

const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default Card

// this coming from App.jsx file
// import React from 'react'
// import Perso from './Component/Person'
// import Production from './Component/Product'
// import Card from './Component/Card'
//  const App = () => {
//   return (
   
//   <div>
//     <Card>
//        <h1>My card 1</h1>
//         <p>This is some content of card</p>
//     </Card>
//     <Card>
//        <h1>My card 2</h1>
//         <p>This is some content of card</p>
//     </Card>
//     <Card>
//        <h1>My card 3</h1>
//         <p>This is some content of card</p>
//     </Card>
//     <Card>
//        <h1>My card 4</h1>
//         <p>This is some content of card</p>
//     </Card>
//     <Card>
//        <h1>My card 5</h1>
//         <p>This is some content of card</p>
//     </Card>
//     <Card>
//        <h1>My card 5</h1>
//         <p>This is some content of card</p>
//     </Card>
//   </div>
//   )
// }
// export default App