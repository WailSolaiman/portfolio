'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

const PortfolioItem = ({ image, name = 'sstylz', dev = 'React' }) => {
	return (
		<motion.div
			className='w-[125px] h-[125px] md:w-[200px] md:h-[200px] mb-6'
			style={{ cursor: 'pointer' }}
			initial={{ opacity: 0, x: -5 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.1 }}
			transition={{
				type: 'spring',
				stiffness: 500,
				damping: 10,
			}}>
			<Link href={`/portfolio/${name}`}>
				<Image
					src={image}
					alt={name}
					placeholder='blur'
					priority
					className='rounded-lg'
				/>
				<p className='rammetto text-xs text-center mt-2'>{dev}</p>
			</Link>
		</motion.div>
	)
}

export default PortfolioItem
