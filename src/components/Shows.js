import React from 'react'
import './Shows.css'

function Shows(props) {
  const{ele} = props
  if(ele.show.name!==null){
    let picture = 'https://sirinc2.org/branch129/wp-content/uploads/2019/04/no-photo-icon-22.png'
    if(ele.show.image!==null){
      picture = ele.show.image.medium
    }

    if(ele.show.image !== null) {
      picture = ele.show.image.medium
  }
  let genee = ele.show.genres.join(', ')

  if (ele.show.runtime === null) {
      ele.show.runtime = 160
  }
  if (ele.show.rating.average === null) {
      ele.show.rating.average = 5
  }

    // let wiki = `https://en.wikipedia.org/wiki/${ele.show.name}`
  return (
    <div className={'showCard'}>
      <img src={picture} alt='No-image' />
      <h6>Runtime : {ele.show.runtime} mins</h6>
                <h5>Genre : {genee}</h5>
                <h5>Rating : {ele.show.rating.average}⭐</h5>
                
      {/* <h5><a href={wiki} target="_blank">{ele.show.name}</a></h5> */}
      
    </div>
  )
}
else{
  return ""
}

}

export default Shows
