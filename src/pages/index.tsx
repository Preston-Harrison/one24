import { CustomHead } from "../components/CustomHead";
import { Header } from "../components/Header";
import { HomeTile } from "../components/HomeTile";
import { Video } from "../components/Video";

const Home = () => {
	return (
		<>
			<CustomHead />
			<main className="w-2/3 mx-auto">
				<Header />
				<div>
					<Video />
					<div className="flex justify-between my-10 gap-8 max-lg:flex-col">
						<HomeTile href="/visual">
							<div>
								<h2 className="text-2xl font-bold tracking-widest mt-2 mb-1">
									Visual
								</h2>
								<div>
									We are surrounded by beauty yet sometimes miss the fleeting
									moments all around us. Sometimes taking a moment to see enables
									us to be present to the beauty all around us.
								</div>
							</div>
						</HomeTile>
						<HomeTile href="/music">
							<div>
								<h2 className="text-2xl font-bold tracking-widest mt-2 mb-1">
									Music
								</h2>
								<div>
									Perhaps the most visceral of the senses, the vibrations of music
									resonate at our most basic cellular level. Listen.
								</div>
							</div>
						</HomeTile>
						<HomeTile href="/word">
							<div>
								<h2 className="text-2xl font-bold tracking-widest mt-2 mb-1">
									Word
								</h2>
								<div>
									The written and spoken word differentiates us from other
									mammals, yet we sometimes fail to appreciate their power.
								</div>
							</div>
						</HomeTile>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
