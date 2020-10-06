import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css';



const App = (props) => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Learn to debug', 
    'Coding is hard, but it´s harder not to code'
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length)) //inicializo en selected de una vez con el valor random, desde acá selected es random
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) //inicializo votes como un array de el mismo largo de anecdotes, lleno de ceros
  const [hasVoted, setHasVoted] = useState(false) //inicializo un estado para validar sí ya votó o no en ese tureno específico por la anécdota específica.
  const [mostVotes, setMostVotes] = useState(0);


  const anecdote = () => {

    const randomItem = Math.floor(Math.random()*anecdotes.length); //selecciona un dato random en el array


    setSelected(randomItem);
    
    
    setHasVoted(false)//cada que aparece una nieva anécdota de vuelve a habilitar el botón

  };


  const vote = () => {
    
    setHasVoted(true) //cuando se vota se deshabilita el botón

    const newVotesState = [...votes] //al array newVotesState lo igualo al array de votes

    newVotesState[selected] += 1 ; //le asigno en la posición de selected una suma de + 1

    if (newVotesState[selected] > newVotesState[mostVotes]){ //se valida que el nuevo voto en la posición random sea mayor que el voto con mas votos, sí lo es, se selecciona como el de mayor votos

      setMostVotes(selected)

    }

    setVotes(newVotesState);
    

  }
  




  return (
    <div>

      <div>
        <h1>Anecdote Of The Day</h1>
        <p>{anecdotes[selected]}</p>
      </div>

      <p>Has {votes[selected]} Votes</p>



      
      <button onClick={() => anecdote()}>Next Anecdote</button> {/* () => anecdote() se hace para que no se ejecute la función apenas de renderice la aplicación */}
      <button onClick={() => vote()} disabled={hasVoted}>Vote</button>  {/* sí hasVoted es verdad, se deshabilita el botón */}


      <div>
        <h1>Anecdote With The Most Votes</h1>
        <p>{anecdotes[mostVotes]}</p> {/* se imprime la anécdota con mas votos */}

      </div>

      <p>Has {votes[mostVotes]} Votes</p> {/* votos en la posición de mas votos se imprime */}

    </div>
  )
}



export default App;
