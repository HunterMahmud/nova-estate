import { useLoaderData } from 'react-router-dom';
import EstateSection from '../components/EstateSection';

const EstatePage = () => {
    const homes = useLoaderData();
    console.log(homes);
    return (
        <div>
            <EstateSection homes={homes}></EstateSection>
        </div>
    );
};

export default EstatePage;