import React, { useEffect } from 'react';
import './Row.css';


function Row({ trie, reveal, word,setWin }) {
    let colors = []
    useEffect(()=>{
       if(colors.every((color)=>color==='green')&&reveal){
           setWin(true)
       }

    },[colors])
    const words = word.split("")
    
    if(trie){
         colors = trie.map((letter, index)=>{
            if(letter===words[index]) return 'green'
            else if(words.includes(letter)) return 'yellow'
            else return 'black'
        })
    }
   
    return (
        <>
    
        <div className='row'>
        {Array(5).fill('').map((_, index) => (
    <div className={`box ${trie&&trie[index]?'colorBox':''} ${reveal&&colors[index]}`} key={index} >{trie? trie[index]:''}</div>
      ))}
        </div>
        </>
    );
}

export default Row;