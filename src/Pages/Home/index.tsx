import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

// import { Form } from './Form';
import { HomeHeadline, HomeWrapper, HomeInput, HomeSearchButton, HomeDescription, HomeForm, HomeImage } from './styles';
// import RatHome from '..../public/static/img/rat-home.png'

const defaultCoords = {
  lat: "",
  long: ""
};

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();
  const navigate = useNavigate();

  const navigateToRestaurants = () => {
    navigate(`/restaurants/${location}`, {state: {restaurants} });
  };

  const [ location, setLocation ] = useState("");
  const [ coords, setCoords ] = useState(defaultCoords);
  const [ restaurants, setRestaurants ] = useState({});

  const urlCoords = `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${location}`;
  const urlShops = `https://staging-snap.tablecheck.com/v2/shop_search?cuisines[]=kaiseki&geo_latitude=${coords.lat}&geo_longitude=${coords.long}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try { 
      const res = await axios.get(urlCoords);
      const newCoords = { 
        lat: res.data.locations[0].payload.geo.lat.toString(),
        long: res.data.locations[0].payload.geo.lon.toString()
      };
      setCoords(newCoords)
      const resShops = await axios.get(urlShops);
      setRestaurants(resShops.data.shops);
      
    } catch (err) {
      console.log('👹 ERROR:' + err)
    };
  };

  useEffect(() => {
    navigateToRestaurants();
  }, [restaurants])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation((e.target.value));
  };


  return (
    <HomeWrapper>
      <HomeHeadline>Welcome to Ratatouille</HomeHeadline>
      <HomeDescription>We're the small, clever rat - we mean app - that will help you find a restaurant in a pinch. </HomeDescription>
      <HomeDescription>Go from crumbs to a meal before you can say 'ratatouille'!</HomeDescription>

      <HomeForm onSubmit={onSubmit}>
        <HomeInput type="search" id="search" name="location" value={location} onChange={onChange} />
        <HomeSearchButton type="submit">Search</HomeSearchButton>
      </HomeForm>
      {/* <HomeImage src={RatHome} alt="Rat with chef's hat" /> */}


      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
