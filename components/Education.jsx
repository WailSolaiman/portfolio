import { data } from '@/constants'

const Education = () => {
	const { education } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-20'>
			<p className='rammetto text-2xl'>University</p>

			<div className='flex mt-8'>
				<div className='mr-6'>{education.icon}</div>
				<div className='w-full xl:w-2/4'>
					<p className='rammetto text-md'>{education.field}</p>
					<p className='text-sm'>{education.institute}</p>
					<p className='roboto-light text-sm mb-2'>
						{education.date}
					</p>
					<p className='roboto-light text-sm'>
						{education.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Education
