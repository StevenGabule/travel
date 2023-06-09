import React from 'react'
import styles from '../styles/Testimonials.module.css'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const testimonials = [
	{
		id: 1,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
	{
		id: 2,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
	{
		id: 3,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
	{
		id: 4,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
	{
		id: 5,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
	{
		id: 6,
		name: "Mike Ross",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, cupiditate?",
		avatar: "/t-member.jpg"
	},
];

const Testimonials = () => {
	return (
		<section id='testimonials' className={styles.testimonials}>

			<div className={styles.img_container}>
				<Image src={'/ts.png'} alt='ts.png' width={488} height={482} />
			</div>
			<div className={styles.slider}>
				<h2>Client's Reviews</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, laborum.</p>

				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{ clickable: true }}
					modules={[Pagination]}
				>
					{
						testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id}>
								<div className={styles.card}>
									<div className={styles.text}>
										<i className="fas fa-quote-left"></i>
										<p>{testimonial.text}</p>
										<strong>{testimonial.name}</strong>
									</div>
									<div className={styles.avatar}>
										<Image src={testimonial.avatar} alt={testimonial.avatar} width={100} height={100} />
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

export default Testimonials