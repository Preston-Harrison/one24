import Head from 'next/head';
import React from 'react'
import { ArtistColumn } from '../components/ArtistColumn';
import { Header } from '../components/Header';
import { Video } from '../components/Video';
import { data } from '../data';

const Visual = () => {
	return (
		<>
			<Head>
				<title>One/24 - Visual</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-2/3 mx-auto">
				<Header />
				<div>
					<div className='text-xl italic flex justify-center mb-10'>
						If the eyes are the windows to the soul. The soul is nourished by what the eyes behold.
					</div>
					<Video />
					<div className='grid grid-cols-4 mt-10'>
						<ArtistColumn title="Photography" artists={data.visual.photography} />
						<ArtistColumn title="Video and Film" artists={data.visual.videoAndFilm} />
						<ArtistColumn title="Painting and Sculpture" artists={data.visual.paintingAndSculpture} />
						<div className='border p-4'>
							Featured Artist, notes from editors, etc...
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default Visual;