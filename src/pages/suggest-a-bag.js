import React from 'react';
import FormGroup from 'components/FormGroup';
import Layout from 'components/Layout';
import Page from 'components/Page';

const SuggestABag = () => (
  <Layout>
    <Page>
      <h1>Suggest a bag</h1>
      <form name="contact" method="POST" data-netlify="true">
        <FormGroup label="Name" name="name" />
        <FormGroup label="Email" name="email" type="email" />
        <FormGroup label="Link to bag suggestion" name="url" />
        <button type="submit">Send</button>
      </form>
    </Page>
  </Layout>
);

export default SuggestABag;
