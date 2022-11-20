import favorito from "../favorito.png";
import open from "../open.png";

import styles from "./Cards.module.scss";

export default function Cards({foto}) {
  return (
    <li key={foto.id} className={styles.card}>
        <img className={styles.card__imagem} src={foto.imagem} alt={foto.titulo} />
        <p className={styles.card__descricao}>{foto.titulo}</p>
        <div>
            <p>{foto.creditos}</p>
            <span>
                <img src={favorito} alt="curtir" />
                <img src={open} alt="abrir modal" />
            </span>
        </div>
    </li>
  )
}
