import Image from 'next/image'
import About from '@/components/portfolio/About'
import Menu from '@/components/portfolio/Menu'
import Nestjs from '../public/nest-js.svg'
import React from '../public/react.svg'
import Nextjs from '../public/next-js.svg'
import Typescript from '../public/typescript.svg'

import Contact from '@/components/portfolio/Contact'
import Projects from '@/components/portfolio/Projects'

const TechIconWidth = 100

// TODO: locomotive for mobile?
// TODO: add CV download button on mobile

const tech = [
  { image: React, key: 'react' },
  { image: Nextjs, key: 'nextjs' },
  { image: Nestjs, key: 'nestjs' },
  { image: Typescript, key: 'typescript' }
]

const menu = {
  about: { id: 'about', label: 'About' },
  experience: { id: 'experience', label: 'My Experience' },
  contact: { id: 'contact', label: 'Contact' }
}

const Portfolio = () => {
  return (
    <>
      <Menu data={Object.values(menu)} />
      <About id={menu.about.id} />
      <section className="hidden md:flex justify-around p-4 bg-slate-400">
        {tech.map(({ image, key }) => (
          <Image key={key} alt={key} src={image} width={TechIconWidth} />
        ))}
      </section>
      <Projects id={menu.experience.id} />
      <Contact id={menu.contact.id} />
    </>
  )
}

export default Portfolio
