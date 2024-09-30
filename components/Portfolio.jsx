import PortfolioItem from './PortfolioItem'

import { data } from '@/constants'

const Portfolio = () => {
	const { portfolio } = data
	return (
		<div className='container w-3/4 mx-auto mt-20'>
			<p className='rammetto text-2xl mb-4'>Recent Work</p>
			<div className='flex flex-row flex-wrap gap-6 '>
				{portfolio.map((item, index) => (
					<PortfolioItem
						key={index}
						image={item.image}
						name={item.name}
					/>
				))}
			</div>
		</div>
	)
}

export default Portfolio
