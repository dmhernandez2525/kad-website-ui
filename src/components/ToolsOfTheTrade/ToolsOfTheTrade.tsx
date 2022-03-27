// Outside packages
import react from 'react';
import classnames from 'classnames';
// Components
import Card from '../Card';

// Images

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
  const displayAllSections = () => {
    return allSections.map((sectionInfo) => {
      const { sectionTitles, icons } = sectionInfo;
      const allIcons = icons.map((icon) => (
        <img
          className={classnames({
            'tools-of-the-trade__platform-icons': sectionTitles === 'Platforms',
            'tools-of-the-trade__toolsandframeworks-icons':
              sectionTitles === 'Tools & Frameworks',
            'tools-of-the-trade__languages-icons':
              sectionTitles === 'Languages',
          })}
          src={icon}
          alt=""
        />
      ));

      return (
        <div className="tools-of-the-trade__icon-wrapper">
          <h3>{sectionTitles}</h3>
          <Card>
            <div>{allIcons}</div>
          </Card>
        </div>
      );
    });
  };
  // ====================
  // Return
  // ====================

  return (
    <div id="toolsofthetrade" className="tools-of-the-trade">
      <h2>Tools of the Trade</h2>

      <p>
        We know there's no such thing as "one size fits all." That's why we are
        always learning the newest technologies. We ensure that your custom
        solution not only solves your current challenges, but your future ones
        too.
      </p>
      <div className="tools-of-the-trade__all-icon-wrapper">
        {displayAllSections()}
      </div>
    </div>
  );
};

export default ToolsOfTheTrade;
