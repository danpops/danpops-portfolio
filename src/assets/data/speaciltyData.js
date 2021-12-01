import bootstrap from "../icons/bootstrap.png";
import express from "../icons/express.png";
import github from "../icons/github.png";
import graphql from "../icons/graphql.png";
import java from "../icons/java.png";
import javascript from "../icons/javascript.png";
import jest from "../icons/jest.png";
import mongo from "../icons/mongo.png";
import native from "../icons/react-native.png";
import nodejs from "../icons/nodejs.png";
import postman from "../icons/postman.png";
import python from "../icons/python.png";
import reactjs from "../icons/reactjs.png";
import redux from "../icons/redux.png";
import storybook from "../icons/storybook.png";
import typescript from "../icons/typescript.png";

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
    image: github,
    alt: "github icon",
    name: "GitHub",
    href: "https://github.com",
  },
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
    image: postman,
    alt: "postman icon",
    name: "Postman",
    href: "https://www.postman.com",
  },
];

export const specialtyData = [
  {
    title: "programming",
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
