import { TagOptionType } from '@/utils/types'
import clsx from 'clsx'

type BookTagFilterProps = {
  items: TagOptionType[]
  onItemClick: (tag: TagOptionType) => void
  selectedTag: TagOptionType
}

export const BookTagFilter: React.FC<BookTagFilterProps> = ({
  items,
  onItemClick,
  selectedTag
}) => {
  const onClick = (tag?: TagOptionType) => () => onItemClick(tag)
  const selectedClassName = 'border-b-2 border-solid dark:border-indigo-400'
  const hoverClassName =
    'hover:border-b-2 hover:border-solid dark:hover:border-gray-300'

  return (
    <div className="px-5 py-5">
      <button
        className={clsx(`dark:text-white ${hoverClassName}`, {
          [selectedClassName]: !selectedTag
        })}
        onClick={onClick()}
      >
        All Articles
      </button>
      {items.map(item => (
        <button
          key={item.id}
          className={clsx(`dark:text-white ml-4 ${hoverClassName}`, {
            [selectedClassName]: item.name === selectedTag?.name
          })}
          onClick={onClick(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default BookTagFilter
