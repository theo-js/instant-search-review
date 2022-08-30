import { useHits } from "react-instantsearch-hooks-web";
import { ContactType } from "../../../../types/contact";

type ContactResponse = {
    id: string;
    firstname: string;
    lastname: string;
    companyName: string;
    mailAddress: string;
    type: ContactType;
}

interface HitProps<T> {
    hit: T;
}

const Hit = ({ hit }: HitProps<ContactResponse>) => {
    const { companyName, firstname, lastname, mailAddress, type } = { ...hit };
    return <li style={{ marginBottom: '1rem', borderBottom: '1px dashed #AAA' }}>
        <h3>{type === ContactType.Company ? companyName : `${firstname} ${lastname}`}</h3>
        <p>{mailAddress}</p>
    </li>
}

export const Hits = () => {
    const hitsApi = useHits<ContactResponse>();

    return <ul style={{ borderTop: '4px double #A8A', width: '100%' }}>
        {
            hitsApi.hits.map((hit) => (
                <Hit key={hit.id} hit={hit} />
            ))
        }
    </ul>;
}