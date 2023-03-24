import { ArtistColumn } from '../components/ArtistColumn';
import { CustomHead } from '../components/CustomHead';
import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { data } from '../data';

const Music = () => {
	return (
		<>
			<CustomHead />
			<main className="w-2/3 mx-auto">
				<Header />
				<div>
					<div className='text-xl italic flex justify-center mb-10'>
						The vibrations of music align with our own frequencies and create visceral connections with the world and with others.
					</div>
					<Video />
					<div className='grid lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10'>
						<ArtistColumn title="Forgotten Classics" artists={data.music.forgottenClassics} />
						<ArtistColumn title="Overlooked Gems" artists={data.music.overlookedGems} />
						<ArtistColumn title="Emerging Artists" artists={data.music.emergingArtists} />
						<div className='border p-4'>
							Featured Artist, notes from editors, etc...
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Music;