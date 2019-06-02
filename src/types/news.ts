export interface INewsState {
  items: INewsItem[],
  types: INewsType[],
  selectedTypes: number[]
}

export interface INewsItem {
  name: string
}

export interface INewsType {
  id: number,
  name: string
}
