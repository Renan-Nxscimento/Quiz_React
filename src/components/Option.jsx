import { useContext } from 'react'
import { QuizContext } from '../context/Quiz.jsx'

import './Option.css'

const Option = ({option, selectOption, answer, hide}) => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className={`option ${
      quizState.answerSelected && option === answer ? 'correct' : ''}
      ${
      quizState.answerSelected && option !== answer ? 'wrong' : ''}
      ${hide ? 'hide' : ''}`} onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  )
}

export default Option
