import React from 'react'
import "./Character.css"

function Character({name,image}) {
  return (
    <div className='char'>
        <div className='char__header'>
        <div className='char__info'>
                <h2>{name}</h2>    
            </div>
        </div>

        <div className='char__body'>
            <p className='char__image'>{(image)?(<img src={image} alt="" />):("")}</p>
        </div>        
    </div>
  )
}

export default Character