import React from 'react';
import Button from 'components/Button';
import FormGroup from 'components/FormGroup';
import Layout from 'components/Layout';
import Page from 'components/Page';

const SuggestABag = ({ location: { search } }) => {
  return (
    <Layout title="Suggest a bag">
      <Page>
        {search.includes('state=success') ? (
          <>
            <h1>
              Bag submitted <span aria-hidden>💪</span>
            </h1>
            <p>
              Thanks so much for your submission, I’ll check it out and get back
              to you soon.
            </p>
            <p>
              <strong>Mattijs</strong>
            </p>
          </>
        ) : (
          <>
            <h1>Suggest a bag</h1>
            <form
              name="bag-suggestion"
              method="post"
              action="/suggest-a-bag?state=success"
              data-netlify="true"
              data-netlify-honeypot="do-not-fill"
            >
              <FormGroup label="Name" name="name" required />
              <FormGroup label="Email" name="email" type="email" required />
              <FormGroup label="Link to bag suggestion" name="url" required />
              <input type="hidden" name="form-name" value="bag-suggestion" />
              <input type="hidden" name="do-not-fill" />
              <Button theme="dark" type="submit">
                Submit suggestion
              </Button>
            </form>
          </>
        )}
      </Page>
    </Layout>
  );
};

export default SuggestABag;
