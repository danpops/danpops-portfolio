import javascript from "../icons/javascript.png";
import java from "../icons/java.png";
import typescript from "../icons/typescript.png";
import python from "../icons/python.png";

import reactjs from "../icons/reactjs.png";
import redux from "../icons/redux.png";
import native from "../icons/react-native.png";
import bootstrap from "../icons/bootstrap.png";

import graphql from "../icons/graphql.png";
import nodejs from "../icons/nodejs.png";
import express from "../icons/express.png";

import postman from "../icons/postman.png";
import github from "../icons/github.png";
import npm from "../icons/npm.png";

export const specialtyTabs = [
  {
    title: "programming",
    eventKey: "programming",
  },
  {
    title: "front-end",
    eventKey: "frontend",
  },
  {
    title: "back-end",
    eventKey: "backend",
  },
  {
    title: "tools",
    eventKey: "tools",
  },
];

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
    name: "Native",
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
    image: express,
    alt: "expressjs icon",
    name: "ExpressJS",
    href: "https://expressjs.com",
  },
  {
    image: graphql,
    alt: "graphql icon",
    name: "GraphQL",
    href: "https://graphql.org",
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
    image: npm,
    alt: "npm icon",
    name: "NPM",
    href: "https://www.npmjs.com",
  },
  {
    image: postman,
    alt: "postman icon",
    name: "Postman",
    href: "https://www.postman.com",
  },
];

export const specialtyPanes = [
  {
    data: progammingItems,
    eventKey: "programming",
  },
  {
    data: frontendItems,
    eventKey: "frontend",
  },
  {
    data: backendItems,
    eventKey: "backend",
  },
  {
    data: otherItems,
    eventKey: "tools",
  },
];
