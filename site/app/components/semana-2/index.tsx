import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>
        Aplicaciones de la Planificación Automática en la Industria 4.0
      </h1>
      <p>
        El proyecto busca crear la herramienta Eco-EnergIA, Inteligencia
        Artificial para la Eficiencia Energética Industrial, dirigida al sector
        industrial, con el objetivo de lograr la eficiencia energética en sus
        procesos productivos mediante la planificación automática. La
        herramienta hará uso de algoritmos avanzados para analizar tanto datos
        históricos como datos en tiempo real recopilados de los procesos de
        producción, incluyendo una amplia gama de variables, como por ejemplo,
        uso energético de cada equipo, rendimiento y patrones de uso, entre
        otros. De este modo la herramienta podrá determinar patrones de consumo
        e identificar áreas de ineficiencia energética, y proponer
        recomendaciones y soluciones para optimizar el uso de energía.
      </p>
      <p>
        <a href="#">
          <img className={Css.img} src="/icons/document-scanner.svg" />
        </a>
      </p>
      <p>
        <a href="#">Acceder</a>
      </p>
    </div>
  );
};

export default renderToString(<Semana />);
