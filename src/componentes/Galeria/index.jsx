import { useState } from "react";
import styles from "./Galeria.module.scss";

import Tags from "../Tags";

import fotos from "./fotos.json";
import Cards from "./Cards";

export default function Galeria() {
  const [itens, setItens] = useState(fotos);
  const tags = [...new Set(fotos.map((foto) => foto.tag))]

  const filtrarFotos = (tag) => {
    const fotosFiltradas = fotos.filter((item) => item.tag === tag)
    setItens(fotosFiltradas)
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
        <ul className={styles.galeria__cards}>
          {itens.map((foto) => <Cards key={foto.id} foto={foto} />)}
        </ul>
    </section>
  )
}
