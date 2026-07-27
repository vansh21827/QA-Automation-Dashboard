"use client";

import { useDashboard } from "../../context/DashboardContext";
import MovieCard from "./MovieCard";

export default function MovieList(){

const{

filteredMovies

}=useDashboard();

return(

<>

<p>

Showing

<strong>

{" "}
{filteredMovies.length}

</strong>

movie(s)

</p>

{

filteredMovies.length===0?

(

<div className="empty-state">

🔍

<h3>

No Movies Found

</h3>

<p>

Try another search.

</p>

</div>

)

:

(

<div className="movie-grid">

{

filteredMovies.map(movie=>(

<MovieCard

key={movie.id}

movie={movie}

/>

))

}

</div>

)

}

</>

);

}