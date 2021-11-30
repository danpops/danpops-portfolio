import javascript from "../icons/javascript.png";
import java from "../icons/java.png";
import typescript from "../icons/typescript.png";
import python from "../icons/python.png";

import reactjs from "../icons/reactjs.png";
import native from "../icons/react-native.png";
import bootstrap from "../icons/bootstrap.png";
import graphql from "../icons/graphql.png";

import nodejs from "../icons/nodejs.png";
import express from "../icons/express.png";

import mongodb from "../icons/mongodb.png";
import mysql from "../icons/mysql.png";

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
    title: "database",
    eventKey: "database",
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

const databaseItems = [
  {
    image: graphql,
    alt: "graphql icon",
    name: "GraphQL",
  },
  {
    image: mongodb,
    alt: "mongodb icon",
    name: "MongoDB",
  },
  {
    image: mysql,
    alt: "mysql icon",
    name: "MySQL",
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
    data: databaseItems,
    eventKey: "database",
  },
];
