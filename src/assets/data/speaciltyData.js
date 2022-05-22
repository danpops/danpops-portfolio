import appium from "../icons/appium.png";
import d3 from "../icons/d3.png";
import cloudformation from "../icons/cloudformation.png";
import github from "../icons/github.png";
import graphql from "../icons/graphql.png";
import java from "../icons/java.png";
import javascript from "../icons/javascript.png";
import jest from "../icons/jest.png";
import native from "../icons/reactnative.png";
import neo4j from "../icons/neo4j.png";
import nodejs from "../icons/nodejs.png";
import python from "../icons/python.png";
import reactjs from "../icons/reactjs.png";
import redux from "../icons/redux.png";
import serverless from "../icons/serverless.png";
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
    image: native,
    alt: "react-native icon",
    name: "React Native",
    href: "https://reactnative.dev",
  },
  {
    image: redux,
    alt: "redux icon",
    name: "Redux",
    href: "https://redux.js.org",
  },
  {
    image: d3,
    alt: "d3 icon",
    name: "D3.js",
    href: "https://d3js.org",
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
    image: serverless,
    alt: "serverless icon",
    name: "Serverless",
    href: "https://www.serverless.com",
  },
  {
    image: cloudformation,
    alt: "cloudformation icon",
    name: "CloudFormation",
    href: "https://aws.amazon.com/cloudformation/",
  },
];

const moreItems = [
  {
    image: jest,
    alt: "jest icon",
    name: "JestJS",
    href: "https://jestjs.io/",
  },
  {
    image: appium,
    alt: "appium icon",
    name: "Appium",
    href: "https://appium.io",
  },
  {
    image: neo4j,
    alt: "neo4j icon",
    name: "Neo4j",
    href: "https://neo4j.com/brand/",
  },
  {
    image: github,
    alt: "github icon",
    name: "GitHub",
    href: "https://github.com",
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
    title: "more",
    data: moreItems,
    eventKey: "more",
  },
];