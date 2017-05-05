import React, { Component } from 'react';
import Modal from './modal';

var localStorageKey = "_ssheilah_recipes";

class AddRecipe extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        isModalOpen: false,
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }


    handleSubmit(event) {
      const newS = this.state;

      var newRecipe = {title: this.state.title, ingredients: this.state.ingredients.replace(/\[,\s]/g, '').trim().split(",")};
      var arrayR = JSON.parse(localStorage.getItem(localStorageKey));
      arrayR.push(newRecipe);
      this.setState(newS);      
      localStorage.setItem(localStorageKey, JSON.stringify(arrayR));

      this.setState({ 
        recipes: recipes
      });

      this.closeModal();
      event.preventDefault();

    }  


    render() {
      return (
        <div>
          <button className="addbtn" onClick={() => this.openModal()}>Add New Recipe</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                 Recipe Title:</label>
                <input 
                  name="title" 
                  type="text" 
                  value={this.state.title} 
                  onChange={this.handleChange} />
              
              <br /><br />
              <label>
                 Recipe Ingredients:</label>
                <input 
                  name="ingredients" 
                  type="text" 
                  placeholder="ingredients, separated by commas"
                  value={this.state.ingredients} 
                  onChange={this.handleChange} />
              
              <br /><br />
              <input type="submit" value="Submit" />
             </form>       
          </Modal>
        </div>
      )
    }

    openModal() {
      this.setState({ isModalOpen: true })
    }

    closeModal() {
      this.setState({ isModalOpen: false })
    }
  }

  export default AddRecipe;