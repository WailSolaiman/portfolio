'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'
import { FaWordpress } from 'react-icons/fa6'
import { SiWoocommerce } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'

import sstylzImg from '@/public/sstylz.jpg'
import sstylzLogoImg from '@/public/sstylz-logo.png'

const SStylz = () => {
	const router = useRouter()

	const tech = [
		<FaWordpress size={40} />,
		<SiWoocommerce size={60} />,
		<FaHtml5 size={40} />,
		<FaCss3 size={40} />,
		<SiJavascript size={40} />,
	]

	return (
		<div className='min-h-[100vh] bg-gradient-to-b from-stone-900 to-red-900 flex'>
			<div className='container w-11/12 lg:w-10/12 xl:w-8/12 m-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-4'>
					<div>
						<button
							type='button'
							className='mb-8'
							onClick={() => router.back()}>
							<IoArrowBackCircleOutline size={50} />
						</button>

						<motion.div
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
							}}>
							<Image
								src={sstylzLogoImg}
								alt='sstylz'
								width={100}
								className='h-auto'
								priority
							/>
						</motion.div>
						<p className='rammetto my-6'>
							<a
								href='https://sstylz.store/'
								target='_blank'
								className='underline flex'>
								<span className='text-5xl'>SStylz</span>{' '}
								<FiExternalLink size={20} />
							</a>
						</p>
						<motion.div
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: 'easeInOut',
							}}>
							<p className='roboto-bold text-sm mb-4 w-full'>
								SStylz®: Where Fashion Flourishes.
							</p>
							<p className='roboto-light text-sm my-4 w-full'>
								Developed a modern e-commerce website for
								SStylz, a women's clothing store. The site
								features an intuitive design, seamless shopping
								experience, and responsive layout tailored to
								showcase fashion collections effectively.
							</p>
						</motion.div>
						<p className='rammetto text-sm'>Technologies used:</p>
						<motion.div className='flex flex-row justify-start items-center'>
							{tech.map((item, index) => (
								<motion.span
									key={index}
									className='mr-4'
									initial={{ opacity: 0, x: -5 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.5,
										delay: 0.2 * index,
										ease: 'easeInOut',
									}}>
									{item}
								</motion.span>
							))}
						</motion.div>

						<motion.div
							className='w-full'
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.5,
								ease: 'easeInOut',
							}}>
							<Image
								src={sstylzLogoImg}
								alt='sstylz'
								width={300}
								className='h-auto mb-4'
								priority
							/>
						</motion.div>

						<motion.div
							className='w-full'
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: 0.6,
								ease: 'easeInOut',
							}}>
							<p className='roboto-light text-sm'>
								Unveil your unique style with our curated
								collection of unisex fashion essentials. From
								trendy accessories to versatile clothing and
								shoes, we redefine fashion, empowering you to
								express your individuality with confidence.
							</p>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: 'easeInOut',
						}}
						viewport={{ once: true }}
						className='w-full min-h-[350px] sm:min-h-[500px] md:min-h-[600px] 
						rounded-2xl shadow-sm'
						style={{
							backgroundImage: `url(${sstylzImg.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}></motion.div>
				</div>
			</div>
		</div>
	)
}

export default SStylz
