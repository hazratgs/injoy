import React from 'react'
import { connect } from 'react-redux'
import SmallNews from '../../components/SmallNews'
import BigNews from '../../components/BigNews'
import { AppState } from '../../types/state'
import { INewsItem } from '../../types/news'
import { Container } from './styles'

interface IProps {
  items: INewsItem[]
}

const enhance = connect(
  (state: AppState) => ({ items: state.news.items })
)

const News = (props: IProps) => {
  const bigNewsItem = window.innerWidth > 768 ? 4 : 5
  const items = props.items.map((item, i) => {
    const big = ((i + 1) % bigNewsItem) === 0

    if (big) return <BigNews key={i} {...item} />
    return <SmallNews key={i} {...item} />
  })

  return (
    <Container>
      {items}
    </Container>
  )
}

export default enhance(News)
