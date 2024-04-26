import Rental from "../../../../components/page/Rental";
import {makeStaticProps,getStaticPaths} from "../../../../lib/getStatic";


const getStaticProps = makeStaticProps(['dailyRental', 'common']);
export {getStaticPaths, getStaticProps};

export default function RentalDaily() {
    return (
        <>
            <Rental/>
        </>

    )
}

