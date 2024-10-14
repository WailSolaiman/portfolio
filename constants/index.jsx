import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { TfiEmail } from 'react-icons/tfi'
import { TbFileCv } from 'react-icons/tb'
import { FaHtml5 } from 'react-icons/fa'
import { FaContao } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { SiWoo } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa6'
import { SiJavascript } from 'react-icons/si'
import { RiNextjsLine } from 'react-icons/ri'
import { FaUserGraduate } from 'react-icons/fa'

import sstylzImg from '@/public/sstylz.jpg'
import peligrosoImg from '@/public/peligroso.jpg'
import onixImg from '@/public/Onix.jpg'
import restauraImg from '@/public/Restaura.jpg'
import echoRealmImg from '@/public/EchoRealm.jpg'
import metaverseImg from '@/public/metaverse.jpg'
import erxlebenImg from '@/public/erxleben.jpg'
import dorenburgImg from '@/public/dorenburg.jpg'

export const data = {
	hero: {
		firstname: 'Wail',
		lastname: 'Solaiman',
		about: 'As a freelance front-end developer, I create engaging and accessible web experiences.',
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
		{
			icon: <TbFileCv size={30} />,
			link: 'https://drive.google.com/file/d/1uznmOUqd73UUaao9y5jdpdXRFlZUMEQ_/view?usp=sharing',
		},
	],
	portfolio: [
		{
			name: 'onix',
			image: onixImg,
			dev: 'React',
		},
		{
			name: 'restaura',
			image: restauraImg,
			dev: 'React',
		},
		{
			name: 'echorealm',
			image: echoRealmImg,
			dev: 'React',
		},
		{
			name: 'metaverse',
			image: metaverseImg,
			dev: 'React',
		},
		{
			name: 'sstylz',
			image: sstylzImg,
			dev: 'WooCommerce',
		},
		{
			name: 'peligroso',
			image: peligrosoImg,
			dev: 'WooCommerce',
		},
		{
			name: 'erxleben',
			image: erxlebenImg,
			dev: 'Contao',
		},
		{
			name: 'dorenburg',
			image: dorenburgImg,
			dev: 'WordPress',
		},
	],
	experience: [
		{
			icon: <FaReact size={30} />,
			position: 'Front-End Developer',
			company: 'Freelance',
			date: '2022 - Present',
			description:
				'Front-End Developer specializing in React, Next.js, and React Native. I build responsive websites and mobile apps with a focus on intuitive UI and performance, delivering engaging digital experiences.',
		},
		{
			icon: <FaContao size={30} />,
			position: 'Front-End Developer',
			company: 'Vicon Web Business, Germany',
			date: 'July 2018 - September 2021',
			description:
				'Specialized in Contao CMS, focusing on developing themes and templates, managing back-end integration, troubleshooting content issues, and providing maintenance and support.',
		},
		{
			icon: <FaWordpress size={30} />,
			position: 'Front-End Developer',
			company: 'Anders Björk GmbH, Germany',
			date: 'February 2017 - May 2018',
			description:
				'Specialized in WordPress, focusing on developing themes and plugins, managing back-end integration, installing required plugins, troubleshooting content issues, monitoring website performance, and providing maintenance and support.',
		},
		{
			icon: <FaHtml5 size={30} />,
			position: 'Junior Front-End Developer',
			company: 'Parrot Media, Germany',
			date: 'September 2013 - September 2016',
			description:
				'Began my career as a junior front-end developer, gaining experience in website creation using HTML and CSS, along with WordPress, Vanilla JavaScript, and PHP.',
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
			name: 'HTML5',
			icon: <FaHtml5 size={60} />,
		},
		{
			name: 'CSS3',
			icon: <FaCss3 size={60} />,
		},
		{
			name: 'JavaScript',
			icon: <SiJavascript size={60} />,
		},
		{
			name: 'React',
			icon: <FaReact size={60} />,
		},
		{
			name: 'Next.js',
			icon: <RiNextjsLine size={60} />,
		},
		{
			name: 'Contao',
			icon: <FaContao size={60} />,
		},
		{
			name: 'WordPress',
			icon: <FaWordpress size={60} />,
		},
		{
			name: 'Woo',
			icon: <SiWoo size={60} />,
		},
	],
}
