import Layout from "../components/layout";
import Link from "next/link";

const PostLink = ({ title ,slug }) => {

    return (
        <li>
            <Link  as={slug} href={`post?title=${title}`}> 
                <a> {title} </a>
            </Link> 
        </li>
    )
}

const Blog = () => {

    return (
        <Layout>
        <ul>
        <PostLink slug="react-post" title="react"/> 
        <PostLink slug="angular-post" title="angular"/> 
        </ul>
        </Layout>
    )
}

export default Blog;