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
    
    var recipes = [
      {ind: 0, title: 'quiche', ingredients: ['eggs', 'cheese', 'crust']},
      {ind: 1, title: 'salad', ingredients: ['lettuce', 'pears', 'poppyseed dressing']},
      {ind: 2, title: 'danish', ingredients: ['pastry', 'cream cheese', 'apricot jam']}

  ];
    
    this.state = {
      isOpened: false,
      recipes: recipes
    };
  }
 

  render() {
   const {
      isOpened
    } = this.state;
    
    var recipeElements = [];
    for (var i = 0; i < this.state.recipes.length; i++) {
      recipeElements.push(
        <Recipe ind={this.state.recipes[i].ind} 
          title={this.state.recipes[i].title}
          ingredients={this.state.recipes[i].ingredients} index={i} 
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