import styled from '@emotion/styled';
import { motion } from "framer-motion/dist/framer-motion";

import { Headline, PageWrapper, BREAKPOINTS, PageContent } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';
import { Button } from '@tablecheck/tablekit-button';
import { Tag } from '@tablecheck/tablekit-tag';


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
    gap: 2rem;
    align-items: center;

    @media (min-width: ${BREAKPOINTS.tablet}) {
        align-items: flex-start;
    }
`;

export const CardButton = styled(Button)`
    margin-top: auto;
`;

export const CardTag = styled(Tag)`
    margin: 0 5px 5px 0;
`;

export const CardImg = styled.img`
    background: cover;
    align-self: center;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
    margin-bottom: 10px;
`;

export const Card = styled(motion.div)`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    max-width: 328px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 400ms ease;
    &:hover {
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
    }
`;

export const CardContainer = styled.div`
    padding: 0 25px 25px 25px;
`;

export const PanelContainer = styled.div`
    width: 328px;
`;

export const TagsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

export const CardTitle = styled.h2`
   margin-bottom: 20px;
`;

export const ResultsContainer = styled(motion.div)`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1fr);
    gap: 2.5rem;

    @media (min-width: ${BREAKPOINTS.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${BREAKPOINTS.desktop}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const FlexSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        padding-right: 5px;
        font-size: 14px;
        margin: 0;
    }
    @media (min-width: ${BREAKPOINTS.tablet}) {
        flex-direction: row;
    }
`;
