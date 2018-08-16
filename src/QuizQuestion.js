import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(buttonText){
    if(buttonText === this.props.quiz_question.answer){
      this.props.showNextQuestionHandler()
    }
  }

  render() {
    return(
      <main>
        <section>
          <p>// instruction text goes here</p>
          {this.props.quiz_question.instruction_text}
        </section>
        <section className="buttons">
          <ul>
            //quiz question button logic goes here
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
              return( <QuizQuestionButton clickHandler={this.handleClick} key={index} button_text={answer_option}/>)
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion