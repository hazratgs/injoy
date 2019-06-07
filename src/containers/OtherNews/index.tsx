import React from 'react'
import { connect } from 'react-redux'
import OtherNewsItem from '../../components/OtherNewsItem'
import { AppState } from '../../types/state'
import { INewsItem } from '../../types/news'
import { Container, Title } from './styles'

interface IProps {
  items: INewsItem[]
}

const enhance = connect(
  (state: AppState) => ({ items: state.news.items })
)

const OtherNews = (props: IProps) => {
  const items = props.items.map(item => <OtherNewsItem {...item} />)
  return (
    <Container>
      <Title>Другие новости</Title>
      {items}
    </Container>
  )
}

export default enhance(OtherNews)
