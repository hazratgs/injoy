import React from 'react'
import HeaderContent from '../../components/HeaderContent'
import CourseInfo from '../../components/CourseInfo'
import CourseData from '../../components/CourseData'
import Poster from '../../components/Poster'
import CourseHeaderProgress from '../../components/CourseHeaderProgress'
import CourseProgress from '../../components/CourseProgress'
import Tabs from '../../components/Tabs'
import CourseDescription from '../../components/CourseDescription'
import CourseSection from '../../components/CourseSection'
import { ICourseData } from '../../types/courses'
import { TabType } from '../../types/navigations'
import {
  Container,
  Wrapper,
  Content,
  FlexRevert,
  Aside
} from './styles'

const CourseOpen = () => {
  const courseData: ICourseData = {
    lessons: 30,
    videoLength: 6,
    tests: 63,
    tasks: 5
  }

  const tabs: TabType[] = [
    { name: 'Описание курса', to: '/courses/open/722c0141-ad35-4c60-8ba7-86b73e5bf212' },
    { name: 'Об авторе курса', to: '/courses/open/722c0141-ad35-4c60-8ba7-86b73e5bf212/author' }
  ]

  const description = `
    Курс полезен для тех, кто находится в поиске работы и своего дела, а также для тех, кто заинтересован в продвижении по карьерной лестнице. В частности, уроки полезны для работающих в креативной индустрии, сфере науки, образования, фармацевтики, консалтинга, финансов и юриспруденции, для начинающих веб-мастеров, окончивших курсы веб-дизайна и планирующих продвигать свои проекты в сети, а также для руководителей среднего и высшего звена.
    <br /><br />
    Благодаря онлайн-обучению на курсе "Как создать персональный бренд" вы сможете:<br />
    - узнать, с чего начать разработку стратегии персонального брендирования и как продвигать себя с нуля,<br />
    -  научиться использовать инструмент персонального бренда для самостоятельного управления своей карьерой,<br />
    - научиться обращать на себя внимание на динамично меняющемся рынке труда с помощью персонального бренда,<br />
    -  научиться эффективно строить отношения с работодателями с помощью персонального бренда,<br />
    -  научиться получать социальные бонусы от персонального бренда.
   `

  return (
    <Container>
      <Wrapper>
        <CourseHeaderProgress value={32} />
        <HeaderContent to='/' text='Новые подходы к обучению детей' />
        <Content>
          <CourseInfo />
          <FlexRevert>
            <CourseData {...courseData} />
            <Poster
              src='https://habrastorage.org/web/478/1e7/bb2/4781e7bb27a14fb1bf65ec0759266192.jpg'
              title='Вступление и знакомство с автором'
              duration='51:45'
            />
          </FlexRevert>
          <Tabs items={tabs} />
          <CourseDescription text={description} />
        </Content>
      </Wrapper>
      <Aside>
        <CourseProgress value={43} />
        <CourseSection />
      </Aside>
    </Container>
  )
}

export default CourseOpen
