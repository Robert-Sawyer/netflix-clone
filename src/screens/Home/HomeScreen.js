import React from 'react'
import Nav from "../../components/HomeScreen/Nav";
import Banner from "../../components/HomeScreen/Banner";
import Row from "../../components/HomeScreen/Row";
import requests from "../../Requests";

const HomeScreen = () => {

    return (
        <div>
            <Nav />
            <Banner/>
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen;