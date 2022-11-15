import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

import { HomeHeadline, HomeWrapper } from './styles';
import { Card, CardImg, CardContainer, TagsContainer } from './styles';
import { PageWrapper, PageContent, Headline, PageImage} from 'Layouts';
import { TopNav } from 'Layouts/TopNav'
import { Footer } from 'Layouts/Footer'
import { Button } from '@tablecheck/tablekit-button';
import { Tag } from '@tablecheck/tablekit-tag';

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
            <div className="results">
              {location.restaurants.map((restaurant: any) => {
                return (
                  <Card>
                    <CardImg src={restaurant.search_image} alt="Restaurant cover" />
                    <CardContainer>
                      <h2>{restaurant.name[1]}</h2>
                      <TagsContainer>
                        {restaurant.cuisines.map((cuisine: string) => {
                          return <Tag color="#7935D2">{cuisine}</Tag>
                        })}
                      </TagsContainer>
                        <Button onClick={function noRefCheck(){}}>
                          More
                        </Button>
                    </CardContainer>
                  </Card>)
              })}
            </div>
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
