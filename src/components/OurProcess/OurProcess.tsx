// Outside packages
import classNames from 'classnames';
import react from 'react';

// Components

// Images
import ProcessCircle from '../../images/processCircle.svg';
import test from '../../images/test.png';

// Utils
import classnames from 'classnames';

// Styles
import './OurProcess.scss';

const OurProcess = () => {
  // ====================
  // Variables
  // ====================
  const allContent = [
    {
      title: 'Discovery',
      text: 'Understand your business, its goals, and how technology can help you get there',
    },
    {
      title: 'Solutioning',
      text: 'Create a unique technology solution catered to your business needs',
    },
    {
      title: 'Design',
      text: 'Bring your strategy and vision to life with powerful design that makes your brand stand out from the crowd',
    },
    {
      title: 'Develop',
      text: `Our expert developers build
      your solution in an agile format
      and ensure it is well-tested`,
    },
    {
      title: 'Deliver',
      text: 'We deliver your custom product to you and only consider the job finished if you are completely satisfied with the end results',
    },
    {
      title: 'Support',
      text: 'Even after delivery, our team monitors performance and security to make sure that what we delivered meets our high expectations',
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
  const displayContent = () => {
    const left: any = [];
    const right: any = [];
    allContent.map((content, i) => {
      const { title, text } = content;

      const ele = (
        <div
          className={classnames({
            'our-process__content-item-wrapper': true,
            'our-process__content-item-wrapper-left': i % 2 === 1,
          })}
        >
          <div className="our-process__process-image-text-wrapper">
            <div className="our-process__content-item-process-text-wrapper">
              <span>{title}</span>
              <span className="our-process__content-item-process-number">
                {i + 1}
              </span>
            </div>
            <img
              className="our-process__content-item-process-circle"
              src={ProcessCircle}
              alt="process circle"
            />
          </div>
          <p
            className={classnames({
              'our-process__process-text-right': i % 2 === 0,
              'our-process__process-text-left': i % 2 === 1,
            })}
          >
            {text}
          </p>
        </div>
      );

      if (i % 2 === 0) {
        right.push(ele);
      } else if (i % 2 === 1) {
        left.push(ele);
      }
    });

    return (
      <div className="our-process__all-content-item-wrapper">
        <div className="our-process__all-content-item our-process__content-item-right">
          {right}
        </div>
        <div className="our-process__all-content-item our-process__content-item-left">
          {left}
        </div>
      </div>
    );
  };
  // ====================
  // Return
  // ====================

  return (
    <div id="process" className="our-process">
      <h2 className="our-process__header">OUR PROCESS</h2>
      <p>
        Throughout the whole process, our team makes sure that we are constantly
        aligning with your vision, mission, and values through various forms of
        communication and touchpoints
      </p>
      {displayContent()}
    </div>
  );
};

export default OurProcess;
