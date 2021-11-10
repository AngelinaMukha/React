import React, {Component} from 'react';
import cuteImg from './CuteImg.jpg';
import './Dog.css';

class Dog extends Component{
    render(){
        return (
            <div className="Dog">
                <h1>WHO IS HERE?!?</h1>
                <img className="Dog-img" src={cuteImg} alt="CuteImg"/>
            </div>
        );
    }
}
export default Dog;