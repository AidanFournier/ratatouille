import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

// import { HomeHeadline, HomeWrapper } from './styles';
import { Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardButton, CardTag  } from './styles';
import { PageWrapper, PageContent, Headline, PageImage} from 'Layouts';
import { TopNav } from 'Layouts/TopNav'
import { Footer } from 'Layouts/Footer'

export function Restaurants({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  const [t, { language }] = useTranslation();
  const [ restaurants, setRestaurants ] = useState({})

  const location = useLocation().state as {
      restaurants: [],
      id: string,
      img: string,
      name: string,
      tags: string[],
      cuisines: string[],
      distance: number,
      content_body_translations: string
  };

  console.log(location);

  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <PageWrapper>
        <PageContent>



          <div className="controls__panel"></div>
          <div>
            <div className="search-bar">Search Results</div>
            <ResultsContainer>
              {location.restaurants.map((restaurant: any) => {
                return (
                  <Card>
                    <CardImg src={restaurant.search_image ? restaurant.search_image : ""} alt="Restaurant cover" />
                    <CardContainer>
                      <CardTitle>{restaurant.name[1]}</CardTitle>
                      <TagsContainer>
                        {restaurant.cuisines.map((cuisine: string) => {
                          return <CardTag size="small" color="#7935D2">{cuisine}</CardTag>
                        })}
                      </TagsContainer>
                        <CardButton  onClick={function noRefCheck(){}}>
                          More
                        </CardButton>
                    </CardContainer>
                  </Card>)
              })}
            </ResultsContainer>
          </div>
        </PageContent>
 


        <Helmet>
          <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
            'keywords.app_name'
          )}`}</title>
        </Helmet>
      </PageWrapper>
      <Footer />
    </>
  )
}
