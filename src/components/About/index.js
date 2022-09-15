import './index.scss';
import Loader from 'react-loaders';

const About = () => {
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          About me
        </h1>
      </div>
    </div>
    <Loader type="pacman"/>
    </>
  );
};

export default About;
