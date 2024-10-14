'use client'

import { motion } from 'framer-motion'
import PortfolioItem from './PortfolioItem'

import { data } from '@/constants'

const Portfolio = () => {
	const { portfolio } = data
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
				<p className='rammetto text-2xl mb-4'>Recent Work</p>
			</motion.div>
			<div className='flex flex-row flex-wrap gap-6 '>
				{portfolio.map((item, index) => (
					<PortfolioItem
						key={index}
						image={item.image}
						name={item.name}
						dev={item.dev}
						index={index}
					/>
				))}
				<div className='w-[125px] h-[125px] md:w-[200px] md:h-[200px] mb-6 hidden xl:flex justify-center items-center'>
					<p className='rammetto text-xs'>Loading...</p>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
