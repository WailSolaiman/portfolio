import { ViewTransitions } from 'next-view-transitions'

import localFont from 'next/font/local'
import './globals.css'

const rammetto = localFont({
	src: './fonts/Rammetto.woff',
	variable: '--font-rammetto',
	weight: '900',
})

const roboto = localFont({
	variable: '--font-roboto',
	src: [
		{
			path: './fonts/Roboto-Thin.woff',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/Roboto-Light.woff',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/Roboto-Regular.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Roboto-Bold.woff',
			weight: '700',
			style: 'normal',
		},
	],
})

export const metadata = {
	title: 'Wail Solaiman',
	description: 'Wail Solaiman Web Developer Website',
}

export default function RootLayout({ children }) {
	return (
		<ViewTransitions>
			<html lang='en'>
				<body
					className={`${rammetto.variable} ${roboto.variable} antialiased`}>
					{children}
				</body>
			</html>
		</ViewTransitions>
	)
}
