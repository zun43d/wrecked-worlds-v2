import Image from 'next/image'
import cogoToast from 'cogo-toast'

export const gameToast = () =>
	cogoToast.info('We are doing our best to release the game ASAP!', {
		bar: { color: '#f59e0b' },
		hideAfter: 5,
		renderIcon: () => (
			<Image src="/logo-sm.png" width={50} height={50} alt="Wrecked Worlds" />
		),
		heading: 'Game is coming soon...',
	})
