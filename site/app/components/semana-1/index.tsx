import { renderToString } from "react-dom/server";
import Css from "./semana-1.module.scss";

const QuienesSomos: React.FC = () => {
  return (
    <>
      <h1>Hola Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        tincidunt dapibus ex, vel rhoncus mauris placerat bibendum. Phasellus in
        est lacinia, mollis neque nec, tristique metus. Proin ligula eros,
        luctus a elit vestibulum, congue tempor nibh. Sed volutpat nibh erat, ut
        posuere tortor vestibulum nec. Mauris vel fringilla massa. Vivamus.
      </p>
      <p>
        <a href="javascript:void 0">
          <img className={Css.img} src="/icons/podcast.svg" />
        </a>
      </p>
    </>
  );
};

export default renderToString(<QuienesSomos />);
