// Outside packages
import react from 'react';
import classnames from 'classnames';
// Components
import Card from '../Card';

// Images
import one from '../../images/ToolsofTheTrade/1.png';
import two from '../../images/ToolsofTheTrade/2.png';
import three from '../../images/ToolsofTheTrade/3.png';

// PLATFORMS
import AzureDevOps from '../../images/PLATFORMS/azuredevops.png';
import Github from '../../images/PLATFORMS/github.png';
import Gitlab from '../../images/PLATFORMS/gitlab.png';
import AWS from '../../images/PLATFORMS/aws.png';
import MongoDB from '../../images/PLATFORMS/mongodb.png';
import TravisCI from '../../images/PLATFORMS/travis.png';

// TOOLS & FRAMEWORKS
import Angular from '../../images/TOOLSFRAMEWORKS/angular.png';
import Apollo from '../../images/TOOLSFRAMEWORKS/Apollo.png';
import Backbone from '../../images/TOOLSFRAMEWORKS/Backbone.png';
import CICD from '../../images/TOOLSFRAMEWORKS/CICD.png';
import Django from '../../images/TOOLSFRAMEWORKS/django.png';
import Docker from '../../images/TOOLSFRAMEWORKS/docker.png';
import Express from '../../images/TOOLSFRAMEWORKS/express.png';
import Flask from '../../images/TOOLSFRAMEWORKS/Flask.png';
import Gatsby from '../../images/TOOLSFRAMEWORKS/gatsby.png';
import GIT from '../../images/TOOLSFRAMEWORKS/git.png';
import GraphQL from '../../images/TOOLSFRAMEWORKS/graphql.png';
import Jest from '../../images/TOOLSFRAMEWORKS/jest.png';
import Kubernets from '../../images/TOOLSFRAMEWORKS/kubernets.png';
import ASPNETCore from '../../images/TOOLSFRAMEWORKS/netcore.png';
import NextJS from '../../images/TOOLSFRAMEWORKS/nextjs.png';
import NodeJS from '../../images/TOOLSFRAMEWORKS/nodejs.png';
import Rails from '../../images/TOOLSFRAMEWORKS/rails.png';
import React from '../../images/TOOLSFRAMEWORKS/react.png';
import Redux from '../../images/TOOLSFRAMEWORKS/redux.png';
import Rspec from '../../images/TOOLSFRAMEWORKS/Rspec.png';
import RTL from '../../images/TOOLSFRAMEWORKS/RTL.png';
import Spring from '../../images/TOOLSFRAMEWORKS/spring.png';
import SQL from '../../images/TOOLSFRAMEWORKS/SQL.png';
import Vue from '../../images/TOOLSFRAMEWORKS/vue.png';

// LANGUAGES
import CPP from '../../images/LANGUAGES/c.png';
import CSharp from '../../images/LANGUAGES/C#.png';
import CSS3 from '../../images/LANGUAGES/css3.png';
import HTML5 from '../../images/LANGUAGES/html5.png';
import Java from '../../images/LANGUAGES/java.png';
import JavaScript from '../../images/LANGUAGES/javascript.png';
import NoSQL from '../../images/LANGUAGES/NoSQL.png';
import PHP from '../../images/LANGUAGES/php.png';
import Ruby from '../../images/LANGUAGES/ruby.png';
import Scss from '../../images/LANGUAGES/Scss.png';
import Swift from '../../images/LANGUAGES/swift.png';
import TypeScript from '../../images/LANGUAGES/typescript.png';

// Styles
import './ToolsOfTheTrade.scss';
import classNames from 'classnames';

