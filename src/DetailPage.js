import React, { Component } from 'react'
import { getQuarterback, getStyles, updateQuarterback, getStyleId } from './api-utils.js';

export default class CreatePage extends Component {
    state ={
        name: '',
        accuracy: 1,
        is_old: false,
        style_id: 1,
        styles: [],
    }

    componentDidMount = async () => {
        const styles = await getStyles();
      
        const quarterback = await getQuarterback(this.props.match.params.candyId);

        const styleId = getStyleId(quarterback, styles);

        this.setState({
            ...quarterback,
            styleId,
            styles,
        })
    }
    
    handleNameChange = (e) => this.setState({ name: e.target.value });

    handleAccuracyChange = (e) => this.setState({ accuracy: Number(e.target.value)});

    handleStyleChange = (e) => this.setState({ style: Number(e.target.value)});

    handleIsoldChange = () => {
        this.setState({
            is_old: !this.state.is_old
        })
    }

    handleSubmit = async (e) => {
    e.prevent.default();

    await updateQuarterback(this.props.match.params.quarterbackId, this.state)
    
    this.props.history.push('/quarterbacks')
    }

    render() {
        return (
            <>
                QB stats
                <form onSubmit={this.handleSubmit}>
                    <label>
                        QB name
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        QB accuracy
                        <input value={this.state.accuracy} onChange={this.handleAccuracyChange} />
                    </label>
                    <label>
                        Are they old?
                        <input value={this.state.is_old} type="checkbox" onChange={this.handleIsoldChange} checked={this.state.is_old} />
                    </label>
                    <select value={this.state.style} onChange={this.handleStyleChange}>
                        {
                            this.state.styles.map(style => 
                            <option value={style.id} selected={this.state.style_id === style.id}>
                                {style.name}
                            </option>    
                                )
                        }


                    </select>

                    <button>update</button>

                </form>

            </>
        )
    }
}