import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import React from "react";

import Booking from "../../../components/page/Booking";

const getStaticProps = makeStaticProps(['booking', 'common']);
export {getStaticPaths, getStaticProps};


export default function BookingPage() {
    return (
        <Booking/>
    )
}

