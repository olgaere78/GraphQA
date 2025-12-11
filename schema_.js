import { gql } from "graphql-tag";
////import { gql } from "@apollo/server";

export const typeDefs = gql`
  type Movie {
    id: ID!
    title: String
    filmed: Boolean
    year: Int
    rating: Float
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    movies: [Movie]
  }

  type Query {
    movies: [Movie]
    movie(id: ID!): Movie
    moviesByYear(year: Int!): [Movie]
    topRatedMovies(minRating: Float!): [Movie]
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addMovie(title: String, filmed: Boolean, year: Int, rating: Float, authorId: ID!): Movie
    deletMovies(id: ID!): Boolean
    updateMovie(id: ID!, title: String, filmed: Boolean, year: Int, rating: Float, authorId: ID): Movie
  }
`;
