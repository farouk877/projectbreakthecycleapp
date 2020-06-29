import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BlogHome from "../components/BlogHome";

const NewsPage = () => {
    return (
        <Layout pageTitle="PBTC | Updates">
            <NavOne />
            <PageHeader title="Updates" />
            <BlogHome />
            <Footer />
        </Layout>
    );
};

export default NewsPage;
