import React from 'react'
const Genere = (props) =>{
    let color = '';
    console.log(props.genre)
    switch(props.genre.name){
        case 'Action':
            color = 'rgb(150, 250, 250)';
            break 
        case 'Adventure':
            color = 'rgb(3, 140, 100)';
            break 
        case 'Comedy':
            color = 'rgb(3, 32,180)';
            break 
        case 'Family':
            color = 'rgb(200, 2, 90)';
            break 
        case 'Science Fiction':
            color = 'rgb(50, 59, 13)';
            break 
        case 'Thriller':
            color = 'rgb(43, 190, 140)';
            break 
        case 'Fantasy':
            color = 'rgb(34, 59, 120)';
            break  
        case 'Drama':
            color = 'rgb(10, 150, 200)';
            break 
        case 'Crime':
            color = 'rgb(200, 150, 150)';
            break    
        case 'Animation':
            color = 'rgb(20, 59, 210)';
            break   
        case 'Horror':
            color = 'rgb(17, 93, 50)';
            break
        case 'Mystery':
            color = 'rgb(3, 59, 1)';
            break
        case 'History':
            color = 'rgb(1, 50, 244)';
            break       
        case 'Romance':
            color = 'rgb(33, 209, 15)';
            break     
        case 'Music':
            color = 'rgb(33, 289, 250)';
            break         
    }
    return (
        <div style ={{backgroundColor : color}} className = 'genre'> {props.genre.name}</div>
    )
}

export default Genere