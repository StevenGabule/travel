import React from 'react'
import styles from '../styles/Search.module.css'

const Search = () => {
	return (
		<section id={'search'} className={styles.search}>
			<strong>Explore Your Dream Place</strong>
			<h2>Find Your Dream Destination</h2>
			<p>Find Your Destination - The Ultimate Guide to Your Dream Destination</p>

			<form>
				<div className={styles.box}>
					<div className={styles.icon}>
						<i className="fa-solid fa-location-arrow"></i>
					</div>

					<div className={styles.input}>
						<label htmlFor="location">Location</label>
						<input type="text" id='location' placeholder='Where are you going?' required />
					</div>
				</div>

				<div className={styles.box}>
					<div className={styles.icon}>
						<i className="fas fa-calendar-alt"></i>
					</div>

					<div className={styles.input}>
						<label htmlFor="checkin">Check In</label>
						<input type="date" id='checkin'required />
					</div>
				</div>

				<div className={styles.box}>
					<div className={styles.icon}>
						<i className="fas fa-calendar-alt"></i>
					</div>

					<div className={styles.input}>
						<label htmlFor="checkout">Check Out</label>
						<input type="text" id='checkout' required />
					</div>
				</div>

				<div className={styles.box}>
					<div className={styles.icon}>
						<i className="fas fa-users"></i>
					</div>

					<div className={styles.input}>
						<label htmlFor="travels">Travels</label>
						<input type="text" id='travels' placeholder='8 Tourists' required />
					</div>
				</div>

				<button aria-label='search' title='search'>
					<i className="fas fa-search"></i>
				</button>
			</form>
			</section>
	)
}

export default Search