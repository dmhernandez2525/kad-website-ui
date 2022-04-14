// Outside packages
import react from 'react';

// Components

// Images
import ProcessCircle from '../../images/processCircle.svg';
import test from '../../images/test.png';

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
    return allContent.map((content, i) => {
      const { title, text } = content;
      return (
        <div className="our-process__content-item-wrapper">
          <div>
            <img
              className="our-process__content-item-process-circle"
              src={ProcessCircle}
              alt="process circle"
            />
            <div className="our-process__content-item-process-text-wrapper">
              <span>{title}</span>
              <span>{i}</span>
            </div>
          </div>
          <p>{text}</p>
        </div>
      );
    });
  };
  // ====================
  // Return
  // ====================

  return (
    <div id="process" className="our-process">
      <h2 className="our-process__header">OurProcess</h2>
      <img src={test} alt="" />
      {/* 
      <div>
        <div>
          <img src="" alt="" />
          <span>Vision Mission Values</span>
        </div>
        <p>
          Throughout the whole process, our team makes sure that we are
          constantly aligning with your vision, mission, and values through
          various forms of communication and touchpoints
        </p>
      </div>
      <div className="our-process__content-items-wrapper">
        {displayContent()}
      </div> */}
    </div>
  );
};

export default OurProcess;
