import React from 'react'
import styles from '../styles/Banner.module.css';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import {Pagination, Navigation} from 'swiper'
import Image from 'next/image';

const images = [
	'/bn1.jpg',
	'/bn2.jpg',
	'/bn3.jpg',
]

const Banner = () => {
	return (
		<section id='home' className={styles.banner}>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{clickable: true}}
				modules={[Pagination, Navigation]}
				className={'img-container'}
				loop={true}
				navigation={true}
			>
				{images.map((image, idx) => (
					<SwiperSlide key={idx}>
						<Image src={image} alt={image} width={1920} height={1280} priority />
					</SwiperSlide>
				))}
			</Swiper>
			<div className={styles.box}>
				<strong>Explore The World <i className='fa-solid fa-globe'></i></strong>
				<h1>It's Big World Out There, Go Explore</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, nostrum!</p>
				<a href="#">Explore Now</a>
			</div>
		</section>
	)
}

export default Banner