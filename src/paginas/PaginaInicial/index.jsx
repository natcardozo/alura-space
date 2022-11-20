import Cabecalho from "../../componentes/Cabecalho";
import Galeria from "../../componentes/Galeria";
import Menu from "../../componentes/Menu";

import banner from "./banner.png";

import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="O Planeta Terra vista do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                </div>
            </main>
        </>
    )
}
