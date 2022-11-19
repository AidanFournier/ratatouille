import { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
// import { useRestaurants } from '.../contexts/RestaurantContext'

import {  FilterBar } from '../components/FilterBar';
import { RestaurantsContent, RestaurantHeadline, RestaurantSubline, Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardTag, PanelContainer, RestaurantsWrapper, RestaurantsImage  } from './styles';
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
      slug: string,
      content_body_translations: string,
      budget_dinner_max: string, 
      budget_dinner_min: string,
      budget_lunch_max: string,
      budget_lunch_min: string
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
    setFilteredShops( filteredData);
  };

  console.log(filteredShops);

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
        // console.log('👹 ERROR:' + err)
      };
    };
  };

  useEffect(() => {
    fetchRestaurant();
    setRestaurantDetails(defaultRestaurantDetails);
  }, [searchRestaurant]);

  console.log(filteredShops);

  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <RestaurantsWrapper>
        <RestaurantsContent>
          
          <PanelContainer>
            <div>Map</div>
            <FilterBar 
              cuisines={cuisineTags} 
              onCuisineFilter={handleFilterCuisine}

            />
            <RestaurantsImage src={ RatThinking } alt="Rat with chef's hat" />
          </PanelContainer>
          
          <div>
            <RestaurantHeadline>Search results:</RestaurantHeadline>
            <RestaurantSubline>{filteredShops.restaurants ? filteredShops.restaurants.length : filteredShops.length} places match your craving.</RestaurantSubline>
            <ResultsContainer layout>
                {filteredShops.restaurants ? 
                  filteredShops.restaurants.map((restaurant: {[key: string]: any}) => {
                    return (
                      <Card layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={restaurant._id}>
                        <CardImg src={restaurant.search_image === undefined ? "https://images.unsplash.com/photo-1569994652340-8bcae2f75ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" : restaurant.search_image} alt="Restaurant cover" />
                        <CardContainer>
                          <CardTitle>{restaurant.name[1]}</CardTitle>
                          <TagsContainer>
                            {restaurant.cuisines.map((cuisine: string) => {
                              return <CardTag size="small" color="#7935D2">{cuisine}</CardTag>
                            })}
                          </TagsContainer>
                  
                          <Modal 
                            handleClick={() => setSearchRestaurant(restaurant.slug)}
                            name={restaurantDetails.name}
                            alt_address={restaurantDetails.alt_address}
                            banner_image={restaurantDetails.banner_image}
                            body={restaurantDetails.body}
                            phone={restaurantDetails.phone}
                            url={restaurantDetails.url}
                            id={restaurantDetails.id}
                          />
                        </CardContainer>
                      </Card>)
                  })
                : 
                filteredShops.map((restaurant: {[key: string]: any}) => {
                  return (
                    <Card layout className="child" animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} key={restaurant._id}>
                      <CardImg src={restaurant.search_image === undefined ? "https://images.unsplash.com/photo-1569994652340-8bcae2f75ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" : restaurant.search_image} alt="Restaurant cover" />
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
                          alt_address = {restaurantDetails.alt_address}
                          banner_image = {restaurantDetails.banner_image}
                          body = {restaurantDetails.body}
                          phone = {restaurantDetails.phone}
                          url = {restaurantDetails.url}
                          id={restaurantDetails.id}
                        />
                      </CardContainer>
                    </Card>)
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
  )
};
