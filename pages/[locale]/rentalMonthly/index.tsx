import Head from 'next/head'
import {makeStaticProps, getStaticPaths} from "../../../lib/getStatic";
import MonthlyRental from "../../../components/page/MonthlyRental";

const getStaticProps = makeStaticProps(['monthlyRental', 'common']);
export {getStaticPaths, getStaticProps};


export default function RentalMonthly() {
    return (
        <>
            <MonthlyRental/>
        </>

    )
}

