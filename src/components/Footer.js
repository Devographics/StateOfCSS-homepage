import React from "react"
import { useI18n } from "core/i18n/i18nContext"

const Footer = () => {
  const { translate } = useI18n()
  return (
    <div className="Block Block--Footer Footer">
      <p>
        {translate("homepage.hand_coded")}{" "}
        <a href="https://github.com/StateOfJS/StateOfCSS-homepage">
          {translate("homepage.leave_issue")}
        </a>
        &nbsp;or&nbsp;
        <a href="mailto:hello@stateofjs.com">
          {translate("homepage.get_in_touch")}
        </a>
        .
      </p>
    </div>
  )
}

export default Footer
