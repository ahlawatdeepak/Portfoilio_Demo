import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png"
import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
import AWSAmplify from "../assets/aws-amplify-logo.png";
import AWS from "../assets/amazon-web-services.png";
import typeScript from "../assets/ts.png";
import electron from "../assets/electron.png";
import d3 from "../assets/d3.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: AWSAmplify,
      title: "AWS Amplify",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: AWS,
      title: "AWS",
      style: "shadow-white",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: typeScript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: d3,
      title: "D3js",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: electron,
      title: "Electron",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 10,
      src: graphql,
      title: "GraphQL",
      style: "shadow-purple-800",
    },
    {
      id: 11,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 12,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: tailwind,
      title: "tailwindcss",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 15,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 15,
      src:"https://cdn.iconscout.com/icon/free/png-256/nodemon-3550842-2970427.png",
      title: "Nodemon",
      style: "shadow-sky-400",
    },
    {
      id: 16,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 17,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-90vh experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-80vh text-white">
        <div style={{ marginTop:"160px"}}>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
