import React, { Component } from 'react'
import { makeQuarterback } from './api-utils.js';

export default class CreatePage extends Component {
    state = {
        name: '',
        accuracy: 1,
        is_old: false,
        style_id: 1,
    }

    handleNameChange = (e) => 
    this.setState({ name: e.target.value });

    handleAccuracyChange = (e) =>
    this.setState({ accuracy: Number(e.target.value)});

    handleIsOldChange = (e) =>
    this.setState({ is_old: !this.state.is_old});

    handleStyleChange = (e) =>
    this.setState({ style_id: Number(e.target.value)});

    handleSubmit = (e) => {
        e.preventDefault();
       // await 
        makeQuarterback(this.state);
        this.props.history.push('/quarterbacks');
    }

    render() {
        return (
            <>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name 
                    <input value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Accuracy
                    <input value={this.state.accuracy} type="number" onChange={this.handleAccuracyChange} />
                </label>
                <label>
                    Is they old?
                    <input value={this.state.is_old} type="checkbox" onChange={this.handleIsOldChange} />
                </label>
                <label>
                    What type of QB are they?
                    <select value={this.state.style} onChange={this.handleStyleChange}>
                        <option value={1}>Pocket Passer</option>
                        <option value={2}>Gun Slinger</option>
                        <option value={3}>Balanced</option>
                        <option value={4}>Mobile</option>
                    </select>
                </label>

                <button onClick={() => this.setState()}>booger button for now</button>
            </form>
                
            </>
        )
    }
}