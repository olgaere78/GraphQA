import { movies, authors } from "../data.js"

export const resolvers = {
    Query: {
        movies: () => movies,
        authors: () => authors,
        movie: (_, { id }) => movies.find((movie) => movie.id == id),
        author: (_, { id }) => authors.find((autor) => autor.id == id),
        moviesByYear: (_, { year }) => movies.filter(m => m.year === year),
        topRatedMovies: (_, { minRating }) => movies.filter(m => m.rating >= minRating)
    },
    Movie: {
        author: (parent) => authors.find((a) => a.id === parent.authorId)
        //parent = in this case it is movie
    },
    Author: {
        movies: (parent) => movies.filter((movie) => movie.authorId === parent.id)
    } 
}