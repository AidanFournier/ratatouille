import styled from '@emotion/styled';

import { Headline, PageWrapper, PageImage, BREAKPOINTS } from 'Layouts';
import { pageTransitionEasing, slideUp } from 'styles';
import { Input } from '@tablecheck/tablekit-input'
import { Button } from '@tablecheck/tablekit-button'

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const HomeInput = styled(Input)`
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin-right: 30px;
  }
`
export const HomeSearchButton= styled(Button)`
  // margin: auto;
`

export const HomeDescription = styled.h3`
  text-align: center;
`

export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    align-items: flex-start;
  }
`

export const HomeImage = styled.img`
  width: 4rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 8rem;
    bottom: 5rem;
  }
`