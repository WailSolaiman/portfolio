import Link from 'next/link'

import { data } from '@/constants'

const Social = () => {
	const { social } = data

	return (
		<div className='container w-10/12 xl:w-8/12 m-auto mt-6'>
			<div className='flex'>
				{social.map((item, index) => (
					<div key={index} className='mr-5'>
						<Link href={item.link} passHref target='_blank'>
							{item.icon}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Social
