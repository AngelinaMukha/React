import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component{
    render() {
        let title;
        if(this.props.isWinner){
            title=<h1 className="Pokedex-winner">Winning hand</h1>;
        }else{
            title=<h1 className="Pokedex-loser">Losing hand</h1>;
        }
        return (
            <div className="Pokedex">
                {title}
                <p>Total Expirience: {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p)=>(
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp}/>
                    ))}
                </div>
            </div>
        )
    }
}
export default Pokedex;