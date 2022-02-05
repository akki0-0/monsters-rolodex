import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // componentDidMount is a component lifecycle method which will run the code as soon as our component is inserted in our page.

  // json() It returns a promise which parse the body text as JSON. Simply saying it converts the text into JSON format so that JS can read and understand it.

  //fetch() - API for fetching data using JavaScript promises.

  //Here we are fetching the data from the URL then, we get a response and we conver it into json so that our JS can understand and use then, we simply set our monsters object the values from URL.

  //A better way of doing this is using Axios.

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        {/*By passing the state of monsters as props to CardList component, we make sure that our App component does not need to worry about the cards...Instead that responsibilty has been passed to CardList component.*/}

        {/*Passing the filtered monsters as we want to render only those monsters in our page which includes our searched text. */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
