export type Movie = {
  id: number;
  type: string;
  title: string;
  year: string;
  genre: string[];
  description: string;
  imgUrl: string;
  trailerUrl: string;
  ratings: number[];
};

export type NewMovie = Omit<Movie, "id">;
