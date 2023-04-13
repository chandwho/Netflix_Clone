import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../components/Requests'

export default function Home() {
  return (
    <div>
        <Main/>
        <Row id={1} title='Netflix Originals' url={requests.originals}/>
        <Row id={2} title='Up Coming' url={requests.upcoming}/>
        <Row id={3} title='Trending' url={requests.trending}/>
        <Row id={4} title='Comedy' url={requests.comedy}/>
        <Row id={5} title='Horror' url={requests.horror}/>
        <Row id={6} title='Action' url={requests.action}/>
        <Row id={7} title='Top rated' url={requests.topRated}/>
        <Row id={8} title='Documentaries' url={requests.documentaries}/>
    </div>
  )
}