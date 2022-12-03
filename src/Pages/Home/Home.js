import React from 'react'
import { useLoaderData } from 'react-router-dom'
import NewsCard from '../Shared/NewsCard/NewsCard';

export default function Home() {
  const news = useLoaderData();
  return (
    <div>
      <h2>Home</h2>
      {news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)}
    </div>
  )
}
