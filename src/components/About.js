import React from 'react'
import ReactMarkdown from 'react-markdown'
import authors from '../data/authors.yaml'
import { useI18n } from "core/i18n/i18nContext"

const About = () => {
    const { translate } = useI18n()
    return (
    <div className="Block About">
        <h3 className="Block__Heading About__Heading">{translate("homepage.hand_coded")}</h3>
        <div className="About__Authors">
            {authors.map(({ name, slug, bio, url }) => (
                <div key={slug} className="About__Author">
                    <h4 className="About__Author__Name">
                        <a href={url}>{name}</a>
                    </h4>
                    <div className="About__Author__Bio">
                        <ReactMarkdown source={translate(`author.${slug}.bio`)} />
                    </div>
                </div>
            ))}
        </div>
    </div>
)}

export default About
