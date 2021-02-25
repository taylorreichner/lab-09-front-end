import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getQuarterbacks } from './api-utils.js';

export default class ListPage extends Component {
    state ={
        quarterbacks: [],
    }

    componentDidMount = async () => {
        this.setState({
            loading: true,
        });

        const quarterbacks = await getQuarterbacks();

        this.setState({
            quarterbacks: quarterbacks,
            loading: false,
        });
    }

    render() {
        return (
            <>
            
            
            { this.state.quarterbacks.map(qb => <Link
            to={`/quarterbacks/${qb.id}`} key={qb.name}>
            
            <div>
            <p>{qb.name}</p>
            <p>{qb.style}</p>
            <p>{qb.accuracy}</p>
            <p>{qb.is_old ? 'Old head' : 'Youngin'}</p>
            </div>
            </Link>
            )}    
            </>
        )
    }
}