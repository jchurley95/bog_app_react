import React, { Component } from 'react';
import axios from 'axios';
import CreatureCard from './CreatureCard';
import styled from 'styled-components'


const CreatureContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default class AllCreatures extends Component {
    constructor(){
        super();
        this.state = {
            creatures:[]
        }
    }

    componentWillMount(){
        this._fetchCreatures();
    }

    _fetchCreatures = async () => {
        try {
            const res = await axios.get('/api/creatures');
            await this.setState({creatures: res.data});
            return res.data;
            
        }
        catch (err) {
            console.log(err)
        }
        
    }
  render() {
      
    return (
      <div>
          <h1>Creatures!</h1>
        <CreatureContainer>
            {this.state.creatures.map((creature) => {
            return <CreatureCard creature={creature} key={creature.id}/>
        })}
        </CreatureContainer>
      </div>
    )
  }
}