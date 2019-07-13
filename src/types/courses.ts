export interface ICoursesState {
  items: ICourse[],
  types: string[],
  authors: IAuthors[],
  subjects: string[]
}

export interface ICourse {
  id: string
  authorId: string
  authorName: string
  description: string
  duration: string
  name: string
  rating: number
  tags: string[]
}

export interface IAuthors {
  id: string,
  name: string,
  imageUrl: string
}
