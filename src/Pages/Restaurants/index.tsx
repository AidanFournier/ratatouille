import { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { useRestaurants } from '.../contexts/RestaurantContext'

// import { HomeHeadline, HomeWrapper } from './styles';
import { Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardButton, CardTag  } from './styles';
import { Modal } from './Modal';
import { PageWrapper, PageContent, Headline, PageImage} from 'Layouts';
import { TopNav } from 'Layouts/TopNav';
import { Footer } from 'Layouts/Footer';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';

const defaultRestaurantDetails = {
  name: "",
  address: [],
  alt_address: {},
  banner_image: "",
  body: {},
  // title: {locale: "", en: "" },
  phone: "",
  phone_natl: "",
  stations: [],
  url: ""
}


export function Restaurants({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}): JSX.Element {
  const [t, { language }] = useTranslation();
  const [ searchRestaurant, setSearchRestaurant ] = useState("");
  const [ restaurantDetails, setRestaurantDetails ] = useState(defaultRestaurantDetails);

  const urlShopSearch = `https://staging-snap.tablecheck.com/v2/shops/${searchRestaurant}`;

  const location = useLocation().state as {
      restaurants: [],
      id: string,
      img: string,
      name: string,
      tags: string[],
      cuisines: string[],
      distance: number,
      slug: string,
      content_body_translations: string
  };

  const fetchRestaurant = async () => {
    if (searchRestaurant !== "") {
      try { 
        const res = await axios.get(urlShopSearch);
        console.log(res);
        const newRestaurantDetails = {
          name: res.data.shops[0].name,
          address: res.data.shops[0].address,
          alt_address: res.data.shops[0].alt_address,
          banner_image: res.data.shops[0].banner_image,
          body: res.data.shops[0].content_body_translations,
          title: res.data.shops[0].content_title_translations,
          phone: res.data.shops[0].phone,
          phone_natl: res.data.shops[0].phone_natl,
          stations: res.data.shops[0].stations,
          url: res.data.shops[0].url,
          id: res.data.shops[0]._id
        };
        setRestaurantDetails(newRestaurantDetails);
      } catch (err) {
        console.log('👹 ERROR:' + err)
      };
    };
  };

  useEffect(() => {
    fetchRestaurant();
    setRestaurantDetails(defaultRestaurantDetails);
  }, [searchRestaurant]);

  console.log(location);
  console.log(restaurantDetails);

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
                  <Card key={restaurant.id}>
                    <CardImg src={restaurant.search_image ? restaurant.search_image : ""} alt="Restaurant cover" />
                    <CardContainer>
                      <CardTitle>{restaurant.name[1]}</CardTitle>
                      <TagsContainer>
                        {restaurant.cuisines.map((cuisine: string) => {
                          return <CardTag size="small" color="#7935D2">{cuisine}</CardTag>
                        })}
                      </TagsContainer>
               
                      <Modal 
                        handleClick={() => setSearchRestaurant(restaurant.slug)}
                        name = {restaurantDetails.name}
                        address = {restaurantDetails.address}
                        alt_address = {restaurantDetails.alt_address}
                        banner_image = {restaurantDetails.banner_image}
                        body = {restaurantDetails.body}
                        // title = {restaurantDetails.title}
                        phone = {restaurantDetails.phone}
                        phone_natl = {restaurantDetails.phone_natl}
                        stations = {restaurantDetails.stations}
                        url = {restaurantDetails.url}
                      />
                    </CardContainer>
                  </Card>);
              })};
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
