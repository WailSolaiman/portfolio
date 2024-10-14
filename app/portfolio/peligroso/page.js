'use client'

import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'
import { FaWordpress } from 'react-icons/fa6'
import { SiWoo } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'

import peligrosoImg from '@/public/peligroso2.jpg'
import peligrosoLogoImg from '@/public/peligroso-logo.png'

const Peligroso = () => {
	const tech = [
		<FaWordpress size={40} />,
		<SiWoo size={60} />,
		<FaHtml5 size={40} />,
		<FaCss3 size={40} />,
		<SiJavascript size={40} />,
	]

	return (
		<div className='min-h-[100vh] bg-[#f7d501] text-black flex'>
			<div className='container w-11/12 lg:w-10/12 xl:w-8/12 m-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-4'>
					<div>
						<div className='mb-4'>
							<Link href={'/'}>
								<IoArrowBackCircleOutline size={50} />
							</Link>
						</div>

						<motion.div
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
							}}>
							<Image
								src={peligrosoLogoImg}
								alt='peligroso'
								width={100}
								className='h-auto'
								priority
							/>
						</motion.div>
						<p className='rammetto my-6'>
							<a
								href='https://peligroso.store/'
								target='_blank'
								className='underline flex'>
								<span className='text-5xl'>peligroso</span>{' '}
								<FiExternalLink size={20} />
							</a>
						</p>
						<motion.div
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'easeInOut',
							}}>
							<p className='roboto-bold text-sm mb-4 w-full'>
								SH☻P OUR $H!T.
							</p>
							<p className='roboto-light text-sm my-4 w-full'>
								Created a WooCommerce-powered e-commerce website
								for Peligroso, a street style clothing store in
								Saudi Arabia. The site features a dynamic and
								user-friendly design, optimized for seamless
								shopping experiences.
							</p>
						</motion.div>
						<p className='rammetto text-sm'>Technologies used:</p>
						<motion.div className='flex flex-row justify-start items-center'>
							{tech.map((item, index) => (
								<motion.span
									key={index}
									className='mr-4'
									initial={{ opacity: 0, x: -5 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: 0.2 * index,
										ease: 'easeInOut',
									}}>
									{item}
								</motion.span>
							))}
						</motion.div>

						<motion.div
							className='w-full'
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: 'easeInOut',
							}}>
							<Image
								src={peligrosoLogoImg}
								alt='peligroso'
								width={300}
								className='h-auto my-4'
								priority
							/>
						</motion.div>

						<motion.div
							className='w-full'
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.6,
								ease: 'easeInOut',
							}}>
							<p className='roboto-light text-sm'>
								At peligroso, we're all about bold streetwear
								that speaks your style. We drop exclusive pieces
								that keep you fresh, confident, and always ahead
								of the trend. Join the movement and rep the
								vibe.
							</p>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.3,
							delay: 0.2,
							ease: 'easeInOut',
						}}
						viewport={{ once: true }}
						className='w-full min-h-[350px] sm:min-h-[500px] md:min-h-[600px] 
						rounded-2xl shadow-sm border-black'
						style={{
							backgroundImage: `url(${peligrosoImg.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}></motion.div>
				</div>
			</div>
		</div>
	)
}

export default Peligroso
