import React from 'react'
import styles from '../styles/Subscribe.module.css'
import Image from 'next/image'

const Subscribe = () => {
	return (
		<section id='subscribe' className={styles.subscribe}>
			<div className={styles.text}>
				<h2>Subscribe Our Newsletter</h2>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus commodi in expedita.</p>

				<form>
					<input type="email" required placeholder='Enter your emai' />
					<button aria-label='send' title='send'>
						<i className="fas fa-paper-plane"></i>
					</button>
				</form>
			</div>
			<div className={styles.img_container}>
				<Image 
					src={'/sub.png'}
					alt={'/sub.png'}
					width={488}
					height={482}
				/>
			</div>
		</section>
	)
}

export default Subscribe