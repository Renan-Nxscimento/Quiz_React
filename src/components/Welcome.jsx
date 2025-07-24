import React from 'react'
import Quiz from '../img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/Quiz.jsx'

import './Welcome.css'

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)



    return (
        <div id='welcome'>
          <h2>Seja bem vindo</h2>
          <p>Clique no botão abaixo para iniciar</p>
          <button onClick={() => dispatch({type: 'CHANGE_STAGE'})}>Iniciar</button>
          <img src={Quiz} alt="Inicio do quiz" />
        </div>
  )
}

export { Welcome }
