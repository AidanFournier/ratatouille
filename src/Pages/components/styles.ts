import styled from '@emotion/styled';

import { SelectWrapper } from "@tablecheck/tablekit-select";
import { BREAKPOINTS } from 'Layouts';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';

export const FilterContainer = styled.div`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    margin-top: 2rem;
`;

export const FilterWrapper = styled(SelectWrapper)`
    padding-bottom: 2rem;
`;

export const RestaurantModalDialog = styled(ModalDialog)`
    margin-top: 2rem;
`;

export const RestaurantModalContainer = styled.div`
    margin: 20px 0;
    h4 {
        padding-bottom: 15px;
        margin: 10px 0;
        border-bottom: 1px solid;
    }
    @media (min-width: ${BREAKPOINTS.tablet}) {
        margin: 20px;
    }
`;

export const MapContainer = styled.div`
    box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.2);
    border-radius: 25px;
`