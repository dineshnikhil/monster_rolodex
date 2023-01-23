import { Component } from 'react';
import './App.css';

class App1 extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state.monsters);
					}
				);
			});
	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<input
					className="search_box"
					type="search"
					placeholder="search monsters"
					onChange={(event) => {
						console.log(event.target.value);
					}}
				/>
				{this.state.monsters.map((monster) => {
					return <h1 key={monster.id}>{monster.name}</h1>;
				})}
			</div>
		);
	}
}

export default App1;
