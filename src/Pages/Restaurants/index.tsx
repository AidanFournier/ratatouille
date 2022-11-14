import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

// import { HomeHeadline, HomeWrapper } from './styles';



export function Restaurants(): JSX.Element {
    const [t, { language }] = useTranslation();
    console.log("Hello from Restaurants");
  
    return (
    <div>Restaurants</div>
  )
}
