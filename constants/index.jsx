import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { FaHtml5 } from 'react-icons/fa'
import { FaContao } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'

import sstylzImg from '@/public/sstylz.jpg'
import peligrosoImg from '@/public/peligroso.jpg'
import onixImg from '@/public/Onix.jpg'
import restauraImg from '@/public/Restaura.jpg'
import echoRealmImg from '@/public/EchoRealm.jpg'
import metaverseImg from '@/public/metaverse.jpg'

export const data = {
	hero: {
		firstname: 'Wail',
		lastname: 'Solaiman',
		about: "I'm a freelance front-end developer focused on making the web more creative, accessible, and engaging.",
	},
	social: [
		{
			icon: <FaGithub size={30} />,
			link: 'https://github.com/WailSolaiman',
		},
		{
			icon: <FaLinkedin size={30} />,
			link: 'https://www.linkedin.com/in/wail-solaiman/',
		},
		{
			icon: <TfiEmail size={30} />,
			link: 'mailto:me@wailsolaiman.com',
		},
	],
	portfolio: [
		{
			name: 'onix',
			image: onixImg,
		},
		{
			name: 'restaura',
			image: restauraImg,
		},
		{
			name: 'echo-realm',
			image: echoRealmImg,
		},
		{
			name: 'metaverse-world',
			image: metaverseImg,
		},
		{
			name: 'sstylz',
			image: sstylzImg,
		},
		{
			name: 'peligroso',
			image: peligrosoImg,
		},
	],
	experience: [
		{
			icon: <FaReact size={30} />,
			position: 'Front-end Web Developer',
			company: 'Freelancer',
			date: '2022 - Present',
			description:
				'Freelance Web Developer specializing in front-end UI design. I collaborate with diverse clients and small agencies to create innovative, engaging websites, leveraging the latest design and development technologies to achieve exceptional results.',
		},
		{
			icon: <FaContao size={30} />,
			position: 'Web Developer',
			company: 'Vicon Web Business, Germany',
			date: 'July 2018 - September 2021',
			description:
				'Freelance Web Developer specializing in front-end UI design. I collaborate with diverse clients and small agencies to create innovative, engaging websites, leveraging the latest design and development technologies to achieve exceptional results.',
		},
		{
			icon: <FaWordpress size={30} />,
			position: 'Web Developer',
			company: 'Anders Björk GmbH, Germany',
			date: 'February 2017 - May 2018',
			description:
				"I specialize in creating exceptional websites for clients of Anders Björk Company, using the WordPress CMS. I have extensive experience in monitoring the performance of live websites, installing plugins, and providing maintenance and support for the company's clients websites.",
		},
		{
			icon: <FaHtml5 size={30} />,
			position: 'Junior Front-end Web Developer',
			company: 'Parrot Media, Germany',
			date: 'September 2013 - September 2016',
			description:
				'I began my professional career as a junior front-end web developer at Parrot Media, where I gained valuable experience in creating and developing websites using core web languages such as HTML and CSS. Additionally, I have experience working with WordPress CMS, Vanilla JavaScript, and PHP.',
		},
	],
	education: {
		icon: <FaUserGraduate size={30} />,
		field: 'B.Eng. in Computer Science / Software Engineering',
		institute: 'Technical University of Lübeck',
		date: '2008 - 2013',
		description:
			'Comprehensive education in computer science with a focus on software development and engineering principles. Proficient in programming languages including Java and C#. Experienced in database design and management, web technologies, and software engineering practices. Familiar with various development tools and frameworks.',
	},
	skills: [
		{
			name: 'React',
			icon: <FaReact size={60} />,
		},
		{
			name: 'WordPress',
			icon: <FaWordpress size={60} />,
		},
	],
}
