import { StrictMode } from "react";
import Link from "./components/link";
import IconButton from "./components/IconButton";
import Button from './components/Button';
import Tag from './components/Tag'

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
          <header className="text-gray-900 text-center text-3xl float-left font-bold" style={{ whiteSpace: 'nowrap' }}>{'<SS /> '}</header>
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
              <div className="border-[color:var(--gray-default,#FFF)] w-[280px] h-80 shrink-0 border-8 border-solid bg-[color:var(--gray-200,#E5E7EB)] absolute mt-10 ml-10 inline-flex;"></div>
              <img className="z-10 w-[280px] h-80 shrink-0 border-[color:var(--gray-default,#FFF)] border-7 border-solid relative ; " src={require('./assets/Portrait.png')} alt="Portrait Pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-24 px-20 justify-between items-start self-stretch bg-gray-50 ;">
        <div className="flex py-0 px-8 flex-col items-center gap-12 flex-1 ">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-col justify-center items-center self-stretch">
              <Tag>About Me</Tag>
            </div>
          </div>
          <div className="flex items-start gap-12 self-stretch flex-wrap">
            <div className="flex min-w-[444px] flex-col items-start flex-[1_0_0] self-stretch;">
              <div className="w-[440px] h-130">
                <div className="border-[color:var(--gray-200,#E5E7EB)] w-[440px] h-[480px] shrink-0 border-8 border-solid bg-[color:var(--gray-200,#E5E7EB)] absolute mt-10 mr-10 inline-flex;"></div>
                <img className="z-10 w-[440px] h-[480px] shrink-0 border-[color:var(--gray-default,#FFF)] border-7 border-solid relative ml-10 ; " src={require('./assets/Pic.png')} alt="Pic" />
              </div>
            </div>
            <div className="flex min-w-[444px] flex-col items-start gap-6 flex-[1_0_0] self-stretch;">
              <text className="text-[color:var(--gray-900,#111827)] text-3xl not-italic font-semibold leading-9 tracking-[-0.6px]; font-family: Inter;">Curious about me? Here you have it:</text>
              <div className="flex flex-col items-start gap-4 self-stretch;">
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</text>
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</text>
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</text>
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</text>
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">Finally, some quick bits about me.</text>
                <div className="flex items-start gap-2.5 self-stretch">
                  <div className="flex flex-col items-start gap-2.5 flex-1">
                    <ul>
                      <li> B.E. in Computer Engineering</li>
                      <li>Full time freelancer</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-2.5 flex-1">
                    <ul>
                      <li>Avid learner</li>
                      <li>Aspiring indie hacker</li>
                    </ul>
                  </div>
                </div>
                <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-base not-italic font-normal leading-6; font-family: Inter;">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-24 px-20 flex-col justify-center items-center self-stretch bg-[color:var(--gray-default, #FFF)]">
        <div className="flex py-0 px-8 flex-col items-start gap-12 self-stretch">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex flex-col justify-center items-center self-stretch">
              <Tag>Skills</Tag>
            </div>
            <div className="flex flex-col justify-center items-center self-stretch">
              <text className="self-stretch text-[color:var(--gray-600,#4B5563)] text-center text-xl not-italic font-normal leading-7; font-family: Inter;">The skills, tools and technologies I am really good at:</text>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </StrictMode>
  );
}
export default App;