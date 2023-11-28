import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Card
        profilePic="tengen-pic.png"
        name="Anish Aby"
        description="A self-taught developer with a strong interest in technology. I like playing sports, enjoy playing video games and love learning new languages."
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card-container">
      <img
        className="profile-pic"
        src={props.profilePic}
        alt="profile pic"
      ></img>
      <h2 className="profile-name">{props.name}</h2>
      <div className="profile-description">{props.description}</div>
      <div>
        <Skills />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-container">
      <SkillTab skill="HTML+CSS" emoji="💪🏻" />
      <SkillTab skill="JavaScript" emoji="💮" />
      <SkillTab skill="Web Design" emoji="🏮" />
      <SkillTab skill="Git and Github" emoji="👍🏻" />
      <SkillTab skill="React" emoji="✍🏻" />
      <SkillTab skill="Svelte" emoji="🔮" />
    </div>
  );
}

function SkillTab(props) {
  return (
    <div className="skill-tab">
      <div>{props.skill}</div>
      <div>{props.emoji}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
