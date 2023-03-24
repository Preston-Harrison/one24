import { ArtistColumn } from "../components/ArtistColumn";
import { CustomHead } from "../components/CustomHead";
import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { data } from "../data";

const Word = () => {
	return (
		<>
			<CustomHead />
			<main className="w-2/3 mx-auto">
				<Header />
				<div>
					<div className="text-xl italic flex justify-center mb-10">
						Words have the power to shape our world and ourselves.
					</div>
					<Video />
					<div className="grid lg:grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 mt-10">
						<ArtistColumn title="Literature" artists={data.word.literature} />
						<ArtistColumn title="Points of View" artists={data.word.pointsOfView} />
						<ArtistColumn title="Nourishment" artists={data.word.nourishment} />
						<div className="border p-4">
							Featured Artist, notes from editors, etc...
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Word;
