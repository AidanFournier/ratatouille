import styled from '@emotion/styled';

import { Headline, PageWrapper } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const CardImg = styled.img`
    overflow: hidden;
    background: cover;
    align-self: center;
    height: 200px;
    width: 100%;
    object-fit: cover;
`

export const Card = styled.div`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    max-width: 328px;
    overflow: hidden;
`

export const CardContainer = styled.div`
    padding: 20px 25px;
`

export const TagsContainer = styled.div`
    display: flex;
    padding-bottom: 20px;
`