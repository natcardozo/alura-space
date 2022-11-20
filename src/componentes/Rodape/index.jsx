import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";

import "./Rodape.module.scss";

export default function Rodape() {
    return (
        <footer>
            <div>
                <img src={facebook} alt="Ir para Facebook" />
                <img src={twitter} alt="Ir para Twitter" />
                <img src={instagram} alt="Ir para Instagram" />
            </div>
            <p>Desenvolvido por Nathalia Cardozo.</p>
        </footer>
    )
}
