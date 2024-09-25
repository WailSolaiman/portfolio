import React from 'react'

const Hero = () => {
	return (
		<div className='container w-3/4 mx-auto mt-10'>
			<div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'>
				<div>
					<p className='rammetto text-3xl'>
						Wail <br />
						Solaiman{' '}
					</p>
				</div>
				<div>
					<p className='rammetto text-md mt-3 lg:mt-0'>
						I'm a freelance front-end developer who wants to help
						make the internet a more creative, accessible, and
						better place.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
