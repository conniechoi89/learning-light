import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import Popup from 'react-popup';
import SurveyInfo from './SurveyInfo';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surveyData: [{
        question: 'Would you like to start with basic of programming?',
        answer: 'True/false'
      }, {
        question: 'Do you like to make prettier web page?',
        answer: 'True/false'
      }]
    };
  }
  render() {
    const mapToComponents = (data) => {
      return data.map((survey, i) => {
        return (<SurveyInfo survey={survey} key={i}/>);
      })
    }

    return (
      <div>
        <h1>Survey</h1>
        <div>{mapToComponents(this.state.surveyData)}</div>
      </div>
    )
  }
}
module.exprots = {
  Survey: Survey
};

export default Survey;
