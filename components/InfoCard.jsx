import Image from 'next/image'

export default function InfoCard({
	imageSrc,
	name,
	discord,
	role,
	description,
}) {
	return (
		<div className="max-w-sm bg-slate-800 rounded-lg overflow-hidden">
			<Image
				src={imageSrc}
				width="400"
				height="465.573772"
				alt={name}
				className="w-full"
			/>
			<div className="pt-5 pb-7 px-5 text-center">
				<h3 className="font-semibold text-xl text-center pb-1">{name}</h3>
				<p className="text-center text-gray-400 text-sm pb-2">{discord}</p>
				<p className="text-center text-gray-400 text-sm pb-3">{role}</p>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	)
}
