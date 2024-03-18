import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana1: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>
        Aplicaciones de la Planificación Automática en la Industria 4.0
      </h1>
      <p>Pronto mas información</p>
      <p>
        <a
          target="_blank"
          href="https://www.spreaker.com/podcast/planiart--6121893"
        >
          <img className={Css.img} src="/icons/podcast.svg" />
        </a>
      </p>
    </div>
  );
};

export default renderToString(<Semana1 />);
