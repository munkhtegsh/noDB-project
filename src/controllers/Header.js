import React, { Component } from 'react';
import './Header.css';
export default (props) => (
    <div className="header">
        <h1>
            ALL STARS
        </h1>
        <div>
            <input type="text" name="firstName" onChange={(e) => props.changeInput(e.target.value, e.target.name)} placeholder="Firstname"/>
            <input type="text" name="lastName" onChange={(e) => props.changeInput(e.target.value, e.target.name)} placeholder="Lastname"/>
            <button  onClick={() => props.addPlayer()}>Add</button>
        </div>
    </div>
)

