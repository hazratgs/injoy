import React from 'react'
import { connect } from 'react-redux'
import NewsOtherItem from '../../components/NewsOtherItem'
import { AppState } from '../../types/state'
import { INewsItem } from '../../types/news'
import { Container, Title } from './styles'

interface IProps {
  items: INewsItem[]
}

const enhance = connect(
  (state: AppState) => ({ items: state.news.items })
)

const NewsOther = (props: IProps) => {
  const items = props.items.map(item => <NewsOtherItem {...item} />)
  return (
    <Container>
      <Title>Другие новости</Title>
      {items}
    </Container>
  )
}

export default enhance(NewsOther)
