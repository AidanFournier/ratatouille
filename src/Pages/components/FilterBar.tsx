import {  InputButton } from '@tablecheck/tablekit-input-button';

type FilterProps = {
    cuisines: {[key: string]: any}
    // cuisines: string[]
}

export function FilterBar ({cuisines}: FilterProps) {

    const defaultFilterDetails = {
        cuisines: {}
    }
    console.log(cuisines);

    return (
        <div>
            <div>
                {/* {cuisines.map(cuisine) => {
                    <InputButton id="smoking" name="breakfast" value="breakfast">
                        {cuisine}
                    </InputButton>
                }} */}
                
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