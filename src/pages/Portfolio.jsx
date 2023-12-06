import React from "react";
import Footer from "../components/Footer";
import Project from "../pages/Project";

const projects = [
  {
    title: "Random Password Generator",
    description: "A random password generator.",
    imageUrl: "./dist/assets/password.webp",
    link: "https://bfinch3.github.io/Random-Password-Generator/",
  },
  {
    title: "US Capital Quiz Game",
    description: "A US capital quiz game.",
    imageUrl: "./dist/assets/map.jpg",
    link: "https://bfinch3.github.io/US-Capitals-Quiz/",
  },
  {
    title: "Worker Calendar",
    description: "A calendar to keep track of your tasks.",
    imageUrl: "./dist/assets/calendar.jpg",
    link: "https://bfinch3.github.io/Work-Calendar/",
  },
  {
    title: "Concert Tracker",
    description:
      "An application that tracks concerts, events and their location.",
    imageUrl: "./dist/assets/concert.webp",
    link: "https://bfinch3.github.io/Concert-Tracker/",
  },
  {
    title: "Note Taker",
    description: "An applincation that takes notes..",
    imageUrl: "./dist/assets/notepad.png",
    link: "https://bfinch3.github.io/Note-Taker/",
  },
  {
    title: "5 Day Weather App",
    description: "A 5 day weathe rapplication.",
    imageUrl: "./dist/assets/weather.png",
    link: "https://bfinch3.github.io/Weather-App/",
  },
  {
    title: "First Portfolio",
    description: "First portfolio I built.",
    imageUrl: "./dist/assets/portfolio.webp",
    link: "https://bfinch3.github.io/Billy-Finch-Portfolio/",
  },
  {
    title: "Fitness ",
    description: "Description for Project 2.",
    imageUrl: "./dist/assets/fitness.png",
    link: "https://example.com/project2",
  },
];

function Portfolio() {
  return (
    <div>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
