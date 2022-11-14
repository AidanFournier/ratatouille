import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { useRestaurants } from '.../contexts/RestaurantContext'

// import { HomeHeadline, HomeWrapper } from './styles';
import { PageWrapper, PageContent, Headline, PageImage} from 'Layouts';
import { PageLayout } from 'Layouts/Page';
import { TopNav } from 'Layouts/TopNav'
import { Footer } from 'Layouts/Footer'


export function Restaurants({
  isDarkMode,
  setDarkMode
}: {
  isDarkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

): JSX.Element {
    const [t, { language }] = useTranslation();
    console.log("Hello from Restaurants");

    const location = useLocation();
    console.log(location.state);
  
  return (
    <>
      <TopNav isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      <PageWrapper>
        <PageContent>
          <div>Restaurants</div>
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
