import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { debounce } from "lodash"
import './Home.css'
import Cards from './Cards'

function Home() {
  const [radio,setRadio]= useState("")
  const[text, setText]=useState('')
  const[place,setPlace]=useState('')
  const[err,setErr]=useState('')
  const[data,setData]=useState([])
  const[error,setError]=useState(true)

  useEffect(() => {
    // https://api.tvmaze.com/search/shows?q=friends
    // https://api.tvmaze.com/search/people?q=akon
    const choice = radio
    const query=text
    setErr('')
    if(choice=='people'){
//       setText('')
      axios.get(`https://api.tvmaze.com/search/people?q=${query}`)
      .then(res => {
        if(res.data.length===0){
          setData([])
          setErr('No Data Found')
        }
        else{
          setData(res.data)
        }
      })
      .catch(err => {
        console.log("Some Error Found")
      })
    }
    
    else if(choice=='shows'){
      axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => {
        if(res.data.length===0){
          setErr('No Data Found')
        }
        else{
          setData(res.data)
        }
      
      })
      .catch(err => {
        console.log("Some Error Found")
      })
    }
  },[text])

  const clickHandler= (params) => {
    setError(false)
    setErr('Enter the text')
    const value = params
  if(value=='people'){
    setRadio('people')
    setPlace("eg:akon....")
  }
  else if(value=='shows'){
    setRadio('shows')
    setPlace('eg:friends...')
  }
  }
  
  const handleChange = debounce((val) => {
  if(val === ''){
  setErr('Enter the Text')
  }
  setText(val)
  }, 1000)
  
  
  return (
    <div>
      <div className={'block2'}>
      <h1>TVmaze</h1>
      <h2>Search your favourite shows</h2>
      <div className={'err'}>
      {
        error? <p>Select one option</p> : null
      }</div>
      <div>
      <div className={'radioButton'}>
      <input 
         type='radio' 
         name='radio'
         value='Actor'
         onClick={() => clickHandler('people')}/>
      <label>Actors</label>
      <input type='radio' name='radio' value='Shows' onClick={() => clickHandler('shows')}/>
      <label>Shows</label>
      </div>
      <br/>
      <br/>
      <input 
        className={'inpBox'}
        type='text' 
        placeholder={place} 
        onChange=({e) => handleChange(e.target.value)}/>
      <p className={'err'}>{err}</p>
      </div></div>
      <div className={'cardFlex'}>
      <Cards data={data} radio={radio} />
      </div>
    </div>
  )
}

export default Home
