import { useState } from 'react'
import { skills } from '../data/portfolio'
import AnimatedLetters from './AnimatedLetters'

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0])
  return (
    <section className="skills section" id="skills">
      <div className="section-label">06 — Toolbox</div>
      <div className="skills-layout">
        <h2>
          Curious by
          <br />
          nature.
        </h2>
        <div className="skill-copy">
          <p>
            Languages, frameworks, databases, and tools I use to build
            full-stack products.
          </p>
          <div className="skill-cards">
            {skills.map((skill, index) => (
              <button
                className={`skill-card ${selectedSkill.name === skill.name ? 'active' : ''}`}
                style={{ '--skill-index': index }}
                onClick={() => setSelectedSkill(skill)}
                aria-label={`${skill.name}: ${skill.detail}`}
                key={skill.name}
              >
                <span>{skill.icon}</span>
                <div>
                  <strong aria-hidden="true">
                    <AnimatedLetters text={skill.name} />
                  </strong>
                  <small>{skill.detail}</small>
                </div>
              </button>
            ))}
          </div>
          <div className="skill-detail">
            <span>Currently selected</span>
            <h3>{selectedSkill.name}</h3>
            <p>{selectedSkill.worked}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
