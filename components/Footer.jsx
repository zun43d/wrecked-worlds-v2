import Link from 'next/link'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { discord, twitter } from '../data'

export default function Footer() {
	return (
		<footer className="bg-slate-900">
			<div className="max-w-6xl mx-auto mb-8 lg:mb-10">
				<div className="mx-5 xl:mx-0 py-10 px-8 sm:px-10 bg-slate-800 rounded-xl flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center">
					<div>
						<div className="flex justify-start items-center gap-2 pb-6 lg:pb-4">
							<div className="rounded-full bg-[#7289d9] p-2">
								<Link href={discord}>
									<a target="_blank">
										<FaDiscord size="20" color="white" />
									</a>
								</Link>
							</div>
							<div className="rounded-full bg-[#00acee] p-2">
								<Link href={twitter}>
									<a target="_blank">
										<FaTwitter size="20" color="white" />
									</a>
								</Link>
							</div>
						</div>
						<div className="pt-2 pb-8 lg:pb-4">
							<p className="font-bold text-sm text-white">WRECKEDWORLDS LTD</p>
						</div>
						<div className="flex gap-8 items-center justify-start pb-8 lg:pb-4">
							<div>
								<p className="text-sm text-slate-300">Founder</p>
								<p className="font-bold text-sm text-white">KHAN, Md Raihan</p>
							</div>
							<div>
								<p className="text-sm text-slate-300">Registration No</p>
								<p className="font-bold text-sm text-white">14494938</p>
							</div>
						</div>
						<div>
							<p className="text-sm text-slate-300">Registered Address</p>
							<p className="font-bold text-sm text-white">
								London, United Kingdom, WC2H 9JQ
							</p>
						</div>
					</div>
					<div className="text-left lg:text-right pb-8 lg:pb-0">
						<p className="font-cinzel text-2xl sm:text-3xl lg:text-4xl">
							Wrecked Worlds
						</p>
						<p className="text-sm sm:text-base text-white/50">
							© 2022. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
