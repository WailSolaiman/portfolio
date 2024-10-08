'use client'

import { motion } from 'framer-motion'
import { data } from '@/constants'

const Skills = () => {
	const { skills } = data

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
				<p className='rammetto text-2xl'>Skills</p>
			</motion.div>
			<div className='flex mt-4'>
				{skills.map((item, index) => (
					<motion.div
						key={index}
						className='flex flex-col justify-center items-center mr-6'
						initial={{ opacity: 0, x: -5 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{
							type: 'spring',
							stiffness: 500,
							damping: 10,
						}}>
						<span className='mb-2'>{item.icon}</span>
						<span className='text-center text-xs'>{item.name}</span>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Skills
