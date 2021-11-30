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
  },
  {
    image: typescript,
    alt: "typescript icon",
    name: "TypeScript",
  },
  {
    image: java,
    alt: "java icon",
    name: "Java",
  },
  {
    image: python,
    alt: "python icon",
    name: "Python",
  },
];

const frontendItems = [
  {
    image: reactjs,
    alt: "reactjs icon",
    name: "ReactJS",
  },
  {
    image: redux,
    alt: "redux icon",
    name: "Redux",
  },
  {
    image: native,
    alt: "react-native icon",
    name: "Native",
  },
  {
    image: bootstrap,
    alt: "bootstrap icon",
    name: "Bootstrap",
  },
];

const backendItems = [
  {
    image: nodejs,
    alt: "nodejs icon",
    name: "NodeJS",
  },
  {
    image: express,
    alt: "expressjs icon",
    name: "ExpressJS",
  },
  {
    image: graphql,
    alt: "graphql icon",
    name: "GraphQL",
  },
];

const otherItems = [
  {
    image: github,
    alt: "github icon",
    name: "GitHub",
  },
  {
    image: npm,
    alt: "npm icon",
    name: "NPM",
  },
  {
    image: postman,
    alt: "postman icon",
    name: "Postman",
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
