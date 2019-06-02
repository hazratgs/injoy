export interface ICoursesState {
  items: ICourseItem[],
  types: ICourseType[],
  selectedTypes: number[]
}

export interface ICourseItem {
  name: string
}

export interface ICourseType {
  id: number,
  name: string
}
