import { createContext, ReactNode, useContext, useState } from "react";
import { Restaurants } from "../Pages/Restaurants/index"

type RestaurantsProviderProps = {
    children: ReactNode
};

type Restaurant = {
    id: number,
    distance: number,
    name: string,
    search_image: string
};

type RestaurantsContext = {
    openDetails: () => void,
    closeDetails: () => void
};

const RestaurantsContext = createContext({} as RestaurantsContext);

export function useRestaurants() {
    return useContext(RestaurantsContext);
};

export function RestaurantsProvider({ children }: RestaurantsProviderProps) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ restaurants, setRestaurants ] = useState<Restaurant[]>();

    const openDetails = () => setIsOpen(true);
    const closeDetails = () => setIsOpen(false);

    return (
        <RestaurantsContext.Provider value={{openDetails, closeDetails}}>
            <Restaurants />
            {children}
        </RestaurantsContext.Provider>
    )
}