import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana1: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>
        Fundamentos de la Planificación Automática en la Manufactura
      </h1>
      <p>¡Bienvenidos al primer episodio del podcast PlanIArt!</p>
      <p>
        Mi nombre es Alejandra Rivas, soy Licenciada en Informática, tengo 35
        años y actualmente trabajo como Ingeniera en QA de software.
      </p>
      <p>
        El objetivo del podcast es conocer el fascinante mundo de la
        planificación automática y su impacto en la industria manufacturera.
      </p>
      <p>
        El podcast es realizado como primera actividad de entrega para la
        asignatura Planificación Automática impartida por el docente Roberto
        Fuentes. En esta página web estaré publicando las próximas entregas.
      </p>
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
