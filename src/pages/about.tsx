import { CustomHead } from '../components/CustomHead';
import { Header } from '../components/Header';

const About = () => {
	return (
		<>
			<CustomHead />
			<main className="w-2/3 mx-auto">
				<Header />
				<div className='mx-auto w-1/2 text-center'>
					<div className="text-4xl font-bold mb-2">
						What is One24.org?
					</div>
					<div className='text-lg'>
						We believe in taking one brief hour out of our days to reflect, meditate, read, 
						be present to the arts and music, allows us to be more mindful of ourselves and others.  
						<br /><br />
						Foundationally, we believe that the Arts and Humanities enable us to be fully human.
					</div>
				</div>
				<div className='mx-auto w-1/2 mt-10 text-center'>
					<div className="text-4xl font-bold mb-2">
						About us
					</div>
					<div className='text-lg'>
						An informal group of people interested in the arts, humanities, film, and literature
						wishing to curate and share ideas and content with like-minded people.
					</div>
				</div>
			</main>
		</>
	);
}

export default About;