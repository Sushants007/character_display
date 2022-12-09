import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Character from './Character';
import './Feed.css'




function Feed() {
  const[character,setCharacter]=useState([]);
  const[allCharacter,setAllCharacter]=useState([]);
  const[input,setInput]=useState("");
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${"https://rickandmortyapi.com/api/character"}`
      );
      console.log(res)
      setCharacter(res.data.results.map((doc)=>
        ({
          data:doc
        })
      ));
      setAllCharacter(res.data.results.map((doc)=>
        ({
          data:doc
        })
      ));
      if(input!=="")
    {
        console.log(allCharacter)
        const filtered=allCharacter.filter(character=>{
        return character.data.name.toLowerCase().includes(input.toLowerCase())
        
      })
      console.log(filtered)
      setCharacter(filtered.map((character)=>({
        data:character.data
      })))
    }
    else{
      setCharacter(allCharacter.data.map(data=>({
        data:data
      })))
    }
      //console.log(tweets)
    })();
  }, [input,allCharacter]);
  
  return (
    <div className='feed'>
      <div className='header'> 
        <div className='header__left'> 
            <div className='header__search'>
              <input onChange={(e)=>setInput(e.target.value)} placeholder="search by name"/>
            </div>
        </div>
       
    </div>
       {character.map(({data:{name,image}},ind)=>(
            <Character
            key={ind}
            name={name}
           image={image}
            />
   
         ))}   
    </div>
  )
}

export default Feed