import React from "react"
import { useI18n } from "core/i18n/i18nContext"

const ViewResults = () => {
  const { translate } = useI18n()

  return (
    <div className="ViewResults">
      <a
        // className="button large-button"
        href="https://2019.stateofcss.com"
      >
        {translate("homepage.view_results")}
      </a>
    </div>
  )
}

export default ViewResults