const ToolsOfTheTrade = () => {
  // ====================
  // State
  // ====================

  // ====================
  // Variables
  // ====================
  const allSections = [
    {
      sectionTitles: `Platforms`,
      icons: [AzureDevOps, Github, Gitlab, AWS, MongoDB, TravisCI],
    },
    {
      sectionTitles: `Tools & Frameworks`,
      icons: [
        Angular,
        Apollo,
        Backbone,
        CICD,
        Django,
        Docker,
        Express,
        Flask,
        Gatsby,
        GIT,
        GraphQL,
        Jest,
        Kubernets,
        ASPNETCore,
        NextJS,
        NodeJS,
        Rails,
        React,
        Redux,
        Rspec,
        RTL,
        Spring,
        SQL,
        Vue,
      ],
    },
    {
      sectionTitles: `Languages`,
      icons: [
        CPP,
        CSharp,
        CSS3,
        HTML5,
        Java,
        JavaScript,
        NoSQL,
        PHP,
        Ruby,
        Scss,
        Swift,
        TypeScript,
      ],
    },
  ];
  // ====================
  // State
  // ====================

  // ====================
  // Handle Methods
  // ====================

  // ====================
  // Display Functions
  // ====================
  // const displayAllSections = () => {
  //   return allSections.map((sectionInfo) => {
  //     const { sectionTitles, icons } = sectionInfo;
  //     const allIcons = icons.map((icon) => (
  //       <img
  //         className={classnames({
  //           'tools-of-the-trade__platform-icons': sectionTitles === 'Platforms',
  //           'tools-of-the-trade__toolsandframeworks-icons':
  //             sectionTitles === 'Tools & Frameworks',
  //           'tools-of-the-trade__languages-icons':
  //             sectionTitles === 'Languages',
  //         })}
  //         src={icon}
  //         alt=""
  //       />
  //     ));

  //     return (
  //       <div className="tools-of-the-trade__icon-wrapper">
  //         <h3>{sectionTitles}</h3>
  //         <Card className="tools-of-the-trade__card">{allIcons}</Card>
  //       </div>
  //     );
  //   });
  // };
  // ====================
  // Return
  // ====================

  return (
    <div id="toolsofthetrade" className="tools-of-the-trade">
      <div className="tools-of-the-trade__text-header-wrapper">
        <h2>Tools of the Trade</h2>

        <p>
          We know there's no such thing as "one size fits all." That's why we
          are always learning the newest technologies. We ensure that your
          custom solution not only solves your current challenges, but your
          future ones too.
        </p>
      </div>
      <div className="tools-of-the-trade__text-header-wrapper">
        <div className="tools-of-the-trade__text-image-wrapper">
          <img className="tools-of-the-trade__text-image" src={one} alt="one" />

          <div
            className="tools-of-the-trade__text-image-main-wrapper 
          tools-of-the-trade__languages"
          >
            <h3>Languages</h3>
            <p>
              Whatever the project requires, we speak it's language. With
              expertise in XYZ, we ensure that every project is covered.
            </p>
          </div>
        </div>
      </div>
      <div className="tools-of-the-trade__text-header-wrapper">
        <div className="tools-of-the-trade__text-image-wrapper">
          <div className="tools-of-the-trade__text-image-main-wrapper tools-of-the-trade__tools-frameworks">
            <h3>Tools & Frameworks</h3>
            <p>
              We've got a few tricks up our sleeves with expertise in a wide
              array of tools and frameworks. Whether it's managing a project
              more effectively or making sure that your business stands out by
              running efficiently and looking its best, we ensure that you are
              covered from A-Z.
            </p>
          </div>

          <img
            className="tools-of-the-trade__text-image"
            src={three}
            alt="three"
          />
        </div>
      </div>
      <div className="tools-of-the-trade__text-header-wrapper">
        <div className="tools-of-the-trade__text-image-wrapper">
          <img className="tools-of-the-trade__text-image" src={two} alt="two" />
          <div className="tools-of-the-trade__text-image-main-wrapper tools-of-the-trade__platforms">
            <h3>Platforms</h3>

            <p>
              A great business cannot thrive without a great foundation. That's
              why we use the best when it comes to how your code, applications,
              data, and everything else is supported. We want to ensure that as
              your business grows, the platforms it uses can scale with you.
            </p>
          </div>
        </div>
      </div>

      <div className="tools-of-the-trade__all-icon-wrapper">
        {/* {displayAllSections()} */}
      </div>
    </div>
  );
};

export default ToolsOfTheTrade;
