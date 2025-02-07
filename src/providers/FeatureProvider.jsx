/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const FeatureContext = createContext(null);

const FeatureProvider = ({ children }) => {
    const [searchText, setSearchText] = useState('');

    return (
        <FeatureContext.Provider value={[searchText, setSearchText]}>
            {children}
        </FeatureContext.Provider>
    )
}

export default FeatureProvider;