import {  InputButton } from '@tablecheck/tablekit-input-button';

type FilterProps = {
    cuisines: {[key: string]: any},
}

export function FilterBar ({cuisines}: FilterProps) {

    const defaultFilterDetails = {
        cuisines: {}
    }

    return (
        <div>
            <div>
                {/* {cuisines.map} */}
                <InputButton id="smoking" name="breakfast" value="breakfast">
                    Smoking OK
                </InputButton>
            </div>
            
            <InputButton id="breakfast" name="breakfast" value="breakfast">
                Business
            </InputButton>
            <InputButton id="breakfast" name="breakfast" value="breakfast">
                Private
            </InputButton>
        </div>
    )
}