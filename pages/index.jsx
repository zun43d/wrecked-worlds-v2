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
				<main className="snap-y snap-mandatory">
					<div className="snap-start">
						<Nav />

						<div className=" ">
							<div className="max-w-6xl mx-auto h-[90vh] md:h-screen flex flex-col justify-evenly items-center">
								{/* <div className="mx-auto flex-col justify-between items-start"> */}
								{/* <div className="text-left pt-8 sm:pt-14 2xl:pt-4"> */}
								<h2 className="font-orbitron font-bold text-xl md:text-3xl lg:text-4xl mx-auto w-80 md:w-1/2 px-4">
									<span>Welcome to</span>
									<br />
									<span className="block text-center text-purple-300 font-extrabold font-orbitron text-4xl md:text-6xl 2xl:text-7xl md:py-5">
										WRECKED WORLDS
									</span>
									<span className="font-orbitron text-right block">v2.0</span>
								</h2>
								<div>
									<hr className="border-t-2 border-purple-400 w-32 md:w-72 mx-auto my-4" />
									<p className="text-base text-center sm:text-base xl:text-lg max-w-3xl mx-auto px-10 w-full">
										Unleash the power of automated mining, amass riches
										effortlessly. Conquer challenges with extra bounties, claim
										incredible rewards. Elevate your gameplay with unique NFT
										designs, crafting your digital identity.
									</p>
									<hr className="border-t-2 border-purple-400 w-16 md:w-48 mx-auto my-4" />
								</div>
								{/* </div> */}

								{/* <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-12">
										<Link href="https://play.wreckedworlds.com/">
											<a className="btn-filled px-8">
												Play Now
											</a>
										</Link>
										<Link href="/#story">
											<a className="btn-colored px-8 shadow-md shadow-orange-300/10">
												Read Story
											</a>
										</Link>
									</div> */}
								{/* </div> */}
							</div>
						</div>
					</div>

					<div
						className="bg-black pt-10 lg:pt-36 2xl:pt-24 pb-16 px-10 snap-center"
						id="story"
					>
						<div className="max-w-5xl mx-auto">
							<h2 className="text-center text-5xl font-bold font-orbitron text-purple-300">
								Gameplay
							</h2>
							<p className="text-center text-base py-6">
								Hold onto your helmets, Wrecked Worlds aficionados! The 2.0
								update is not just about gameplay — it&apos;s about showering
								our valiant players with rewards that will send shockwaves
								through the gaming cosmos. Get ready for an exhilarating ride as
								we unveil two groundbreaking passes that will elevate your
								Wrecked Worlds experience to unprecedented heights!
							</p>

							<div className="flex-col py-10">
								<div className="flex justify-center items-center mb-8 h-">
									<Image
										className="undrag"
										draggable="false"
										src="/bounty.png"
										alt="Bounty Cards"
										width={800}
										height={669}
									/>
								</div>
								<div className="mx-auto pb-10">
									<h2 className="text-2xl font-semibold font-orbitron">
										Bounty NFT Bonanza:
									</h2>
									<br />
									<p>
										Embark on the epic journey to claim your stake in the second
										market feast! Bounty NFTs are your ticket to the exclusive
										club, granting a juicy 0.01% royalty for each NFT. But
										that&apos;s not all—holding more NFTs means more liquid Wax
										rewards pouring in from the second market fee. The cherry on
										top? We&apos;re unleashing 1500 of these bad boys for FREE
										minting. It&apos;s time to stake your claim and reap the
										rewards like never before!
									</p>
									<br />
									<div className="flex justify-center items-center mb-8">
										<Image
											className="undrag"
											draggable="false"
											src="/retro.png"
											alt="Retro Pass"
											width={508.745247}
											height={669}
										/>
									</div>
									<h2 className="text-2xl font-semibold font-orbitron">
										Retro Pass Revolution:
									</h2>
									<br />
									<p>
										For the trailblazers who stood with us in Wrecked Worlds v
										1.0, the Retro Pass is your golden ticket to VIP status. The
										top 50 investors, who fearlessly invested around 500 Wax,
										will be treated to free mints, a dazzling 0.5% slice of the
										second market royalty, and a Level 1 whitelist for future
										sales. But wait, there&apos;s more—a whopping 50% discount
										on each purchase! It&apos;s not just a pass; it&apos;s a
										legacy.
									</p>
									<br />
									<div className="flex justify-center items-center mb-8">
										<Image
											className="undrag"
											draggable="false"
											src="/premium.png"
											alt="Premium Pass"
											width={508.745247}
											height={669}
										/>
									</div>
									<h2 className="text-2xl font-semibold font-orbitron">
										Premium Pass Prestige:
									</h2>
									<br />
									<p>
										For those hungry for the ultimate VIP treatment, we present
										the Premium Pass—a coveted key to the elite realm. Only 200
										passes will be sold, each unlocking a 0.3% royalty share,
										and a Level 1 whitelist for future sales. Join the ranks of
										the privileged few who command the finest perks in Wrecked
										Worlds.
									</p>
									<br />
									<br />
									<p>
										The 2.0 update is not just an evolution; it&apos;s a
										revolution in rewards. Brace yourselves for a tsunami of
										excitement, exclusive perks, and unparalleled adventure as
										we unleash these passes into the Wrecked Worlds universe.
										Are you ready to seize the future and claim your place among
										the gaming elite? The countdown begins now!
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
			<hr className="border-purple-400 border-t-4" />
		</div>
	)
}
