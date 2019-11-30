import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () =>  NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default function({ children , title}){

    return (
        <>
            <Head>
                <title> Portfolio </title>
            </Head>
            <header className="header">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/hire"><a>Hire Me</a></Link>
                <Link href="/blog"><a>My Blog</a></Link>
            </header>
            <div className="container"> 
                <h1> {title} </h1>
                {children}
            <footer>
                @ {new Date().getFullYear()}
            </footer>
            </div>
            <style jsx>
                {`
                .header{
                    display : flex;
                    padding : 2rem;
                    justify-content : space-around;
                    align-items : center;
                    background-color : yellowgreen;
                }
                .container {
                    width : max-content;
                    margin : auto;
                    text-align : center;
                }
                body {
                    max-width : 1200px;
                    margin : auto;
                    overflow-x : hidden;
                }
                `}
            </style>
        </>
    )
}