import { useConfigure } from "react-instantsearch-hooks-web";

export const Configure = () => {
    const foo = useConfigure({});
    console.log(foo);
    return <></>;
}