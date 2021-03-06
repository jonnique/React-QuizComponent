import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1
    };

    this.showNextQuestion = this.showNextQuestion.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_position + 1
    })
  }

  handleResetClick() {
    this.setState({
      quiz_position: 1
    });
  }

  render() {
    let isQuizEnd = false;

    if(this.state.quiz_position - 1 === quizData.quiz_questions.length){
      isQuizEnd = true;
    }

    if(isQuizEnd){
      return(<div className="QuizQuestion">
        <QuizEnd resetClickHandler={this.handleResetClick} />
      </div>)
    }else{
      return(<div className="QuizQuestion">
        <QuizQuestion showNextQuestionHandler={this.showNextQuestion} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
      </div>)
    }
  }
}
export default Quiz;