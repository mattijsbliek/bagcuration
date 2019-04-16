import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Page from 'components/Page';

const About = () => (
  <Layout title="Behind the scenes">
    <Page>
      <h1>Behind the scenes</h1>
      <blockquote className="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          I’m on the hunt for a new backpack. <br />
          <br />- large enough to hold a laptop (but compartment not necessary)
          <br />
          <br />- fairly lightweight
          <br />
          <br />- fashionable looking (doesn’t look like a “utility” / camping
          bag)
          <br />
          <br />- higher price point ok if built well, stylish, and comfortable{' '}
          <br />
          <br />
          FEED ME UR PICKS
        </p>
        &mdash; Jessica Hische (@jessicahische){' '}
        <a href="https://twitter.com/jessicahische/status/1097860405219786753?ref_src=twsrc%5Etfw">
          February 19, 2019
        </a>
      </blockquote>
      <p>
        This website was inspired by{' '}
        <a
          href="https://twitter.com/jessicahische"
          rel="noopener noreferrer"
          target="_blank"
        >
          @jessicahische
        </a>{' '}
        looking for a backpack.
      </p>
      <p>
        I just went through the same process, and there’s just so much out
        there. That’s why I’ve decided to curate some of the bags I personally
        like. This is not a review site, I haven’t tried all of the bags listed.
      </p>
      <p>
        There is no revenue model behind all this, you won’t find any affiliate
        links, sponsored listings, or any of that stuff. This is just me
        filtering down hundreds of options to a manageable number.
      </p>
      <p>
        I’m always looking for suggestions, so if you know of any great bags
        please do <Link to="/suggest-a-bag">send them in</Link>.
      </p>

      <h2>What’s with all the black bags?</h2>
      <p>
        This is just an MVP for now. I’m working on adding more colors soon, as
        well as other bag types like travel and tote bags.
      </p>
      <p>
        Do you have an interesting idea for Bag Curation? Find me on Twitter as{' '}
        <a
          href="https://twitter.com/mattijsbliek"
          rel="noopener noreferrer"
          target="_blank"
        >
          @mattijsbliek
        </a>
        , or send me an email at{' '}
        <a href="mailto:mattijs@mattijsbliek.com">mattijs@mattijsbliek.com</a>.
      </p>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </Helmet>
    </Page>
  </Layout>
);

export default About;
