import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="hero">
				<h1>
					Largest <br /> Crypto Marketplace
				</h1>
				<p>
					welcome to world's largest cryptocurrency marketplace. Sign up to
					explore more about cryptos.
				</p>
				<form>
					<input type="text" placeholder="Search crypto.." />
					<button>Search</button>
				</form>
			</div>
		</div>
	);
};

export default Home;
