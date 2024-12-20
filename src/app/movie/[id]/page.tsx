import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

type MovieProps = {
  release_date: string;
  first_air_date: string;
  title: string;
  overview: string;
  name: string;
  backdrop_path: string;
  poster_path: string;
  vote_count: string;
};

export default async function MoviePage({ params }: Props) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const movie: MovieProps = await res.json();
  const word = "juror #2";
  const split = word.split(" ");
  console.log(split.join("-"));

  return (
    <div className="w-full">
      <Link
        href={
          movie.name || movie.title
            ? `https://ww2.m4uhd.tv/search/${encodeURIComponent(
                (movie.name || movie.title).split(" ").join("-")
              )}-${
                movie.release_date || movie.first_air_date
                  ? (movie.release_date || movie.first_air_date).split("-")[0]
                  : ""
              }.html`
            : "https://ww2.m4uhd.tv/"
        }
      >
        <div className="flex flex-col md:flex-row content-center p-4 md:pt-8 space-x-6 max-w-6xl mx-auto">
          <Image
            width={500}
            height={300}
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={`${movie.name || movie.title}`}
            className="rounded-lg"
            style={{ maxWidth: "100%", height: "100%" }}
          />

          <div className="p-2">
            <h2 className="text-lg font-bold mb-3">
              {movie.title || movie.name}
            </h2>
            <p className="mb-3">{movie.overview}</p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p>
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
