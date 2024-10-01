'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

const PortfolioItem = ({ image, name = 'sstylz', index = 0 }) => {
	return (
		<motion.div
			className='w-[150px] h-[150px] md:w-[200px] md:h-[200px]'
			style={{ cursor: 'pointer' }}
			initial={{ opacity: 0, x: -5 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.5,
				delay: 0.2 * index,
				ease: 'easeInOut',
			}}>
			<Link href={`/portfolio/${name}`}>
				<Image src={image} alt={name} placeholder='blur' priority />
			</Link>
		</motion.div>
	)
}

export default PortfolioItem
