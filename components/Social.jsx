'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { data } from '@/constants'

const Social = () => {
	const { social } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-6'>
			<div className='flex'>
				{social.map((item, index) => (
					<motion.div
						key={index}
						className='mr-5'
						initial={{ opacity: 0, x: -5 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.5,
							delay: 0.2 * index,
							ease: 'easeInOut',
						}}>
						<Link href={item.link} passHref target='_blank'>
							{item.icon}
						</Link>
					</motion.div>
				))}
			</div>
		</div>
	)
}

export default Social
