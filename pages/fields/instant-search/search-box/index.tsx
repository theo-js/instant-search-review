import { useCallback } from "react";
import { useSearchBox, useSortBy } from "react-instantsearch-hooks-web";

export const CustomSearchBox = () => {
    const queryHook = useCallback<((query: string, hook: (value: string) => void) => void)>(
        (query, search) => {
            search(query);
        }, []
    );

    const searchBoxApi = useSearchBox();

    return <>
        <input
            value={searchBoxApi.query}
            onChange={(e) => {
                searchBoxApi.refine(e.target.value);
            }}
            placeholder="Custom placeholder"
         />
    </>
}