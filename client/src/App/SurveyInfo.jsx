import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Survey from './Survey';



class SurveyInfo extends Component {
  render() {
    var survey = require('./Survey');
    return (
      <div>{this.props.survey.question}{this.props.survey.answer}</div>
    )
  }
};

export default SurveyInfo;