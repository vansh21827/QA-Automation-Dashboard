"use client";

export default function MovieCard({movie}){

return(

<div className="movie-card">

<h3>
🎬 {movie.title}
</h3>

<p>
<strong>Genre</strong><br/>
{movie.genre}
</p>

<p>
<strong>Director</strong><br/>
{movie.director}
</p>

<p>
<strong>Year</strong><br/>
{movie.year}
</p>

<p>
⭐ {movie.rating}/10
</p>

</div>

);

}