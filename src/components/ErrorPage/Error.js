import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <h1 className='display-4'>404</h1>
                    <h1>Error</h1>
                    <h2 className='text-danger'>Page Not Found</h2>
                </div>
            </div>
        )
    }
}