import React from 'react'
import '../../styles/Title/Title.css'
export default function Title({ name, title }) {
    return (
        <div className='row'>
            <div className='text-title'>
                <h1>
                    {name} <strong className='text-blue'>{title}</strong>
                </h1>
            </div>
        </div>
    );
}