import styled from '@emotion/styled';

import { SelectWrapper } from "@tablecheck/tablekit-select";

export const FilterContainer = styled.div`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`

export const FilterWrapper = styled(SelectWrapper)`
    padding-bottom: 2rem;
`