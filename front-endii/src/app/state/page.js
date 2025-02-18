import Image from "next/image";
import styles from "./state.module.css";
export default function Sobre() {
    return (
        <main>
            <h1>Domésticos</h1>
            <Image c
            lassName={styles.img} src='/images/original.jpg' alt=" Raposa" width={625} height={500} />
        </main>

    );
}