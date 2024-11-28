import { ResultsProps } from "@/app/data.type";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

type Props = {
  result: ResultsProps;
};

export const Card = ({ result }: Props) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <Link href={`movie/${result.id}`}>
        <div className="relative h-[200px] w-full">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`movie-image-of-${result.title || result.original_title}`}
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300 object-cover"
          />
        </div>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};
