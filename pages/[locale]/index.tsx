import {getStaticPaths, makeStaticProps} from '../../lib/getStatic'
import Home from "../../components/page/Home";

const getStaticProps = makeStaticProps(['home', 'common']);
export {getStaticPaths, getStaticProps};

export default function HomePage() {
    return (<Home/>)
}