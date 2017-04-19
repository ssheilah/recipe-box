import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import {Height} from 'react-height';
import {Collapse} from 'react-collapse';

class Recipe extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false
    };
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
            <p>{this.props.ind}</p>
            <ul>
            {this.props.ingredients.map(function(el){
                return (<li>{el}</li>)
              })}
            </ul>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Recipe;