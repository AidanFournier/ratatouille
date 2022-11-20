import styled from '@emotion/styled';

import { SelectWrapper } from "@tablecheck/tablekit-select";
import { BREAKPOINTS } from 'Layouts';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';
import { Tag } from '@tablecheck/tablekit-tag';

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
    h4 {
        text-align: center;
        font-size: 14px;
        color: black;
    }
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

export const CardContainer = styled.div`
    padding: 0 25px 25px 25px;
`;

export const CardTitle = styled.h2`
   margin-bottom: 20px;
`;

export const TagsContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

export const CardTag = styled(Tag)`
    margin: 0 5px 5px 0;
`;