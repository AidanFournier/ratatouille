import { createContext, ReactNode, useContext, useState } from "react";
import { Restaurants } from "../Pages/Restaurants/index";

type RestaurantsProviderProps = {
    children: ReactNode
};

type Restaurant = {
    _id: string,
    img: string,
    name: string,
    tags: string[],
    cuisines: string[],
    distance: number,
    geocode: {[key: number]: any},
    slug: string,
    content_body_translations: string
};

type RestaurantsContext = {
    resultsNumber: number
};

const RestaurantsContext = createContext({} as RestaurantsContext);

export function useRestaurants() {
    return useContext(RestaurantsContext);
};

export function RestaurantsProvider({ children }: RestaurantsProviderProps) {
    const [ restaurants, setRestaurants ] = useState<Restaurant[]>();

    return (
        // <RestaurantsContext.Provider value={}>
        //     {children}
        // </RestaurantsContext.Provider>
    )
}