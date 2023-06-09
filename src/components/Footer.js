import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.box}>
					<strong>Travel</strong>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, voluptas.</p>

					<div className={styles.social}>
						<a href="#" aria-label='facebook' title='facebook'>
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" aria-label='twitter' title='twitter'>
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#" aria-label='instagram' title='instagram'>
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#" aria-label='github' title='github'>
							<i className="fab fa-github"></i>
						</a>
					</div>
				</div>

				<div className={styles.box}>
					<strong>Links</strong>
					<ul>
						<li><a href="#home">home</a></li>
						<li><a href="#trending">trending</a></li>
						<li><a href="#destinations">destinations</a></li>
						<li><a href="#testimonials">testimonials</a></li>
						<li><a href="#">book online</a></li>
					</ul>
				</div>

				<div className={styles.box}>
					<strong>Extra Links</strong>
					<ul>
						<li><a href="#search">find destinations</a></li>
						<li><a href="#explore">explore nearby</a></li>
						<li><a href="#subscribe">subscribe</a></li>
						<li><a href="#">privacy policy</a></li>
						<li><a href="#">terms of use</a></li>
					</ul>
				</div>

				<div className={styles.box}>
					<strong>Contact</strong>
					<span><i className="fas fa-map-marker-alt"></i> Nha Trang, VM</span>
					<span><i className="fas fa-envelope"></i> Example@gmail.com</span>
					<span><i className="fas fa-phone-square-alt"></i> 034.35.36.366</span>
				</div>
			</div>
			<div className={styles.copyright}>GABULE Web 2023 - All copyright reserved.</div>
		</footer>
	)
}

export default Footer