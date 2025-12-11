import { MovieModel } from "./Models/Movie.js";
import { AuthorModel } from "./Models/Author.js";
import fs from "fs";

console.log("THIS IS THE RESOLVER YOU EDIT", import.meta.url);
console.log("Movie.js exists:", fs.existsSync("./Models/Movie.js"));
console.log("Author.js exists:", fs.existsSync("./Models/Author.js"));

export const resolvers = {
  Query: {
    movies: async () => await MovieModel.find(),
    authors: async () => await AuthorModel.find(),
    movie: async (_, { id }) => await MovieModel.findById(id),
    author: async (_, { id }) => await AuthorModel.findById(id),
    moviesByYear: async (_, { year }) => await MovieModel.find({ year }),
    topRatedMovies: async (_, { minRating }) =>
      await MovieModel.find({ rating: { $gte: minRating } }),
  },

  Movie: {
    author: async (parent) => await AuthorModel.findById(parent.authorId),
  },

  Author: {
    movies: async (parent) => await MovieModel.find({ authorId: parent._id }),
  },

  Mutation: {
    addMovie: async (_, { title, filmed, year, rating, authorId }) => {
      const newMovie = new MovieModel({ title, filmed, year, rating, authorId });
      await newMovie.save();
      return newMovie;
    },

    deletMovies: async (_, { id }) => {
      const result = await MovieModel.findByIdAndDelete(id);
      return !!result;
    },

    updateMovie: async (_, { id, ...args }) => {
      const result = await MovieModel.findByIdAndUpdate(id, args, { new: true });
      return result;
    },
  },
};
