import React from 'react'

export default function page({params}) {
  console.log(params)


    if (params.features.length == 2) {
      return (
        <div>
         varient {params.features[1]}
        </div>
      )
    }




 
}
