// 封装异步加载资源的方法

/**
 * 加载外部资源
 * @param url 地址 例如 https://xx.com/xx.js
 * @param type js 或 css
 * @returns {Promise<unknown>}
 */

enum SpecialCategory {
  BOOK = 'Book'
}

export function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag

    if (type === 'css') {
      tag = document.createElement('link')
      tag.rel = 'stylesheet'
      tag.href = url
    } else if (type === 'font') {
      tag = document.createElement('link')
      tag.rel = 'preload'
      tag.as = 'font'
      tag.href = url
    } else if (type === 'js') {
      tag = document.createElement('script')
      tag.src = url
    }
    if (tag) {
      tag.onload = () => resolve(url)
      tag.onerror = () => reject(url)
      document.head.appendChild(tag)
    }
  })
}

/**
 * 查询url中的query参数
 * @param {}} variable
 * @returns
 */
export function getQueryVariable(variable) {
  const query = isBrowser() ? window.location.search.substring(1) : ''
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return false
}

/**
 * 深度合并两个对象
 * @param target
 * @param sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return mergeDeep(target, ...sources)
}

/**
 * 是否对象
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * 是否可迭代
 * @param {*} obj
 * @returns
 */
export function isIterable(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function'
}

export function deepClone<T>(obj: T): T {
  const newObj: any = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] =
          obj && typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
      }
    }
  }
  return newObj
}

/**
 * 延时
 * @param {*} ms
 * @returns
 */
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * 判断是否客户端
 * @returns {boolean}
 */
export const isBrowser = () => typeof window !== 'undefined'

/**
 * 获取从第1页到指定页码的文章
 * @param pageIndex 第几页
 * @param list 所有文章
 * @param pageSize 每页文章数量
 * @returns {*}
 */
export const getListByPage = function (
  list: unknown[],
  pageIndex: number,
  pageSize: number
): unknown[] {
  return list.slice(0, pageIndex * pageSize)
}

export const splitText = (text, className) => {
  const splitted = text.split('').map((char, index) => {
    return (
      <div key={index} className={className}>
        {char === ' ' ? <>&nbsp;</> : char}
      </div>
    )
  })

  return <div className="flex">{splitted}</div>
}

export const isBookCategory = (category: string): boolean =>
  category === SpecialCategory.BOOK
