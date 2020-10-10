import React from "react"
import { useI18n } from "core/i18n/i18nContext"

const surveyUrl = "https://survey.stateofjs.com/survey/state-of-css/2020"

export default () => {
  const { translate } = useI18n()
  return (
    <div className="TakeSurvey">
      <span className="button large-button button-disabled">
        {translate("homepage.take_survey")} (Coming Soon!)
      </span>
      {/* <a className="button large-button" href={surveyUrl}>
      Take Survey (Coming Soon!)
    </a> */}
    </div>
  )
}
