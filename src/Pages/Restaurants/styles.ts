import styled from '@emotion/styled';

import { Headline, PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';
import { Button } from '@tablecheck/tablekit-button';
import { Tag } from '@tablecheck/tablekit-tag';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const CardButton = styled(Button)`
    margin-top: auto;
`
export const CardTag = styled(Tag)`
    margin: 0 5px 5px 0;
`

export const CardImg = styled.img`
    background: cover;
    align-self: center;
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
`

export const Card = styled.div`
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
`

export const CardContainer = styled.div`
    padding: 25px 25px;
`

export const TagsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
`

export const CardTitle = styled.h2`
   margin-bottom: 20px;
`

export const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
`