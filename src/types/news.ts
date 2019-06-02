export interface INewsState {
  items: INewsItem[],
  types: INewsType[],
  selectedTypes: number[]
}

export interface INewsItem {
  title: string,
  image: string,
  category: string,
  description: string
}

export interface INewsType {
  id: number,
  name: string
}
