'use client'

import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import Image from 'next/image'

import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'
import { FaWordpress } from 'react-icons/fa6'
import { FaElementor } from 'react-icons/fa6'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'

import dorenburgImg from '@/public/dorenburg2.jpg'
import dorenburgLogoImg from '@/public/dorenburg-logo.svg'

const Dorenburg = () => {
	const tech = [
		<FaWordpress size={40} />,
		<FaElementor size={40} />,
		<FaHtml5 size={40} />,
		<FaCss3 size={40} />,
		<SiJavascript size={40} />,
	]

	return (
		<div className='min-h-[100vh] bg-black text-white flex'>
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
								src={dorenburgLogoImg}
								alt='dorenburg'
								width={150}
								className='h-auto'
								priority
							/>
						</motion.div>
						<p className='rammetto my-6'>
							<a
								href='https://dorenburg-event.de/en/home-english/'
								target='_blank'
								className='underline flex'>
								<span className='text-5xl'>Dorenburg</span>{' '}
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
								Dorenburg: Event & Catering.
							</p>
							<p className='roboto-light text-sm my-4 w-full'>
								Developed a WordPress site for Dorenburg,
								specializing in event planning and catering
								services in Germany. The site features a sleek
								design and intuitive functionality to showcase
								their offerings and streamline client
								interactions.
							</p>
						</motion.div>
						<p className='rammetto text-sm mb-4'>
							Technologies used:
						</p>
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
								src={dorenburgLogoImg}
								alt='dorenburg'
								width={350}
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
								At Dorenburg, sustainability is at the heart of
								everything we do. From energy-efficient offices
								to eco-friendly events, we focus on reducing our
								impact while working with regional partners.
								Let's plan your next "green event" together!
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
							backgroundImage: `url(${dorenburgImg.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}></motion.div>
				</div>
			</div>
		</div>
	)
}

export default Dorenburg
