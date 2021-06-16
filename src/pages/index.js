import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const IndexPageStyles = styled.main`
  display: flex;
  align-items: center;
  height: 86vh;
  .image-wrapper {
    width: 65%;
    height: 84%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    margin-left: 2rem;
    .image1 {
      grid-row: 1 / span 3;
      grid-column: 3 / span 2;
      z-index: 2;
      overflow: hidden;
      .animated-image1,
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
    .image2 {
      grid-row: 3 / span 2;
      grid-column: 1 / span 3;
      z-index: 1;
      overflow: hidden;
      .gatsby-image-wrapper {
        height: 100%;
      }
    }
  }
  .text-right {
    width: 35%;
    h1 {
      font-size: var(--font-hero-size);
    }
  }
`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query BannerImagesQuery {
      allFile(filter: { relativeDirectory: { eq: "banner" } }) {
        nodes {
          childrenImageSharp {
            gatsbyImageData(
              height: 800
              placeholder: NONE
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const image1 = data.allFile.nodes[1].childrenImageSharp[0].gatsbyImageData;
  const image2 = data.allFile.nodes[0].childrenImageSharp[0].gatsbyImageData;

  return (
    <Layout>
      <IndexPageStyles>
        <div className="text-right">
          <h1>Let's go yachting!</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic porro
            nulla minima animi eaque deserunt nisi accusantium odio est, nemo
            voluptatem aperiam quae, quidem nostrum commodi magnam maxime
            impedit repudiandae!
          </p>
        </div>
        <div className="image-wrapper">
          <div className="image1">
            <motion.div
              initial={{ y: "-100%", scale: 1.6 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
              className="animated-image1"
              whileHover={{ scale: 1.2 }}
            >
              <Link to="/page2">
                <GatsbyImage image={image1} alt="Boat" />
              </Link>
            </motion.div>
          </div>
          <div className="image2">
            <motion.div
              initial={{ x: "100%", scale: 1.6 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
              className="animated-image2"
            >
              <GatsbyImage image={image2} alt="Wave" />
            </motion.div>
          </div>
        </div>
      </IndexPageStyles>
    </Layout>
  );
};

export default IndexPage;
