import React, { Component } from 'react';
import Modal from './modal';
import Recipe from './recipe';

var localStorageKey = "_ssheilah_recipes";

class EditRecipe extends Component {
    constructor(props) {
      super(props)
      this.state = { 
        isModalOpen: false,
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // set the default values when edit modal is opened

    // when the component is loaded the first time
   componentWillMount() { 
     if (this.props.recipe) this.setDefaultState(this.props.recipe);
    }

    // when the component is reloaded
    componentWillReceiveProps(nextProps) {
      this.setDefaultState(nextProps);
    }

    // prefill the input fields with available data by setting default state

    setDefaultState(recipe) {
      this.setState({
        index: this.props.index,
        title: this.props.title,
        ingredients: this.props.ingredients
      })
    }
    
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value,
        index: this.props.index
      });
    }

    handleSubmit(event) {

      this.setState({
        index: this.props.index,
        title: this.state.title,
        ingredients: this.state.ingredients
      });


      var newVersion = {title: this.state.title.toUpperCase(), ingredients: this.state.ingredients.replace(' ', '').trim().split(",")};

      // delete old version
      var arrayR = [];
      arrayR = JSON.parse(localStorage.getItem(localStorageKey));
      arrayR.splice(this.state.index, 1);


      // add new version
      arrayR.splice(this.state.index, 0, newVersion);
      localStorage.setItem(localStorageKey, JSON.stringify(arrayR))
      this.setState({ 
        recipes : arrayR,
        recipes : recipes
      });

      this.closeModal();
      event.preventDefault();
    }  


    render() {
      return (
        <div>
        <button onClick={() => this.openModal()}>Edit Recipe</button>
          <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
            
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                 Recipe Title</label>
                <input 
                  name="title" 
                  type="text" 
                  value={this.state.title}
                  onChange={this.handleChange} />
              
              <br />
              <label>
                 Recipe Ingredients</label>
                <input 
                  name="ingredients" 
                  type="text" 
                  value={this.state.ingredients}
                  onChange={this.handleChange} />
              
              <br />
              <input type="submit" value="Submit" />
              <button onClick={this.closeModal}>Cancel</ button>
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

  export default EditRecipe;