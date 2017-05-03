import React, { Component } from 'react';
//import {Motion, spring} from 'react-motion';
//import {Height} from 'react-height';
import {Collapse} from 'react-collapse';
import AddRecipe from './addrecipe';
import EditRecipe from './editrecipe';

var localStorageKey = "_ssheilah_recipes";


class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  handleDelete(event, index) {
    this.props.deleteRecipe(event, index);
    this.setState ({ recipes: this.state.recipes })
  }
    
  render() {
    const {
      isOpened
    } = this.state;
    
    return (
    	<div className="eachrecipe">
        <div>
            <button className="titlebtn" onClick={() => this.setState({isOpened: !isOpened})}>{this.props.title}</button>
        </div>

        <Collapse isOpened={isOpened}>
          <div>
            <ul>
            {this.props.ingredients.map(function(el){
                return (<li key={el}>{el}</li>)
              })}
            </ul>  
            <EditRecipe 
              index={this.props.index}
              title={this.props.title}
              ingredients={this.props.ingredients} 
            />
            <button className="deletebtn"
              onClick={this.handleDelete.bind(this, this.props.index)}>Delete Recipe</button>
          </div>
        </Collapse>
      </div>
    );
  }

}

export default Recipe;
