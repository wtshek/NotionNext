import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Typography } from '@/components/portfolio/Typography'

const defaultClassName =
  'flex justify-center pt-10 px-8 pb-8 w-full z-10 bg-black shadow-md shadow-black'

const Header = ({ className, data }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'wheel',
      () => {
        window.scrollY > 0 ? setIsHeaderFixed(true) : setIsHeaderFixed(false)
      },
      []
    )
  })

  const renderMenu = onClick => (
    <div className="flex justify-between w-full md:w-2/3 scroll-smooth">
      {data.map(item => (
        <Link
          href={`#${item.id}`}
          scroll={false}
          key={item.id}
          onClick={onClick}
        >
          <Typography>{item.label}</Typography>
        </Link>
      ))}
    </div>
  )

  return (
    <>
      {/* menu for desktop */}
      <div className="hidden md:block">
        <header
          className={clsx({
            [defaultClassName]: true,
            [className || '']: true
          })}
        >
          {renderMenu()}
        </header>
        <header
          className={clsx({
            hidden: !isHeaderFixed,
            '!translate-y-0': isHeaderFixed,
            'fixed translate-y-[-200px] top-0 left-0 transition-transform duration-1000': true,
            [defaultClassName]: true,
            [className || '']: true
          })}
        >
          {renderMenu()}
        </header>
      </div>
      {/* menu for mobile */}
      <div className="fixed bottom-0 w-screen px-16 py-8 bg-black flex just md:hidden shadow-md shadow-black">
        {renderMenu()}
      </div>
    </>
  )
}

export default Header
