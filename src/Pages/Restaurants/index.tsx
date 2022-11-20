import { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { useRestaurants } from '.../contexts/RestaurantContext'

import { FilterBar } from '../components/FilterBar';
import { Map } from '../components/Map';
import { RestaurantsContent, RestaurantHeadline, RestaurantSubline, ResultsContainer, PanelContainer, RestaurantsWrapper, RestaurantsImage, CardComponent } from './styles';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import { TopNav } from 'Layouts/TopNav';
import { Footer } from 'Layouts/Footer';
import RatThinking from 'img/rat-thinking.png';

const defaultRestaurantDetails = {
  name: "",
  alt_address: {},
  banner_image: "",
  body: {},
  phone: "",
  url: "",
  id: ""
};

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

  const shops: {[key: string]: any} = useLocation().state as {
      restaurants: {[key: string]: any},
      _id: string,
      img: string,
      name: string,
      tags: string[],
      cuisines: string[],
      distance: number,
      geocode: {[key: number]: any},
      slug: string,
      content_body_translations: string
  };

  const [ cuisineTags, setCuisineTags ] = useState([""]);
  const [ filteredShops, setFilteredShops ] = useState(shops);

  useEffect(() => {
    const allCuisines = shops.restaurants.map((restaurant: {[key: string]: any}) => {
      return restaurant.cuisines;
    });
    const uniqueCuisines: string[] = Array.from(new  Set(allCuisines.flat()))
    setCuisineTags(uniqueCuisines)
  }, []);

  const handleFilterCuisine = (cuisineChoice: string) => {
    const filteredData = shops.restaurants?.filter((shop: {[key: string]: any}) => {
      if(shop.cuisines.includes(cuisineChoice)) {
        return shop;
      }
    });
    setFilteredShops(filteredData);
  };

  const fetchRestaurant = async () => {
    if (searchRestaurant !== "") {
      try { 
        const res = await axios.get(urlShopSearch);
        const newRestaurantDetails = {
          name: res.data.shops[0].name,
          address: res.data.shops[0].address,
          alt_address: res.data.shops[0].alt_address,
          banner_image: res.data.shops[0].banner_image,
          body: res.data.shops[0].content_body_translations,
          title: res.data.shops[0].content_title_translations,
          phone: res.data.shops[0].phone,
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

  const pluralize = (length: number) => {
    if (length === 0) {
      return "places match your craving :("
    } else if (length === 1) {
      return "place matches your craving."
    } else {
      return "places match your craving."
    }
  };

  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <RestaurantsWrapper>
        <RestaurantsContent>
          <PanelContainer>
            <Map
              restaurants={filteredShops.restaurants ? filteredShops.restaurants : filteredShops}
            />
            <FilterBar 
              cuisines={cuisineTags} 
              onCuisineFilter={handleFilterCuisine}
            />
            <RestaurantsImage src={ RatThinking } alt="Rat with chef's hat" />
          </PanelContainer>
          
          <div>
            <RestaurantHeadline>Search results:</RestaurantHeadline>
            <RestaurantSubline>{filteredShops.restaurants ? filteredShops.restaurants.length : filteredShops.length} {pluralize(filteredShops.restaurants ? filteredShops.restaurants.length : filteredShops.length)}</RestaurantSubline>
            <ResultsContainer layout>
                {filteredShops.restaurants ? 
                  filteredShops.restaurants.map((restaurant: {[key: string]: any}) => {
                    return (
                      <CardComponent layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                        <Card
                          id={restaurant._id}
                          image={restaurant.search_image}
                          name={restaurant.name}
                          cuisines={restaurant.cuisines}
                        ></Card>
                        <Modal
                        handleClick={() => setSearchRestaurant(restaurant.slug)}
                        name={restaurantDetails.name}
                        alt_address={restaurantDetails.alt_address}
                        banner_image={restaurantDetails.banner_image}
                        body={restaurantDetails.body}
                        phone={restaurantDetails.phone}
                        url={restaurantDetails.url}
                        id={restaurantDetails.id}
                        ></Modal> 
                      </CardComponent>    
                  )})
                : 
                  filteredShops.map((restaurant: {[key: string]: any}) => {
                    return (
                      <>
                          <Card
                            id={restaurant._id}
                            image={restaurant.search_image}
                            name={restaurant.name}
                            cuisines={restaurant.cuisines}
                          ></Card>
                          <Modal
                          handleClick={() => setSearchRestaurant(restaurant.slug)}
                          name={restaurantDetails.name}
                          alt_address={restaurantDetails.alt_address}
                          banner_image={restaurantDetails.banner_image}
                          body={restaurantDetails.body}
                          phone={restaurantDetails.phone}
                          url={restaurantDetails.url}
                          id={restaurantDetails.id}
                          ></Modal> 
                        </>)
                  })
                }
            </ResultsContainer>
          </div>
        </RestaurantsContent>
 
        <Helmet>
          <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
            'keywords.app_name'
          )}`}</title>
        </Helmet>
      </RestaurantsWrapper>
      <Footer />
    </>
  );
};
