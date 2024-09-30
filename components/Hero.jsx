import { data } from '@/constants'

const Hero = () => {
	const { hero } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-20'>
			<div className='grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-2 lg:gap-16'>
				<div>
					<p className='rammetto text-3xl lg:text-5xl'>
						{hero.firstname} <br />
						{hero.lastname}{' '}
					</p>
				</div>
				<div>
					<p className='rammetto w-full xl:w-1/2 text-xl mt-3 lg:mt-0'>
						{hero.about}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
