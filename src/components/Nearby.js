import React from 'react'
import styles from '../styles/Nearby.module.css'
import Image from 'next/image';

const explores = [
	{
		 id: 1,
		 name: "Pulangi Tower River",
		 img: '/ex-nb.jpg',
		 time: "15 minutes drive",
		 distance: 1480
	},
	{
		id: 2,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 3,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 4,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 5,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 6,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 7,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 8,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
	{
		id: 9,
		name: "Pulangi Tower River",
		img: '/ex-nb.jpg',
		time: "15 minutes drive",
		distance: 1480
	},
];

const Nearby = () => {
	return (
		<section id='explore' className={styles.explore}>
			<div className={styles.heading}>
				<h2>Explore Nearby</h2>
				<p>5,400 beautiful places to go</p>
			</div>
			<div className={styles.wrapper}>
				{explores.map((explore) => (
					<div className={styles.card} key={explore.id}>
						<Image src={explore.img} alt={explore.img} width={100} height={100} />
						<a href="#">{explore.name}</a>
						<p>{explore.time}</p>
						<span>{explore.distance}</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default Nearby