import {
  Typography,
  typographyColorMap,
  typographyStyleMap
} from '@/components/portfolio/Typography'
import Image from 'next/image'
import profilePic from '../../public/selfie.jpeg'

const ProfilePicWidth = 384
const ProfilePicHeight = 512

const About = ({ id }) => {
  return (
    <div
      className="flex flex-col mx-16 my-8 sm:my-16 mb-28 md:my-36 md:mx-32 md:flex-row"
      id={id}
    >
      <div>
        <Typography>Hello, I am</Typography>
        <Typography type={typographyStyleMap.h1}>Shek Wing Tung</Typography>
        <Typography
          type={typographyStyleMap.h3}
          color={typographyColorMap.light}
          className="mt-4 lg:mt-0"
        >
          I build things for better UIUX and performance
        </Typography>
        <Typography
          className="mt-2 md:mt-8 max-w-xl"
          color={typographyColorMap.lighter}
        >
          I am a web developer who specialised in frontend, but also gaining
          different exposure on different technology. Currently I am working on
          being a full-stack developer
        </Typography>
        <div className="hidden md:flex">
          <button className="bg-slate-400 py-4 px-8 w-[200px] mt-4">
            <Typography>Email Me</Typography>
          </button>
          <button className="ml-4">
            <Typography className="underline">Download CV</Typography>
          </button>
        </div>
      </div>
      <div className="aspect-[3/4] w-[60%] sm:w-[250px] md:w-auto shadow-[15px_15px_0px_0px_#94A3B8] md:shadow-[15px_35px_0px_0px_#94A3B8] mt-8 md:mt-0 md:ml-16  md:h-[336px] 2xl:h-[500px]">
        <Image
          src={profilePic}
          alt="profilePic"
          width={ProfilePicWidth}
          height={ProfilePicHeight}
          className="w-full"
        />
      </div>
    </div>
  )
}

export default About
