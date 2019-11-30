import Layout from "../components/layout";
import { withRouter } from "next/router";

const Post = ({ router}) => {
    return (
    <Layout>
        <h1> { router.query.title}</h1>
        <p> this is a good post </p>
    </Layout>
    )

}

export default withRouter(Post);