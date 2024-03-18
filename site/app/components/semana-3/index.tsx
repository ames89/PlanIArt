import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>
        Integración de Tecnologías Inmersivas con la Planificación Automática
      </h1>
      <p>¡Pronto más información!</p>
    </div>
  );
};

export default renderToString(<Semana />);
