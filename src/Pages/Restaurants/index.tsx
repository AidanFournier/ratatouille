import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

// import { HomeHeadline, HomeWrapper } from './styles';



export function Restaurants(): JSX.Element {
    const [t, { language }] = useTranslation();
    console.log("Hello from Restaurants");

    const location = useLocation();
    console.log(location.state);
  
    return (
    <div>Restaurants</div>
  )
}
