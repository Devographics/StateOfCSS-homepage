import React from "react"
import { useI18n } from "core/i18n/i18nContext"

const PreviousYears = () => {
  const { translate } = useI18n()

  return (
    <div className="section section-layout-b previous-years">
      <div className="or">{translate(homepage.previous_years)}</div>
      <div className="previous-years-links">
        <a
          className="previous-years-link button"
          href="http://2016.stateofjs.com"
        >
          2016
        </a>
        <a
          className="previous-years-link button"
          href="http://2017.stateofjs.com"
        >
          2017
        </a>
      </div>
    </div>
  )
}

export default PreviousYears
