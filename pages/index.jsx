import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { gameToast } from '../utils'

export default function Home() {
	return (
		<div className="text-white">
			<Head>
				<title>Wrecked Worlds | NFT game on WAX Blockchain</title>
				<meta
					name="description"
					content="Wrecked Worlds | NFT game on WAX Blockchain"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<main>
					<div className="bg-[url('/bg-hero.webp')] bg-[length:105%_105%] bg-top bg-repeat-x">
						<Nav />

						<div className=" bg-gradient-to-b from-transparent to-slate-900">
							<div className="backdrop-blur-lg py-28 h-max xl:h-screen">
								<div className="mx-auto flex-col justify-center items-center">
									<div className="text-center pt-8 sm:pt-14 2xl:pt-48">
										<h3 className="text-sm sm:text-lg w-72 mx-auto sm:w-auto font-normal font-merriweather tracking-wider">
											<span className="italic">
												&quot;Humans, how tragically destructive we are...&quot;
											</span>
										</h3>
										<h2 className="font-merriweather font-bold text-lg 2xl:text-2xl mt-8 xl:mt-12">
											<span>A new chapter of human history,</span>
											<br />
											<span className="block text-orange-300 font-extrabold leading-tighter xl:leading-normal font-cinzel text-6xl sm:text-7xl 2xl:text-8xl py-6 sm:py-5 drop-shadow-xl">
												Wrecked Worlds
											</span>
										</h2>
										<p className="text-base sm:text-base xl:text-lg max-w-3xl mx-auto w-72 lg:w-full">
											An NFT based game with a well-thought-out economic model.
											Craft tools, use resources to mine in the deepest parts of
											the world, get exclusive rewards, and build your own
											mining lands.
										</p>
									</div>

									<div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-12">
										<Link href="https://play.wreckedworlds.com/">
											<a className="btn-filled px-8" /*onClick={gameToast}*/>
												Play Now
											</a>
										</Link>
										<Link href="/#story">
											<a className="btn-colored px-8 shadow-md shadow-orange-300/10">
												Read Story
											</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div
						className="bg-slate-900 pt-24 lg:pt-36 2xl:pt-24 pb-16 px-10"
						id="story"
					>
						<div className="max-w-5xl mx-auto">
							<h2 className="text-center text-5xl font-merriweather">
								Peek into the history
							</h2>
							<p className="text-center pt-5 text-orange-300 text-md italic max-w-2xl mx-auto">
								&quot;Human use, population and technology have reached that
								certain stage where mother Earth no longer accepts our presence
								with silence&quot;
							</p>

							<div className="flex-col py-10">
								<div className="mx-auto pb-10">
									<h3 className="text-2xl font-semibold font-merriweather">
										Year 3055 AD
									</h3>
									<br />
									<p>
										Different nation of the world was fighting for their
										so-called peace. Technology was at its peak and weapons were
										more powerful than ever. The time was 3055 AD, and the world
										was in chaos.
									</p>
									<br />
									<p>
										Nuclear power was always a threat to the world. It was
										forbidden to use this deadly weapon. But every nation was at
										its limit, some of them were on the brink of extinction.
										Then one country used the forbidden power and that triggered
										the most destructive war in the history of mankind.
									</p>
									<br />
									<p>
										As a result of the war, the world was in ruins. The world
										was wrecked. One day in the midst of war a sudden shockwave
										hit the earth. It disrupted the time and space itself.
										Weirdly many things were changed. Most of the Earth&apos;s
										valuable resources got destroyed or more like vanished! Only
										irons and diamonds were left. And the most crucial thing,
										soon after survivors discovered the existence of two new
										elements in different areas.
									</p>
									<br />
									<p>
										Seems like they derived from the use of nuclear and
										radiation of different elements. Survivors named them{' '}
										<span className="highlight">Wradium</span> &{' '}
										<span className="highlight">Wrecktium</span>. After the
										extinction of Radium, Uranium, and many other valuable
										materials, everyone found out that they could use these new
										elements to do everything. They can even rebuild their lost
										technology in the war.
									</p>
									<br />
									<p>
										Survivors started mining for more of those materials. Some
										of them were using these to build new items. Human
										civilization started its journey toward the future once
										again. This was the beginning of the mining era of the
										Wrecked World.
									</p>
									<br />
									<br />
								</div>
							</div>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</div>
	)
}
