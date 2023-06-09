import React from 'react'
import styles from '../styles/Destination.module.css'
import Image from 'next/image'

const destinations = [
	{
		id: 1,
		name: "Manila",
		location: "Philippine Capital with Colonial Core",
		stars: 4.3,
		price: 200,
		img: '/d-1.jpg'
	},
	{
		id: 2,
		name: "Boracay",
		location: "White Beach & Mount Luho Views",
		stars: 4.8,
		price: 1000,
		img: '/d-2.jpg'
	},
	{
		id: 3,
		name: "Cebu City",
		location: "Cebu City, Dive Sites & Beach Resorts",
		stars: 4.6,
		price: 1240,
		img: '/d-3.jpg'
	},
	{
		id: 4,
		name: "El Nido",
		location: "Beaches, Diving & the Bacuit Archipelago",
		stars: 4.3,
		price: 5900,
		img: '/d-4.jpg'
	},
	{
		id: 5,
		name: "Chocolate Hills",
		location: "Geological Formation for Hikes & Photos",
		stars: 4.0,
		price: 3020,
		img: '/d-5.jpg'
	},
	{
		id: 6,
		name: "Baguio",
		location: "Burnham Park, Camp John Hay & Resorts",
		stars: 2.3,
		price: 2301,
		img: '/d-6.jpg'
	},
]

const Destination = () => {
	return (
		<section id='destinations' className={styles.destinations}>
			<div className={styles.heading}>
				<h2>Popular Destinations</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores?</p>
			</div>
			<div className={styles.grid}>
				{destinations.map((destination, idx) => (
					<div className={`${styles.card} card-${idx}`} key={destination.id}>
						<Image src={destination.img} alt={destination.img} width={600} height={600} />
						<div className={styles.box}>
							<span className={styles.star}>
								<i className="fa-solid fa-star"></i> {destination.stars}
							</span>
							<div className={styles.group}>
								<div className={styles.text}>
									<strong>{destination.name}</strong>
									<span><i className="fas fa-map-marker-alt"></i> {destination.location}</span>
								</div>
								<span className={styles.price}>₱{destination.price}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Destination