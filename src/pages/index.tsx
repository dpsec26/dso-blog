import React from 'react';
import Layout from '@theme/Layout';

import Hero from '../components/hero';
import Skills from '../components/my-skills';
import Projects from '../components/my-project-highlights';
import Contact from '../components/contact';

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}