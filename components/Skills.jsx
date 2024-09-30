import { data } from '@/constants'

const Skills = () => {
	const { skills } = data

	return (
		<div className='container w-3/4 mx-auto mt-20'>
			<p className='rammetto text-2xl'>Skills</p>
			<div className='flex mt-4'>
				{skills.map((item, index) => (
					<div
						key={index}
						className='flex flex-col justify-center items-center mr-6'>
						<span className='mb-2'>{item.icon}</span>
						<span className='text-center text-xs'>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Skills
