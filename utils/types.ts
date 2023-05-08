export type PostTagType = {
  name: string
  color: string
  count: number
}

export type SiteInfoType = {
  pageCover: string
}

export type PostType = {
  id: string | number
  slug: string
  title: string
  date: {
    start_date: string
  }
  lastEditedTime: string
  results: string[]
  summary: string
  category: string
  tagItems: PostTagType[]
  page_cover: string
  blockMap: any
}
