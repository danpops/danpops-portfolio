import bootstrap from "../assets/icons/bootstrap.png";
import express from "../assets/icons/express.png";
import github from "../assets/icons/github.png";
import graphql from "../assets/icons/graphql.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/javascript.png";
import jest from "../assets/icons/jest.png";
import mongo from "../assets/icons/mongo.png";
import native from "../assets/icons/reactnative.png";
import nodejs from "../assets/icons/nodejs.png";
import postman from "../assets/icons/postman.png";
import python from "../assets/icons/python.png";
import reactjs from "../assets/icons/reactjs.png";
import redux from "../assets/icons/redux.png";
import storybook from "../assets/icons/storybook.png";
import typescript from "../assets/icons/typescript.png";

const progammingItems = [
  {
    image: javascript,
    alt: "javascript icon",
    name: "JavaScript",
    href: "https://www.javascript.com",
  },
  {
    image: typescript,
    alt: "typescript icon",
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    image: java,
    alt: "java icon",
    name: "Java",
    href: "https://www.java.com/en/",
  },
  {
    image: python,
    alt: "python icon",
    name: "Python",
    href: "https://www.python.org",
  },
];

const frontendItems = [
  {
    image: reactjs,
    alt: "reactjs icon",
    name: "ReactJS",
    href: "https://reactjs.org",
  },
  {
    image: redux,
    alt: "redux icon",
    name: "Redux",
    href: "https://redux.js.org",
  },
  {
    image: native,
    alt: "react-native icon",
    name: "React Native",
    href: "https://reactnative.dev",
  },
  {
    image: bootstrap,
    alt: "bootstrap icon",
    name: "Bootstrap",
    href: "https://getbootstrap.com",
  },
];

const backendItems = [
  {
    image: nodejs,
    alt: "nodejs icon",
    name: "NodeJS",
    href: "https://nodejs.org/en/",
  },
  {
    image: graphql,
    alt: "graphql icon",
    name: "GraphQL",
    href: "https://graphql.org",
  },
  {
    image: express,
    alt: "expressjs icon",
    name: "ExpressJS",
    href: "https://expressjs.com",
  },
  {
    image: mongo,
    alt: "mongodb icon",
    name: "MongoDB",
    href: "https://www.mongodb.com/",
  },
];

const otherItems = [
  {
    image: jest,
    alt: "jest icon",
    name: "JestJS",
    href: "https://jestjs.io/",
  },
  {
    image: storybook,
    alt: "storybook icon",
    name: "StorybookJS",
    href: "https://storybook.js.org/",
  },
  {
    image: github,
    alt: "github icon",
    name: "GitHub",
    href: "https://github.com",
  },
  {
    image: postman,
    alt: "postman icon",
    name: "Postman",
    href: "https://www.postman.com",
  },
];

export const specialtyData = [
  {
    title: "languages",
    data: progammingItems,
    eventKey: "programming",
  },
  {
    title: "frontend",
    data: frontendItems,
    eventKey: "frontend",
  },
  {
    title: "backend",
    data: backendItems,
    eventKey: "backend",
  },
  {
    title: "other",
    data: otherItems,
    eventKey: "tools",
  },
];
