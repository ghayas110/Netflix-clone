import React from 'react'
import Banner from '../Banner'
import "./Homescreen.css"
import Nav from '../Nav'
import Row from '../Row'
import requests from '../Request'
function HomeScreen() {
    return (
        <div className="homeScreen">
        <Nav/>
      <Banner/>
            {/* Banner*/ }
             {/*Rows*/ }
             <Row title="Trending Now" fetchUrl={requests.fetchNetflixOrignals} isLargeRow/>
             <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
             <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
             <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
             <Row title="Metro Movies" fetchUrl={requests.fetchMetroMovies} />
             <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
             <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
