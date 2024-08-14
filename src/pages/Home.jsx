import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex w-full h-[calc(100vh-70px)] items-center justify-center font-plusSans px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl flex flex-col gap-5 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Discover Your Next Learning Adventure
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore our diverse selection of online courses and unlock your full
          potential. Whether you are looking to develop new skills or enhance your
          existing knowledge, we have got you covered.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/courses"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white bg-black shadow-sm transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Browse Courses
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
