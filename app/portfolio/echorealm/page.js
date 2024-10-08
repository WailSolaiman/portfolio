'use client'

import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import NextLink from 'next/link'
import Image from 'next/image'

import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { FiExternalLink } from 'react-icons/fi'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { FaGithub } from 'react-icons/fa6'

import EchoRealmImg from '@/public/EchoRealm.jpg'
import EchoRealmLogoImg from '@/public/echorealmImg-logo.png'

const EchoRealm = () => {
	const tech = [
		<FaReact size={40} />,
		<RiTailwindCssFill size={40} />,
		<TbBrandFramerMotion size={40} />,
		<FaHtml5 size={40} />,
		<FaCss3 size={40} />,
	]

	return (
		<div className='min-h-[100vh] bg-[#121212] text-white flex'>
			<div className='container w-11/12 lg:w-10/12 xl:w-8/12 m-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-4'>
					<div>
						<div className='mb-4'>
							<Link href={'/'}>
								<IoArrowBackCircleOutline size={50} />
							</Link>
						</div>

						<motion.div
							initial={{ opacity: 0, y: -5 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								ease: 'easeInOut',
							}}
							className='flex items-center'>
							<Image
								src={EchoRealmLogoImg}
								alt='EchoRealm'
								width={40}
								className='h-auto'
								priority
							/>
							<NextLink
								href='https://github.com/WailSolaiman/echorealm'
								passHref
								target='_blank'>
								<FaGithub size={20} className='mx-4' />
							</NextLink>
						</motion.div>
						<p className='rammetto my-6'>
							<a
								href='https://echorealm-tau.vercel.app/'
								target='_blank'
								className='underline flex'>
								<span className='text-5xl'>Echorealm</span>{' '}
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
								Echo Your Reality.
							</p>
							<p className='roboto-light text-sm my-4 w-full'>
								The EchoRealm platform was built using React 18
								for interactive user interfaces, with
								TailwindCSS powering the styling. Vite was
								employed for fast development and builds, while
								ESLint ensured code quality throughout the
								project.
							</p>
						</motion.div>
						<p className='rammetto text-sm mb-4'>
							Technologies used:
						</p>
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
								src={EchoRealmLogoImg}
								alt='EchoRealm'
								width={150}
								className='h-auto my-4'
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
								EchoRealm transforms your imagination into
								immersive virtual experiences. With powerful yet
								intuitive tools, seamless collaboration, and
								stunning realism, creating interactive worlds
								has never been easier. Whether for
								entertainment, education, or business, EchoRealm
								elevates your vision and connects you to
								limitless possibilities.
							</p>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.3,
							delay: 0.2,
							ease: 'easeInOut',
						}}
						viewport={{ once: true }}
						className='w-full min-h-[350px] sm:min-h-[500px] md:min-h-[600px] 
						rounded-2xl border border-orange-700 shadow-orange-400'
						style={{
							backgroundImage: `url(${EchoRealmImg.src})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}></motion.div>
				</div>
			</div>
		</div>
	)
}

export default EchoRealm
