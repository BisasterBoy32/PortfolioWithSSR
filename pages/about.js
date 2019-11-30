import Layout from "../components/layout";
import axios from "axios";
import Error from "./_error";

const About = ( {res} ) => {

    if (res.name === "Error"){
        return <Error error = {res.message}/>
    }
    const {data} = res;

    return (
        <Layout title="About">
            <p> Hi I'm mohamed And I'm a web developer </p>
            <p> github account : <a href={data.url}>Mohamed </a></p>
            <p> {data.bio} </p>
            <img className="img" src={data.avatar_url} alt="image"/>
            <style jsx>{`
            .img {
                width : 300px;
                margin-bottom : 2rem;
            }
            `}</style>
        </Layout>
    )
}

About.getInitialProps = async () => {
    let res;

    try {
        res = await axios("https://api.github.com/users/bisasterboy32");
    }
    catch (error) {
        res = error
    }

    return { res }
}

export default About