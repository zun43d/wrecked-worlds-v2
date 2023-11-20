import Head from 'next/head'
import InfoCard from '../components/InfoCard'
import Footer from '../components/Footer'
import { discord, roadmap, whitepaper } from '../data'
import Nav from '../components/Nav'

export default function Team() {
	const info = [
		{
			imageSrc: '/team/1.jpg',
			name: 'Wrecked Lord',
			discord: 'WreckedLord#0409',
			role: 'Ceo & Founder',
			description:
				'Ceo of wrecked worlds. Game concept, 2d animation, nft designer.',
		},
// 		{
// 			imageSrc: '/team/2.jpg',
// 			name: 'Heathcliff',
// 			discord: 'Heathcliff#4773',
// 			role: 'Community Manager',
// 			description: 'Managing the community and social media.',
// 		},
		{
			imageSrc: '/team/3.jpg',
			name: 'softstepha',
			discord: 'softstepha#5100',
			role: 'Community Manager',
			description:
				'Managing the community and helping to grow the project in every aspect.',
		},
		{
			imageSrc: '/team/4.jpg',
			name: 'Duy Luong',
			discord: 'Mr.D',
			role: 'Blockchain Developer',
			description:
				'Developing the smart contract, assitance with testing, debugging and deployment.',
		},
		{
			imageSrc: '/team/5.jpg',
			name: 'Chaos',
			discord: 'chaos#7563',
			role: 'Web Developer',
			description:
				'Website and game development including maintenance, bug fixes and all sorts of game related  improvements.',
		},
		{
			imageSrc: '/team/6.png',
			name: 'Jimbei',
			discord: 'Jimbei#7044',
			role: 'Designer',
			description:
				'Designing NFTs and helping with valuable ideas and suggestions to improve overall game quality.',
		},
	]

	return (
		<div className="text-white">
			<Head>
				<title>Team Info | Wrecked Worlds</title>
				<meta name="description" content="Team info of Wrecked Worlds" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />

			<main className="mt-48 mb-28">
				<div className="font-merriweather max-w-7xl mx-auto">
					<h2 className="text-center font-bold text-5xl">Our team members</h2>
					<div className="mt-20 px-5 grid grid-cols-1 xl:grid-cols-3 gap-y-11 w-full justify-between justify-items-center items-start">
						{info.map(
							({ imageSrc, name, discord, role, description }, index) => (
								<InfoCard
									key={index}
									imageSrc={imageSrc}
									name={name}
									discord={discord}
									role={role}
									description={description}
								/>
							)
						)}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	)
}
