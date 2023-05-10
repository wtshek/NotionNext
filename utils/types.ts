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

export type TagOptionType = {
  color: string
  count: number
  id: string
  name: string //unique as well
}

export type MetaType = {
  description: string
  image: string
  slug: string
  title: string
  type: string
}

export type PostColumnAttributesType = {
  category: string[]
  createdTime: string
  date: {
    start_date: string
  }
  fullWidth: boolean
  id: string
  lastEditedTime: string
  page_cover: string
  password: string
  slug: string
  status: string
  tagItems: Pick<TagOptionType, 'color' | 'name'>
  tags: string[]
  title: string
  type: string
}
