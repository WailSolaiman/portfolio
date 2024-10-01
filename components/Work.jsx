'use client'

import { motion } from 'framer-motion'
import { data } from '@/constants'

const Work = () => {
	const { experience } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-20'>
			<motion.div
				initial={{ opacity: 0, x: -5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
				}}>
				<p className='rammetto text-2xl'>Work Experience</p>
			</motion.div>
			{experience.map((item, index) => (
				<motion.div
					key={index}
					className='flex mt-8'
					initial={{ opacity: 0, x: -5 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.5,
						delay: 0.2 * index,
						ease: 'easeInOut',
					}}>
					<div className='mr-6'>{item.icon}</div>
					<div className='w-full xl:w-2/4'>
						<p className='rammetto text-md'>
							{item.position} : {item.company}
						</p>
						<p className='roboto-light text-sm mb-2'>{item.date}</p>
						<p className='roboto-light text-sm'>
							{item.description}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	)
}

export default Work
