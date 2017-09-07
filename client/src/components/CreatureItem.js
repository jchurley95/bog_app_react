import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom'

class CreatureItem extends Component {
  constructor(){
      super();
      this.state = {
          creature: {
              name: '',
              description:''
          },
          redirect: false
      };
  }

  componentWillMount(){
      const creatureId = this.props.match.params.id;
      this._fetchCreatures(creatureId);
      
  }

  _fetchCreatures = async (creatureId) => {
      try {
          const res = await axios.get(`/api/creatures/${creatureId}`)
          await this.setState({creature: {
              name: res.data.name,
              description: res.data.description,
              img_url: res.data.img_url,

          }})
          return res.data
          console.log(res.data)
      }
      catch(err) {
          console.log(err)
      }
  }
  _deleteCreature = async (e) => {
      e.preventDefault();
      try {
          const res = await axios.delete(`/api/creatures/${this.props.match.params.id}`)
          this.setState({redirect: true})
          return res.data
          

      } catch(err) {
          console.log(err)
      }
  }
  render() {
    return (
      <div>
        {this.state.redirect 
        ? 
            <Redirect to={'/'} />
        :
            <div>
            <h1><strong>Name: </strong> {this.state.creature.name}</h1>
            <p><strong>Description: </strong> {this.state.creature.description}</p>
            <Link to={`/creatures/${this.props.match.params.id}/edit`}><button>Edit Creature</button></Link>
            <button onClick={this._deleteCreature}>Delete This Creature</button>
      </div>

    }
    </div>
    )
  }
}

export default CreatureItem;