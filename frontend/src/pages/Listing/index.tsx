import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { truncate } from "fs";
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

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then(
            response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    {page.content.map(returnItem => (
                        <div key={returnItem.id} className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                            <MovieCard movie={returnItem} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Listing;