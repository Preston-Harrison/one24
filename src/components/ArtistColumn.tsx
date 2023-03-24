import Link from 'next/link';
import React from 'react';

export type ArtistDetails = {
	image?: string;
	name: string;
	href: string;
}

type Props = {
	title: string;
	artists: ArtistDetails[];
}

export const ArtistColumn: React.FC<Props> = (props) => {
	const { title, artists } = props;

	return (
		<div>
			<div className='text-2xl font-bold max-lg:text-center'>{title}</div>
			<div className='flex flex-col gap-2 my-4'>
				{artists.map((artist) => (
					<Link href={artist.href} className="block border-b border-transparent hover:border-white w-max max-lg:mx-auto">
						{artist.name}
					</Link>
				))}
			</div>
		</div>
	);
}
