import React from 'react'

const Perso = () => {
  return (
    <Person
    name="Rabeya Akter"
    age="23"
    />
  )
}


const Person = ({name,age}) =>{
return(
        <section>
            <h1>Name;{name}</h1>
            <p>Age:{age}</p>
        </section>
    )
}
    

export default Perso