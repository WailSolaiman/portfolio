'use client'

import { motion } from 'framer-motion'

import { data } from '@/constants'

const Hero = () => {
	const { hero } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto pt-20'>
			<div className='grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-2 lg:gap-16'>
				<motion.div
					initial={{ opacity: 0, x: -5 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}>
					<p className='rammetto text-4xl lg:text-5xl'>
						{hero.firstname} <br />
						{hero.lastname}{' '}
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 5 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
					}}>
					<p className='rammetto w-full xl:w-1/2 text-2xl mt-3 lg:mt-0'>
						{hero.about}
					</p>
				</motion.div>
			</div>
		</div>
	)
}

export default Hero
