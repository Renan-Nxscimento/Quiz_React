import { useContext, useEffect } from 'react'

import { QuizContext } from './context/quiz'
import { Welcome } from './components/welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

import './App.css'


function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  

  return (
    <>
      <div className='App'>
        <h1>Quiz</h1>
        {quizState.gameStage === 'Start' && <Welcome></Welcome>}
        {quizState.gameStage === 'Category' && <PickCategory></PickCategory>}
        {quizState.gameStage === 'Playing' && <Question></Question>}
        {quizState.gameStage === 'End' && <GameOver></GameOver>}
      </div>
    </>
  )
}

export default App
