import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Motion, spring} from 'react-motion';
import {Height} from 'react-height';
import {Collapse} from 'react-collapse';
import Recipe from './components/recipe';
import AddRecipe from './components/addrecipe';
import Modal from './components/modal';

var localStorageKey = "_ssheilah_recipes";

class App extends Component {
  constructor() {
    super();
    
    const recipes = JSON.parse(localStorage.getItem(localStorageKey)) || [
      {title: 'quiche', ingredients: ['eggs', 'cheese', 'crust']},
      {title: 'salad', ingredients: ['lettuce', 'pears', 'poppyseed dressing']},
      {title: 'danish', ingredients: ['pastry', 'cream cheese', 'apricot jam']}
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
        <Recipe title={this.state.recipes[i].title}
          ingredients={this.state.recipes[i].ingredients} 
          index={i}
          deleteRecipe={this.deleteThisRecipe.bind(this)}
          />);
    }

    return (
      <div className="container">
        {recipeElements}
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