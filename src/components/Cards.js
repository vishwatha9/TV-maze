import React from 'react'
import Actor from './Actor'
import Shows from './Shows'

function Cards(props) {
  console.log(props.data)
    const{data,radio}=props
    if(data.length > 0){
      console.log('inside if cards')
  return (
    <>
      {(radio==='shows')?(
        data.map(ele => {
            if(ele.shows!==null && ele!=null){
                return <Shows key={ele.show.id} ele={ele}/>
            }
        })
      ):(radio==='people')?(
        data.map(ele => {
            if(ele.person!==undefined && ele!=null && ele.person.id!==null && ele.person.id!== undefined){
                return <Actor key={ele.person.id} ele={ele}/>
            }
        })
      ):""}
    
    </>
  )
      }
      else if (radio != '' && data.length === 0){
        return ""
      }
}

export default Cards
