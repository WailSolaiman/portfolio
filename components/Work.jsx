import { data } from '@/constants'

const Work = () => {
	const { experience } = data

	return (
		<div className='container w-3/4 mx-auto mt-20'>
			<p className='rammetto text-2xl'>Work Experience</p>
			{experience.map((item, index) => (
				<div key={index} className='flex mt-8'>
					<div className='mr-6'>{item.icon}</div>
					<div className='w-full xl:w-2/4'>
						<p className='rammetto text-md'>
							{item.position} : {item.company}
						</p>
						<p className='roboto-light text-sm mb-2'>{item.date}</p>
						<p className='roboto-light text-sm'>
							{item.description}
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Work
