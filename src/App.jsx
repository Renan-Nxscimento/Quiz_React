import { useContext } from 'react'

import { QuizContext } from './context/Quiz.jsx'
import { Welcome } from './components/Welcome.jsx'
import Question from './components/Question.jsx'
import GameOver from './components/GameOver.jsx'
import PickCategory from './components/PickCategory.jsx'

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
