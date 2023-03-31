import clsx from 'clsx'

export const typographyStyleMap = {
  h1: 'font-bold text-4xl sm:text-6xl',
  h3: 'font-bold text-xl sm:text-3xl',
  xs: 'text-xs',
  xl: 'font-bold text-6xl lg:text-9xl'
}

export const typographyColorMap = {
  default: 'text-white',
  light: 'text-gray-500',
  lighter: 'text-gray-600',
  themed: 'text-slate-400'
}

export const Typography = ({
  children,
  className,
  type,
  color = 'text-white'
}) => {
  return (
    <div
      className={clsx({
        'text-sm md:text-base': !type,
        [type]: !!type,
        [color]: !!color,
        [className]: !!className
      })}
    >
      {children}
    </div>
  )
}
