import React from 'react'
import OtherNews from '../../containers/OtherNews'
import {
  Container,
  Wrappper,
  Head,
  HeadWrapper,
  Title,
  BackButton,
  NewsParams,
  DateTime,
  Author,
  View,
  Image,
  HtmlContent
} from './styles'

const News = () => {
  return (
    <Container>
      <Wrappper>
        <Head>
          <BackButton to='/'>
            <img src='/images/register/left-arrow.svg' alt='back news'/>
          </BackButton>
          <HeadWrapper>
            <Title>За что программисты любят программирование?</Title>
            <NewsParams>
              <DateTime>3 апреля 2018 в 10:42,</DateTime>
              <Author>Антон Куликов</Author>
              <View>22 462</View>
            </NewsParams>
          </HeadWrapper>
        </Head>
        <Image src='https://blog.iteducenter.ua/wp-content/uploads/2017/03/richard-stollman.jpg' />
        <HtmlContent>
          <p>Если вы читаете нас, то, скорее всего, вам нравится программировать. И хоть само по себе программирование является и хорошим средством заработка, и достаточно интересным хобби, наличие интересов вне сферы деятельности — хорошее качество для любого человека. У разносторонних людей и жизнь интереснее, и работа лучше идет.</p>
          <p>Недавно raywenderlich.com провели опрос и узнали, чем программисты увлекаются вне своей основной деятельности.</p>
          <h2>1. Письмо</h2>
          <p>17,5% участников опроса заявили, что очень любят писать. Статьи, публикации в блогах на IT-тематику зачастую пишутся самими разработчиками и работниками в этой сфере.</p>
        </HtmlContent>
      </Wrappper>
      <OtherNews />
    </Container>
  )
}

export default News
