import React from "react"

const surveyUrl = 'https://app.stateofjs.com/survey/state-of-css/2020';

export default () => (
  <div className="TakeSurvey">
    {/* <span className="button large-button button-disabled">
      Take Survey (Coming Soon!)
    </span> */}
    <a className="button large-button" href={surveyUrl}>
      Take Survey
    </a>
  </div>
)
