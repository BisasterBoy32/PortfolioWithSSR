import Layout from "../components/layout";

export default ( {error} ) => {
    return (
        <Layout title="Error">
        { error ? error : "Coudn't find this Page 404" }
        </Layout>
    )
}