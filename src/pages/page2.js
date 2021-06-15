import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const Page2 = () => {
  return (
    <Layout>
      <h2>Page 2</h2>
      <Link to="/">Back</Link>
    </Layout>
  );
};

export default Page2;
