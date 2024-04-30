import CompetencyCard from "./components/CompetencyCard";
import Header from "./components/Header";
import MyPersonalCard from "./components/MyPersonalCard";
import TechnologyCard from "./components/TechnologyCard";
import myPhoto from "/myphoto.jpg";
import { data } from "./data.js";

const arrayComp = ["FrontendРазработка веб-приложений", "UI/UX дизайн", "Мобильный разработчик/Android Studio", "Аналитика данных"];

export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <p className="main_title">Information about me</p>
        <MyPersonalCard photo={myPhoto} fullName="Шестакова Полина Сергеевна" />
        <p className="main_title">My skills</p>
        {arrayComp.map((comp, index) => (
          <CompetencyCard key={index} competency={comp} />
        ))}
        <p className="main_title">What I want to learn</p>
        {data.map((tech, index) => (
          <TechnologyCard key={index} technology_title={tech.name} technology_desc={tech.description} />
        ))}
      </div>
    </div>
  );
}
