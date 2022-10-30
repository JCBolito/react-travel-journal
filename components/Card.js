import Image from "next/image";
import styles from "../styles/Card.module.css";
export default function Card(props) {

	return (
		<section className={styles.card}>
			<div className={styles.imgWrapper}>
				<div className={styles.img}>
					<Image
						src={props.img}
						alt=""
						position="relative"
						fill
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.location}>
					<div className={styles.country}>
						<Image
							src="/location.png"
							alt=""
							width={10}
							height={10}
						/>
						<p>{props.upCountry}</p>
					</div>
					<a href={props.map} target="_blank" rel="noreferrer" className={styles.link}>View on Google Maps</a>
				</div>
				<h1 className={styles.landmark}>{props.landmark}</h1>
				<p className={styles.date}>{props.date}</p>
				<p className={styles.description}>{props.description}</p>
			</div>
		</section>
	);
}