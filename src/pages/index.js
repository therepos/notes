import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpdatesMarkdown from '@site/src/data/updates.md';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 100,
      duration: 800,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Layout>
      {/* First Segment (Dark Hero) */}
      <section className="heroSection">
        <div className="container">
          <div className="cardRow" data-aos="fade-down">
            <Card title="Home" link="/Home" description="General resources, quick notes, and documentation." />
            <Card title="CISA" link="/Cisa" description="Study notes and materials for the CISA exam." />
            <Card title="Blog" link="/blog" description="Latest posts, updates, and articles." />
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="sectionDivider"></div>

      {/* Second Segment (Updates) */}
      <section className="updateSection">
        <div className="container">
          <div className="updateCard" data-aos="zoom-in">
            <UpdatesMarkdown />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Card({ title, link, description }) {
  return (
    <div className="card" data-aos="fade-up">
      <h3><Link to={link}>{title}</Link></h3>
      <p>{description}</p>
    </div>
  );
}
