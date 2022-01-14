import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing() {

    /* Heads up! 
    Incorrect implementation, do not use.
    
    axios.get(`${BASE_URL}/movies?size=12&page=0`).then(
        response => {
            console.log(response.data);
        });
    */

    const [pagNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=10`).then(
            response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);                
            });
    }, []);

    return (
        <>
            <p>{pagNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                        <MovieCard />
                    </div>                                                                              
                </div>   
            </div>
        </>
    )
}

export default Listing;