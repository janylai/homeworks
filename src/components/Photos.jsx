import { useEffect, useState } from 'react'
import './Photos.css'

const Photos = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
            .then((res) => {
                return res.json()
                    .then(data => setUsers(data))
            })
    }, [])
    return (
        <div className='cont'>
            {users.map((item) => {
                return (
                    <div className='item'>
                        <span> {item.id} </span>
                        <h4> {item.title} </h4>
                        <p> text </p>
                        <img src= {item.thumbnailUrl} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default Photos 