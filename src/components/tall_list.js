import React from 'react'
import List from './list'

function TallList(props) {
    return (
        <div>
        {props.list.map((item,index)=>{
            return <List key={index} item={item} />
        })}
            
        </div>
    )
}

export default TallList
