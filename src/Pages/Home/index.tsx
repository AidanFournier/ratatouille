import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';

import { Form } from './Form';
import { HomeHeadline, HomeWrapper } from './styles';

const defaultCoords = {
  lat: "",
  long: ""
};
// type Coords = {
//   lat: string,
//   long: string
// };

export function Home(): JSX.Element {
  const [t, { language }] = useTranslation();

  const [ location, setLocation ] = useState("");
  const [ coords, setCoords ] = useState(defaultCoords);
  const { lat, long } = coords;


  const urlCoords = `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${location}`;
  const urlShops = `https://staging-snap.tablecheck.com/v2/shop_search?cuisines[]=kaiseki&geo_latitude=${coords.lat}&geo_longitude=${coords.long}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try { 
      console.log(urlCoords)
      const res = await axios.get(urlCoords);
      console.log(res.data);
      const resLat: string = res.data.locations[0].payload.geo.lat.toString();
      const resLong: string = res.data.locations[0].payload.geo.lon.toString();
      const newCoords = { 
        lat: resLat,
        long: resLong
      }
      setCoords(newCoords)
      // console.log(coords);
    } catch (err) {
      console.log('👹 ERROR:' + err)
    };
  };

  console.log(coords);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation((e.target.value));
  };

  return (
    <HomeWrapper>
      {/* <HomeHeadline>{t('attributes.titles.headline')}</HomeHeadline> */}
      {/* Hello world ^ */}

      <h1>Search for a restaurant by location!</h1>

      <form onSubmit={onSubmit}>
        <input type="text" id="search" name="location" value={location} onChange={onChange} />
        <br />
        <button type="submit">Search</button>
      </form>


      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
