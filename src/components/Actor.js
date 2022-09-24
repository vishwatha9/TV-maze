import React from 'react'
import './Actors.css'

function Actor(props) {
  const{ele} = props
  if(ele.person!==null){
    let picture = 'https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png'
    if(ele.person.image!==null){
      picture = ele.person.image.medium
    }
    // let wiki = `https://en.wikipedia.org/wiki/${ele.person.name}`
  return (
    // <div className={'actorCard'}>
    //   <img src={picture} alt='No-image' />
    //   {/* <h5><a href={wiki} target="_blank">{ele.person.name}</a></h5> */}
      
    // </div>
    <img className={'actorCard'} src={picture} alt='No-image' />
  )
}
else{
  return ""
}
}
export default Actor
