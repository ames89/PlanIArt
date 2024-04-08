import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>
        Integración de Tecnologías Inmersivas con la Planificación Automática
      </h1>
      <p>
        Smart San José Transformando la Planificación Urbana con Realidad Mixta
      </p>
      <p>
        <a href="#">
          <img className={Css.img} src="/icons/document-scanner.svg" />
        </a>
      </p>
      <p>
        <a href="#">Acceder al Storytelling</a>
      </p>
    </div>
  );
};

export default renderToString(<Semana />);
