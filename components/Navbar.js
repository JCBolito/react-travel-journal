import Image from "next/image";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<Image
				src="/world.png"
				alt=""
				width={24}
				height={24}
			/>
			<p className={styles.title}>My Travel Journal.</p>
		</nav>
	);
}