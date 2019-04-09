import React from 'react';
import Layout from 'components/Layout';
import Wrapper from 'components/Wrapper';

const SuggestABag = () => (
  <Layout>
    <Wrapper>
      <h1>Suggest a bag</h1>
      <form name="contact" method="POST" data-netlify="true">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="url">Link to bag suggestion</label>
          <input type="text" name="url" />
        </div>
        <button type="submit">Send</button>
      </form>
    </Wrapper>
  </Layout>
);

export default SuggestABag;
