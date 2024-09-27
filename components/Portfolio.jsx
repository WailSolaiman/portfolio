import PortfolioItem from './PortfolioItem'

import SStylz from '../public/sstylz.jpg'

const Portfolio = () => {
	return (
		<div className='container w-3/4 mx-auto mt-20'>
			<p className='rammetto text-2xl'>Recent Work</p>
			<PortfolioItem image={SStylz} slug={'sstylz'} />
		</div>
	)
}

export default Portfolio
