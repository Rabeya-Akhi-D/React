import { useState } from 'react'

const App = () => {
    const [movie, setMovie]=useState({
        title:"Equalizer 4",
        ratings : 7
    })

    const handleClick = () =>{
        // const copyMovie = {
        //     ...movie,
        //     ratings:5
        // }

        setMovie({...movie,ratings:5});
    } 



  return (
    <div><h1>{movie.title}</h1>
          <p>Ratings:{movie.ratings}</p>
          <button onClick={handleClick}>Change rating</button>
          
          </div>
  )
}

export default App