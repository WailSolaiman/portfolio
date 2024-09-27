import Hero from '@/components/Hero'
import Social from '@/components/Social'
import Portfolio from '@/components/Portfolio'
import Work from '@/components/Work'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default function Home() {
	return (
		<div>
			<Hero />
			<Social />
			<Portfolio />
			<Skills />
			<Work />
			<Education />
			<Footer />
		</div>
	)
}
