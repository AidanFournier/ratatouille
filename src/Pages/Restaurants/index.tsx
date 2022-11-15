import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

import { HomeHeadline, HomeWrapper } from './styles';
import { Card } from './styles';
import { PageWrapper, PageContent, Headline, PageImage} from 'Layouts';
import { TopNav } from 'Layouts/TopNav'
import { Footer } from 'Layouts/Footer'
import { Button } from '@tablecheck/tablekit-button';

// type Restaurant = {
//   id: string,
//   img: string,
//   name: string,
//   tags: string[],
//   cuisines: string[],
//   distance: number
// }

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
      distance: number
  };
 
  // setRestaurants(prev)

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
                    <img src={restaurant.search_image} alt="Restaurant cover" />
                    <div className="card__info">
                      {restaurant.name}
                      <div className="card__tags">
                        {restaurant.cuisines.map((cuisine: string) => {
                          return <p>{cuisine}</p>
                        })}
                      </div>
                        <Button onClick={function noRefCheck(){}}>
                          More
                        </Button>
                    </div>
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
