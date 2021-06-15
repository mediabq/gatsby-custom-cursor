import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const IndexPageStyles = styled.main``;

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageStyles>
        <h1>This is where the content on the homepage goes</h1>
      </IndexPageStyles>
    </Layout>
  );
};

export default IndexPage;
