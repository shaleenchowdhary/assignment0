import { useState } from 'react';
import './Slider.css';
import one from '../assets/images/1.jpg';
import two from '../assets/images/2.jpg';
import three from '../assets/images/3.jpg';
import four from '../assets/images/4.jpg';

const images = [one, two, three, four];

const content = [
  {
    heading: "Let's get Started Together",
    paragraph:
      "Gain a Comprehensive View Of Your Child's Grade, Attendance, Assignments And Assessments.",
  },
  {
    heading: 'Personalized insights await',
    paragraph:
      "Delve Deep Into Detailed Insights On Your Child's Learning Pattern And Performance Metrics.",
  },
  {
    heading: 'Timely Notifications',
    paragraph:
      "Receive Timely Update On Your Child's Achievements, Milestones, And Progress.",
  },
  {
    heading: 'Stay Updated, Stay Informed',
    paragraph:
      "Efforlessly Stay Abreast Of Your Child's Progress And Milestone In Real Time",
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="container">
        <div className="information">
          <h2 className="heading">{content[currentIndex].heading}</h2>
          <p className="paragraph">{content[currentIndex].paragraph}</p>
          <div className="sliderButtons">
            <button
              className="sliderButton"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            >
              Previous
            </button>
            <button
              className="sliderButton"
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>
        <img src={images[currentIndex]} className="sliderImage" alt="" />
      </div>
      <div className="dotButtons">
        {images.map((_, index) => {
          return (
            <div
              className="dotButton"
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={
                index === currentIndex
                  ? { backgroundColor: 'black' }
                  : { backgroundColor: 'white' }
              }
            >
              {}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Slider;
