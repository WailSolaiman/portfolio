'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { FaBackward } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import { FaWordpress } from 'react-icons/fa6'
import { SiWoocommerce } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'

import sstylzImg from '@/public/sstylz.jpg'

const SStylz = () => {
	const router = useRouter()
	return (
		<div className='min-h-[100vh] bg-gradient-to-b from-stone-900 to-red-900'>
			<div className='container w-3/4 xl:w-2/4 mx-auto pt-10'>
				<button
					type='button'
					className='mb-8'
					onClick={() => router.back()}>
					<FaBackward />
				</button>
				<p>Logo</p>
				<p className='rammetto text-3xl mb-4'>
					<a href='#' target='_blank' className='underline flex'>
						SStylz <FiExternalLink size={20} />
					</a>
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div>
						<p className='roboto-light text-sm mb-4 w-full xl:w-1/2'>
							Developed a modern e-commerce website for SStylz.
						</p>
						<p className='rammetto text-sm'>Technologies used:</p>

						<div className='flex flex-row justify-start items-center mr-6'>
							<span className='mr-4'>
								<FaWordpress size={40} />
							</span>
							<span className='mr-4'>
								<SiWoocommerce size={70} />
							</span>
							<span className='mr-4'>
								<FaHtml5 size={40} />
							</span>
							<span className='mr-4'>
								<FaCss3 size={40} />
							</span>
							<span className='mr-4'>
								<SiJavascript size={40} />
							</span>
						</div>
					</div>
					<div className='roboto-light text-sm w-full'>
						<p className='mb-4'>
							Developed a modern e-commerce website for SStylz, a
							women's clothing store. The site features an
							intuitive design, seamless shopping experience, and
							responsive layout tailored to showcase fashion
							collections effectively.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
						</p>
					</div>
				</div>
				<div className='flex justify-center pt-6'>
					<Image
						src={sstylzImg}
						alt='sstylz'
						width={600}
						height='auto'
						priority
					/>
				</div>
			</div>
		</div>
	)
}

export default SStylz
