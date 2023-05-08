import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const introductionSectionRef = useRef()
  const CVSectionRef = useRef()

  useEffect(() => {
    const onWindowScroll = () => {
      const scroll = window.scrollY + window.innerHeight / 3

      setScrollPosition(scroll)
    }

    const onScroll = window.addEventListener('scroll', onWindowScroll)

    return window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    console.log(scrollPosition)
  }, [scrollPosition])

  return (
    <>
      <section ref={introductionSectionRef} className="h-[200vh]">
        <div
          className={clsx({
            "fixed top-0 w-screen h-screen bg-[url('../public/demo/image1.jpg')] bg-cover opacity-0": true,
            'animate-rotateExpand': scrollPosition < 667,
            'opacity-100': scrollPosition > 10 && scrollPosition < 800
          })}
        />
      </section>
      <section ref={CVSectionRef}>
        <div
          className={clsx({
            "fixed top-0 w-screen h-screen bg-[url('../public/demo/image1.jpg')] bg-cover opacity-0": true,
            'animate-rotateExpand': scrollPosition > 600,
            'opacity-100': scrollPosition > 600 && scrollPosition < 800
          })}
        />
      </section>
    </>
  )
}

export default Portfolio
