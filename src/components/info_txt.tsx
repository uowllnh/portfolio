const frontEndSkills = [
  "Kotlin", "Python", "Java", "HTML", "CSS", "JavaScript", "React",
  "React Native", "TypeScript", "Next.js", "Vue", "Tailwind CSS",
];

const toolSkills = [
  "Photoshop", "Figma", "GitHub", "Notion", "Jira", "Firebase Hosting",
];

const backendSkills = ["Firebase Authentication", "Cloud Firestore"];

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
    </div>
  );
}

export default function InfoTxt() {
  return (
    <section className="info-section" aria-labelledby="info-name">
      <div className="info-layout">
        <div className="info-profile-column">
          <header className="info-profile">
            <h1 id="info-name">KIM YURI / 김유리</h1>
            <p className="info-role">FRONT-END</p>
            <div className="info-contact">
              <p>1999 / 03 / 16</p>
              <a href="tel:+821076520790">+82 10 7652 0790</a>
              <a href="mailto:uowllnh@gmail.com">uowllnh@gmail.com</a>
            </div>
          </header>

          <section className="info-block" aria-labelledby="education-title">
            <h2 id="education-title" className="info-heading">EDUCATION</h2>
            <ol className="education-list">
              <li><span>2020 ~ 2025</span><strong>성결대학교 컴퓨터공학과</strong></li>
              <li><span>2015 ~ 2018</span><strong>광명북고등학교</strong></li>
            </ol>
          </section>
        </div>

        <section className="info-block info-skills" aria-labelledby="skills-title">
          <h2 id="skills-title" className="info-heading">SKILLS</h2>
          <div className="skills-grid">
            <SkillGroup title="Front-End" skills={frontEndSkills} />
            <SkillGroup title="Tools / Deployment" skills={toolSkills} />
            <SkillGroup title="Back-End / BaaS" skills={backendSkills} />
          </div>
        </section>
      </div>
    </section>
  );
}
