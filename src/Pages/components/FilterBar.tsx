import { useState, useEffect } from 'react';

import {  InputButton } from '@tablecheck/tablekit-input-button';
import { SelectWrapper, Select } from "@tablecheck/tablekit-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type FilterProps = {
    cuisines: string[],
    onCuisineFilter: (a:string) => void
}

export function FilterBar ({cuisines, onCuisineFilter}: FilterProps) {
    const [ filters, setFilters ] = useState({
        cuisine: ""
    });

    
    const handleInput = (field: string) => (e: any) => {
        const value: string = e.value;
    
        setFilters({
            ...filters,
            [field]: value
        });

        switch (field) {
            case "cuisine":
                onCuisineFilter(value);
                break;
            default: 
                break;
        }
    };

    var cuisinesArray: any[] = [];
    cuisinesArray = cuisinesArray.concat(cuisines.map((cuisine: {}) => {
         return {label: cuisine, 
        value: cuisine}
    }))
    // console.log(cuisinesArray)

    return (
        <div>
            <SelectWrapper
                id="cuisineChoice"
                isMessageHidden
            >
                <Select
                iconBefore={<p><FontAwesomeIcon icon={faUtensils as IconProp} /></p>}
                menuPortalTarget={null}
                options={cuisinesArray}
                placeholder="Cuisine"
                onChange={handleInput("cuisine")}
                size="small"
                />
            </SelectWrapper>

            
            <InputButton id="breakfast" name="breakfast" value="breakfast">
                Business
            </InputButton>
            <InputButton id="breakfast" name="breakfast" value="breakfast">
                Private
            </InputButton>
        </div>
    )
}