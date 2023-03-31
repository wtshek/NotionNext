import ParamountPlus from '../public/paramount.png'
import Accedo from '../public/accedo.png'
import portfolioCover from '../public/portfolio-cover.png'
import future from '../public/future.jpeg'
import sky from '../public/sky.jpeg'

export const DemoType = {
  video: 'video',
  image: 'image'
}

export const projects = {
  'paramount+': {
    techstack: ['React', 'SCSS', 'Typescript'],
    description:
      'Paramount + is a OTT streaming \n services that has millions of subscribe worldwide. Being part of the team of 20+ dev, I am responsible for the search page, go-to person of analytics and ads.',
    backgroundImages: [
      { src: Accedo, backgroundColor: 'white' },
      { src: ParamountPlus, backgroundColor: '#010A3B' }
    ],
    name: 'Paramount +',
    key: 'paramount+',
    demo: {
      src: '/videos/paramount+_demo.mp4',
      type: DemoType.video
    }
  },
  portfolio: {
    techstack: ['Nextjs', 'Tailwind', 'Javascript'],
    description: 'This is my portfolio',
    backgroundImages: [{ src: portfolioCover, backgroundColor: 'black' }],
    name: 'Portfolio',
    key: 'portfolio',
    demo: {
      src: portfolioCover,
      type: DemoType.image
    }
  },
  future: {
    techstack: ['SA?', 'Fullstack?', '???'],
    description:
      'The possible path I think I can take is to become an SA. I always love designing system, but I know SA is more than that. But the world is changing so fast now that I would simply focus on the current the problem, current team and current project. My dedication to the job is make the team better and solve the problem quickly and effectively.',
    name: 'The Future',
    backgroundImages: [{ src: sky, backgroundColor: 'white' }],
    demo: {
      src: future,
      type: DemoType.image
    }
  }
}
