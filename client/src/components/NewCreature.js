import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

export default class NewCreature extends Component {
    constructor(){
        super();
        this.state = {
            creature: {
                name: '',
                description: ''
                },
            redirect: false
        
        
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.creature};
        newState[e.target.name] = e.target.value;
        this.setState({
            creature: newState
        });
      }
    
    _addCreature = async (e) => {
        e.preventDefault();
        const payload = this.state.creature

        const res = await axios.post('/api/creatures', payload)
        this.setState({redirect: true});
    }
      
  render() {
    return (
      <div>
          {this.state.redirect? 
            <Redirect to={`/`}/>
            :
            <form onSubmit={this._addCreature}>
            <div>
            <label htmlFor="name">Name: </label>
            <input onChange={this._handleChange} type="text" name="name" value={this.state.creature.name} />
            </div>
            <div>
            <label htmlFor="description">Description: </label>
            <input onChange={this._handleChange} type="text" name="description" value={this.state.creature.description} />
            </div>
            
            <button>Add New Creature</button>
        </form>
          }

        
    </div>
    )
  }
}