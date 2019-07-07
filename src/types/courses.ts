export interface ICoursesState {
  items: ICourse[]
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
