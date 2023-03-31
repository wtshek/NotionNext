import { Typography, typographyStyleMap } from './Typography'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { TbWriting } from 'react-icons/tb'

const ContactIconSize = 30
const connections = [
  { Icon: TbWriting, url: 'https://wingtungshek.com', key: 'blog' },
  {
    Icon: BsLinkedin,
    url: 'https://www.linkedin.com/in/wing-tung-shek/',
    key: 'linkedin'
  },
  { Icon: BsGithub, url: 'https://github.com/wtshek', key: 'github' },
  { Icon: MdEmail, url: 'mailto:wtshek119@gmail.com', key: 'email' }
]

const Contact = ({ className, id }) => {
  return (
    <section
      id={id}
      className={`flex bg-slate-400 mb-[84px] md:mb-0 md:justify-between  flex-col md:flex-row px-16 py-8 md:px-32 md:p-8 md:min-h-[200px] lg:p-16 ${className}`}
    >
      <Typography type={typographyStyleMap.xl}>
        Keep <br /> in Touch
      </Typography>
      <div className="flex flex-col justify-between items-start h-auto">
        {connections.map(({ Icon, key, url }) => {
          return (
            <div key={key} className="flex">
              <Icon style={{ color: 'white' }} size={ContactIconSize} />
              <a href={url}>
                <Typography className="ml-4">{url}</Typography>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Contact
