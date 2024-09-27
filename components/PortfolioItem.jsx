'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const PortfolioItem = ({ image, slug = 'sstylz' }) => {
	const router = useRouter()

	const handleClick = () => {
		router.push(`/portfolio/${slug}`)
	}

	return (
		<motion.div
			layoutId={slug} // for smooth transition
			initial={{ scale: 1 }}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={handleClick}
			className='w-[300px] h-[300px]'
			style={{ cursor: 'pointer' }}>
			<Image src={image} alt={slug} placeholder='blur' priority />
		</motion.div>
	)
}

export default PortfolioItem
