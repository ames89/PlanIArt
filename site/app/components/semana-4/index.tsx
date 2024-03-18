import { renderToString } from "react-dom/server";
import Css from "./semana.module.scss";

const Semana: React.FC = () => {
  return (
    <div className={Css.container}>
      <h1 className={Css.header}>Desafíos Futuros y Tendencias Emergentes</h1>
      <p>Pronto mas información</p>
    </div>
  );
};

export default renderToString(<Semana />);
