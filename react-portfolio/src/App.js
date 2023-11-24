import { StrictMode } from "react";
import Link from "./components/link";
import IconButton from "./components/IconButton";
import Button from './components/Button';

//assets
import BrightnessIcon from './assets/BrightnessIcon.svg';
import LocationIcon from './assets/LocationIcon.svg';
import FigmaIcon from './assets/FigmaIcon.svg';
import GitIcon from './assets/GitIcon.svg';
import TwitterIcon from './assets/TwitterIcon.svg';
//------

function App() {
  return (
    <StrictMode>
      <div className='flex px-20 py-4 justify-between items-center self-stretch'>
        <div className="flex px-8 py-0 justify-between items-center flex-1">
          <header className="text-gray-900 text-center text-3xl float-left" style={{ whiteSpace: 'nowrap' }}>{'<SS /> '}</header>
          <header className='flex justify-center items-center gap-6 float-right'>
            <Link>About</Link>
            <Link>Work</Link>
            <Link>Testimonials</Link>
            <Link>Contact</Link>
            <div>|</div>
            <header className='flex justify-center items-center gap-4 '>
              <IconButton>
                <img src={BrightnessIcon} alt="Brightness Icon" />
              </IconButton>
              <Button>
                Download CV
              </Button>
            </header>
          </header>
        </div>
      </div>
      <div className="flex px-20 py-24 justify-between items-start self-stretch">
        <div className="flex py-0 px-8 items-start gap-12 flex-1 flex-wrap">
          <div className="flex max-w-3xl flex-col justify-center items-start gap-12 self-stretch">
            <div className="flex flex-col justify-center items-start gap-2 self-stretch">
              <header className="color:var(--gray-900,#111827)] text-6xl not-italic font-bold leading-[72px] tracking-[-1.2px]; font-family: Inter;">
                Hi, I’m Sagar 👋
              </header>
              <p className="color:var(--gray-600,#4B5563)] w-[768px] text-base not-italic font-normal leading-6; font-family: Inter;">
                I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-2 self-stretch">
              <div className="flex items-center gap-2 self-stretch">
                <img src={LocationIcon} alt="Location Icon" />
                <text className="color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">Ahmedabad, India</text>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex sq flex-col justify-center items-center">
                  <div className="greenDot"></div>
                </div>
                <text className="color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">Available for new projects</text>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div className="flex items-center gap-1">
                <IconButton>
                  <img src={GitIcon} alt="Github Icon" />
                </IconButton>
                <IconButton>
                  <img src={TwitterIcon} alt="Twitter Icon" />
                </IconButton>
                <IconButton>
                  <img src={FigmaIcon} alt="Figma Icon" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end flex-1 self-stretch picwidth">
            <div className="picContainer">
              <frame></frame>
            </div>
          </div>
        </div>
      </div>
    </StrictMode>
  );
}
export default App;