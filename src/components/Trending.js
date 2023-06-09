import React from 'react'
import styles from '../styles/Trending.module.css'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const trends = [
	{
		id: 1,
		name: 'Programming Tutorial',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 10,
		places: 6,
		days: '1 weeks',
		price: 21.2
	},
	{
		id: 2,
		name: 'PHP For Career Shifter',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 12,
		places: 11,
		days: '1 weeks',
		price: 1.22
	},
	{
		id: 3,
		name: 'NodeJS Stream',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 20,
		places: 4,
		days: '1 weeks',
		price: 133.2
	},
	{
		id: 4,
		name: 'Programming Tutorial',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 10,
		places: 6,
		days: '1 weeks',
		price: 21.2
	},
	{
		id: 442,
		name: 'PHP For Career Shifter',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 12,
		places: 11,
		days: '1 weeks',
		price: 1.22
	},
	{
		id: 23,
		name: 'NodeJS Stream',
		location: 'nha Trang',
		img: '/t-1.jpg',
		activities: 20,
		places: 4,
		days: '1 weeks',
		price: 133.2
	},
];

const Trending = () => {
	return (
		<section id='trending' className={styles.trending}>
			<div className={styles.heading}>
				<h2>Trending 2023</h2>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, a.</p>
			</div>

			<div className={styles.wrapper}>

				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					breakpoints={{
						800: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1110: {
							slidesPerView: 3,
							spaceBetween: 20,
						}
					}}
				>
					{
						trends.map((trend) => (
							<SwiperSlide key={trend.id}>
								<div className={styles.card}>
									<div className={styles.title}>
										<span><i className="fas fa-map-marker-alt"></i> {trend.location}</span>
										<a href="#">{trend.name}</a>
									</div>

									<div className={styles.img_container}>
										<Image src={trend.img} alt={trend.img} width={350} height={170} priority />
									</div>

									<div className={styles.text}>
										<span><i className='fa-solid fa-shoe-prints'></i> {trend.activities} Activities</span>
										<span><i className='fa-solid fa-compass'></i> {trend.places} Places</span>
										<span><i className='fa-solid fa-calendar-days'></i> {trend.days}</span>
									</div>

									<hr />

									<div className={styles.price}>
										<p>From ${trend.price} <span>/Person</span></p>
										<a href="#">Book Now</a>
									</div>
								</div>
							</SwiperSlide>
						))
					}
				</Swiper>
			</div>

		</section>
	)
}

export default Trending