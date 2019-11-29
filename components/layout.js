import Link from "next/link";

export default function({ children , title}){

    return (
        <>
            <header className="header">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/hire">Hire Me</Link>
            </header>
                <h1> {title} </h1>
                {children}
            <footer>
                {new Date().getFullYear()}
            </footer>
            <style jsx>
                {`
                .header{
                    display : flex;
                    padding : 2rem;
                    justify-content : space-around;
                    align-items : center;
                    background-color : yellowgreen;
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