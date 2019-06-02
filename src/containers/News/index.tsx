import React, { PureComponent } from 'react'
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

class News extends PureComponent<IProps> {
  render() {
    const items = this.props.items.map((item, i) => {
      const big = ((i + 1) % 4) === 0
      
      if (big) return <BigNews key={i} {...item} />
      return <SmallNews key={i} {...item} />
    })
    return (
      <Container>
        {items}
      </Container>
    )
  }
}

export default enhance(News)
