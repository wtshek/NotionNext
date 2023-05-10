import BlogPostListScroll from './components/BlogPostListScroll'
import BlogPostListPage from './components/BlogPostListPage'
import LayoutBase from './LayoutBase'
import BLOG from '@/blog.config'
import { isBookCategory } from '@/lib/utils'
import BookTagFilter from './components/BookTagFilter'
import {
  TagOptionType,
  MetaType,
  PostColumnAttributesType,
  SiteInfoType
} from '@/utils/types'
import { useCallback, useEffect, useState } from 'react'

type LayoutCategoryProps = {
  category: string
  tagOptions: TagOptionType[]
  meta: MetaType
  latestPost: PostColumnAttributesType[]
  posts: PostColumnAttributesType[]
  postCount: number
  siteInfo: SiteInfoType
  currentSearch?: string
  showSummary?: boolean
}

export const LayoutCategory: React.FC<LayoutCategoryProps> = props => {
  const { category, tagOptions, posts, siteInfo } = props
  const [selectedTag, setSelectedTag] = useState(tagOptions[0])
  const [currentPosts, setCurrentPosts] = useState(posts)

  const onTagClick = useCallback((tag: TagOptionType) => {
    setSelectedTag(tag)
    if (!tag) {
      setCurrentPosts(posts)

      return
    }
    const post = posts.filter(post => post.tags.includes(tag.name))
    setCurrentPosts(post)
  }, [])

  return (
    <LayoutBase {...props}>
      <div className="cursor-pointer text-lg px-5 py-1 mb-2 font-light hover:text-indigo-700 dark:hover:text-indigo-400 transform dark:text-white">
        <i className="mr-1 far fa-folder-open" />
        {category}
      </div>
      {isBookCategory(category) && (
        <BookTagFilter
          items={tagOptions}
          onItemClick={onTagClick}
          selectedTag={selectedTag}
        />
      )}
      {BLOG.POST_LIST_STYLE === 'page' ? (
        <BlogPostListPage {...props} />
      ) : (
        <BlogPostListScroll
          posts={currentPosts}
          shouldUseGrid={isBookCategory(category)}
          siteInfo={siteInfo}
        />
      )}
    </LayoutBase>
  )
}
