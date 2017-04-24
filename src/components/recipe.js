import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import {Height} from 'react-height';
import {Collapse} from 'react-collapse';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }


  handleDelete(event, index) {
    this.props.deleteRecipe(event, index);
    this.setState ({ recipes: recipes })
  }

 
    
  render() {
    const {
      isOpened
    } = this.state;
    

    return (
    	<div>
        <div>
            <button onClick={() => this.setState({isOpened: !isOpened})}>{this.props.title}</button>
        </div>

        <Collapse isOpened={isOpened}>
          <div>
            <ul>
            {this.props.ingredients.map(function(el){
                return (<li>{el}</li>)
              })}
            </ul>
            <button className="btn btn-danger" 
              id={this.props.index}
              onClick={this.handleDelete.bind(this, this.props.index)}>Delete</button>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Recipe;