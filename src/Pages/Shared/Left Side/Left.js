import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Left() {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:7000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.error(error))
  }, [])
  return (
    <div>
      <h5>All Categories : {categories.length}</h5>
      {
        categories.map(category => <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>)
      }
    </div>
  )
}
