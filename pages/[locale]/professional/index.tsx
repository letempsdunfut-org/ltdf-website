import {getStaticPaths, makeStaticProps} from '../../../lib/getStatic'
import Professional from "../../../components/page/Professional";


const getStaticProps = makeStaticProps(['professional', 'common']);
export {getStaticPaths, getStaticProps};

export default function ProfessionalPage() {

    return (
        <>
            <Professional/>
        </>
    )
}

