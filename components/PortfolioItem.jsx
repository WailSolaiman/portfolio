import Image from 'next/image'
import { Link } from 'next-view-transitions'
import { motion } from 'framer-motion'

const PortfolioItem = ({ image, name = 'sstylz' }) => {
	return (
		<div className='w-[300px] h-[300px]' style={{ cursor: 'pointer' }}>
			<Link href={`/portfolio/${name}`}>
				<Image src={image} alt={name} placeholder='blur' priority />
			</Link>
		</div>
	)
}

export default PortfolioItem
