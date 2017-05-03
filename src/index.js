import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import {Height} from 'react-height';
import {Collapse} from 'react-collapse';
import Recipe from './components/recipe';
import AddRecipe from './components/addrecipe';
import EditRecipe from './components/editrecipe';
import Modal from './components/modal';

var localStorageKey = "_ssheilah_recipes";

class App extends Component {
  constructor() {
    super();
    
    const recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [
      {title: 'Quiche', ingredients: ['eggs', 'cheese', 'crust']},
      {title: 'Salad', ingredients: ['lettuce', 'pears', 'poppyseeds']},
      {title: 'Danish Puffs', ingredients: ['pastry', 'cheese', 'jam']}
  ];

    this.state = {
      isOpened: false,
      recipes: recipes
    }
  };

  componentDidMount() { 
     localStorage.setItem(localStorageKey, JSON.stringify(this.state.recipes));
  }

  deleteThisRecipe(index) {
    var arrayR = JSON.parse(localStorage.getItem(localStorageKey));
    this.setState({ recipes: this.state.recipes.filter((_, i) => i !== index) });
    arrayR.splice(index, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(arrayR));
  }

 render() {
   const {
      isOpened
    } = this.state;

    
    var recipeElements = [];
    for (var i = 0; i < this.state.recipes.length; i++) {
      recipeElements.push(
        <Recipe key={i}
          title={this.state.recipes[i].title}
          ingredients={this.state.recipes[i].ingredients} 
          index={i}
          deleteRecipe={this.deleteThisRecipe.bind(this)}
          />);
    }

    return (
      <div className="wrapper">
        <h2>Recipe Ingredients</h2>
        <hr />
        {recipeElements}
        <hr />
        <AddRecipe />
        
      </div>
    );
  }
};

// final render

ReactDOM.render(
  <App />,
    document.querySelector('.container')
);