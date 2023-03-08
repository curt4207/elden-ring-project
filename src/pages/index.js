// import styles from '../styles/Home.module.css';
export default function Home() {

	const callAPI = async () => {
    try {
      const res = await fetch(`https://eldenring.fanapis.com/api/ammos`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

	return (
		<div >
			<main >
				<button onClick={callAPI}>Make API call</button>
			</main>
		</div>
	);
}