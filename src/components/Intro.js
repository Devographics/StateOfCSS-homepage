import React from "react"
import ReactMarkdown from "react-markdown"
import { useI18n } from "core/i18n/i18nContext"

const Intro = () => {
  const { translate } = useI18n()

  return (
    <div className="Block Block--intro Intro introtext">
      <ReactMarkdown source={translate("homepage.intro")} />
    </div>
  )
}

export default Intro
