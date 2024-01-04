import React from 'react'
import { useParams } from 'react-router-dom'
import useDataFetch from '../../hooks/useDataFetch';

function UserDetail() {

    const {id}=useParams();
    const {data}=useDataFetch(`/posts/${id}`)
    console.log(data)
  return (
    <div>
        {data.id}
    </div>
  )
}

export default UserDetail