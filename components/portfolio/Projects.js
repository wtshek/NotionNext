import clsx from 'clsx'
import {
  Typography,
  typographyColorMap,
  typographyStyleMap
} from './Typography'
import { useState } from 'react'

export const projects = {
  beforeGraduation: {
    key: 'beforeGraduation',
    tabName: 'before Graduation',
    component: (
      <>
        <Typography
          color={typographyColorMap.light}
          type={typographyStyleMap.xs}
          className="italic"
        >
          2020 - 2022
        </Typography>
        <Typography color={typographyColorMap.lighter}>
          I tried to gain different as much experience as I can...
        </Typography>
        <div className="mt-4">
          <Typography color={typographyColorMap.themed}>
            Zeitwerk Gmbh
          </Typography>
          <Typography
            type={typographyStyleMap.xs}
            color={typographyColorMap.light}
          >
            My exchange year in Germany and the beginning of my coding journey!
          </Typography>
          <Typography>
            I built Wikiway website using <mark>Wordpress</mark> and created a
            theme from scratch{' '}
          </Typography>
        </div>
        <div className="mt-4">
          <Typography color={typographyColorMap.themed}>
            Avalade Limited
          </Typography>
          <Typography
            type={typographyStyleMap.xs}
            color={typographyColorMap.light}
          >
            This time I have to designed the UI as well...
          </Typography>
          <Typography>
            Built the frontend of a web app using <mark>Vue</mark>, which is a
            portal for volunteer to claim their transportation fee
          </Typography>
        </div>
        <div className="mt-4">
          <Typography color={typographyColorMap.themed}>
            A & A Limited
          </Typography>
          <Typography
            type={typographyStyleMap.xs}
            color={typographyColorMap.light}
          >
            Truly learn a lot in this period!
          </Typography>
          <Typography>
            Worked on various projects, including <mark>Wordpress</mark>,{' '}
            <mark>React</mark>, <mark>React Native</mark> and{' '}
            <mark>Laravel</mark>
          </Typography>
        </div>
      </>
    )
  },
  afterGraduation: {
    key: 'afterGraduation',
    tabName: 'after Graduation',
    component: (
      <>
        <Typography color={typographyColorMap.themed}>
          Accedo Broadband (Hone Kong)
          <span className="italic"> 2022 - present</span>
        </Typography>
        <Typography color={typographyColorMap.lighter} className="my-4">
          Project I am in...
        </Typography>
        <div>
          <Typography
            color={typographyColorMap.themed}
            className="font-extrabold"
          >
            Paramount +
          </Typography>
          <ul>
            <li>
              <Typography>Tech Stack: React, SCSS, Typescript</Typography>
            </li>
            <li>
              <Typography>
                Worked as part of cross-functional team with 20+ devs to build
                React applications that serve millions+ users
              </Typography>
            </li>
            <li>
              <Typography>
                Wrote unit and integration tests, and performed code reviews to
                reduce bugs and maintain code quality
              </Typography>
            </li>
            <li>
              <Typography>
                Assisted with gathering and implementing functional and
                nonfunctional requirements and communicating clearly regarding
                architectural issues and design solutions.
              </Typography>
            </li>
          </ul>
        </div>
        <div>
          <Typography
            color={typographyColorMap.themed}
            className="font-extrabold mt-16"
          >
            Middleware Boilerplate
          </Typography>
          <ul>
            <li>
              <Typography>Tech Stack: NestJs, Typescript</Typography>
            </li>
            <li>
              <Typography>
                Assisted in creating endpoint to the boilerplate to help faster
                delivery
              </Typography>
            </li>
          </ul>
        </div>
      </>
    )
  },
  portfolio: {
    key: 'portfolio',
    tabName: 'My Portfolio',
    component: <Typography>Just another div</Typography>
  },
  comingSoon: {
    key: 'comingSoon',
    tabName: 'Coming Soon!',
    component: <Typography>Just another div</Typography>
  }
}

const projectKeys = Object.keys(projects)

const Projects = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(projectKeys[0])

  const onMenuItemClick = key => () => {
    setSelectedProject(key)
  }

  return (
    <section className="mx-16 md:mx-32 my-32" id={id}>
      <Typography type={typographyStyleMap.h3}>My Experience</Typography>
      <div className="flex flex-col mt-8 sm:flex-row sm:mt-16 ">
        {/* Menu */}
        <div className="max-w-screen pb-8 sm:pb-0 max-sm:overflow-scroll">
          <div className="flex justify-between flex-row min-w-[500px] sm:min-w-fit sm:flex-col sm:justify-start">
            {projectKeys.map((key, index) => {
              const { tabName } = projects[key]
              return (
                <button
                  onClick={onMenuItemClick(key)}
                  key={key}
                  className={clsx({
                    'text-left': true,
                    'p-2': true,
                    'w-[100px] sm:w-[150px]': true,
                    'shadow-[9px_5px_0px_0px_#94A3B8]': selectedProject === key,
                    'sm:mt-4': index > 0
                  })}
                >
                  <Typography>{tabName}</Typography>
                </button>
              )
            })}
          </div>
        </div>
        {/* contention section */}
        <div className="mt-8 sm:ml-16 sm:mt-0">
          {projectKeys.map(key => {
            const { component } = projects[key]
            return (
              <div
                key={key}
                className={clsx({
                  hidden: selectedProject !== key
                })}
              >
                {component}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
