import styled from '@emotion/styled';
import { motion } from "framer-motion/dist/framer-motion";

import { Headline, PageWrapper, BREAKPOINTS, PageContent } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';
import { Button } from '@tablecheck/tablekit-button';

export const RestaurantsWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const RestaurantHeadline = styled(Headline)`
  text-align: left;
  margin: 0;
`;

export const RestaurantSubline = styled.h2`
  text-align: left;
  margin: 0 0 1rem 0;
  font-size: 20px;
`;

export const RestaurantsContent = styled(PageContent)`
    margin: 4rem;
    gap: 2.5rem;
    align-items: center;
    @media (min-width: ${BREAKPOINTS.tablet}) {
        align-items: flex-start;
        gap: 1.5rem;
    }
    @media (min-width: ${BREAKPOINTS.desktop}) {
        align-items: flex-start;
        gap: 4rem;
    }
`;

export const RestaurantsImage = styled.img`
   display: none;
   width: 8rem;
   margin-top: 3rem;
   @media (min-width: ${BREAKPOINTS.tablet}) {
        display: block;
    }
`;

export const CardButton = styled(Button)`
    margin: auto 4rem 2rem 4rem;
    
`;

export const PanelContainer = styled.div`
    width: 328px;
`;

export const ResultsContainer = styled(motion.div)`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1fr);
    gap: 2.5rem;

    @media (min-width: ${BREAKPOINTS.tablet}) {
        grid-template-columns: repeat(1fr);
    }

    @media (min-width: ${BREAKPOINTS.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        gaap: 4rem;
    }
`;

export const FlexSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    p {
        padding-right: 5px;
        font-size: 14px;
        margin: 0;
    }
    @media (min-width: ${BREAKPOINTS.tablet}) {
        flex-direction: row;
    }
`;

export const CardComponent = styled(motion.div)`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 400ms ease;
    &:hover {
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
    }
    @media (min-width: ${BREAKPOINTS.tablet}) {
        max-width: 25rem;
    }
    @media (min-width: ${BREAKPOINTS.desktop}) {
        max-width: 328px;
    }
`;
