'use client'

import { motion } from 'framer-motion'
import { data } from '@/constants'

const Education = () => {
	const { education } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-20'>
			<p className='rammetto text-2xl'>University</p>

			<motion.div
				className='flex mt-8'
				initial={{ opacity: 0, x: -5 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.5,
					delay: 0.6,
					ease: 'easeInOut',
				}}>
				<div className='mr-6'>{education.icon}</div>
				<div className='w-full xl:w-2/4'>
					<p className='rammetto text-md'>{education.field}</p>
					<p className='text-sm'>{education.institute}</p>
					<p className='roboto-light text-sm mb-2'>
						{education.date}
					</p>
					<p className='roboto-light text-sm'>
						{education.description}
					</p>
				</div>
			</motion.div>
		</div>
	)
}

export default Education
