import type { FooterComponent } from './types';

import { GridColumn, Grid } from '@components/Grid';
import { MailChimpForm } from '@components/MailChimpForm';
import { FooterLinks } from './FooterLinks/FooterLinks';
import { FooterSocial } from './FooterSocial/FooterSocial';
import { Heading } from '@components/Heading';

import styles from './Footer.module.scss';

export const Footer: FooterComponent = ({ navigation, ...attrs }) => {
  // Filter only aria-* and role attrs
  const aria = Object.fromEntries(Object.entries(attrs).filter(([key]) => key.includes('aria-')));

  return (
    <section aria-label="Footer" {...aria}>
      <Grid as="footer" className={styles.container}>
        <GridColumn sm={'12'} md={'8'} lg={'8'}>
          <div className={styles.footerLinksContainer} aria-label="Footer navigation links">
            {navigation?.map((navArray) => {
              const navID = navArray
                .flat()
                .map(({ name }) => name)
                .join('-');
              return <FooterLinks key={`${navID}`} id={navID} links={navArray} />;
            })}
          </div>
        </GridColumn>
        <GridColumn sm={'12'} md={'4'} lg={'4'}>
          <FooterSocial
            facebook={process.env.SOCIAL_FACEBOOK_ID}
            instagram={process.env.SOCIAL_INSTAGRAM_ID}
            twitter={process.env.SOCIAL_TWITTER_ID}
            linkedIn={process.env.SOCIAL_LINKEDIN_ID}
            youtube={process.env.SOCIAL_YOUTUBE_ID}
          />
        </GridColumn>
        <GridColumn className={styles['newsletter-subscribe']} sm={'12'} md={'12'} lg={'12'}>
          <hr />
          <Heading element="h3" variant="h5">
            Subscribe to our newsletter
          </Heading>
          <MailChimpForm
            className={styles['newsletter-subscribe__form']}
            audienceId={process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID_1}
            submitLabel="Subscribe"
          />
        </GridColumn>
      </Grid>
      <Grid theme="secondary" aria-label="Copyright notice">
        <GridColumn sm={'12'} md={'12'} lg={'12'}>
          <p>&copy;&nbsp; All Rights Reserved. ON {new Date().getFullYear()}</p>
        </GridColumn>
      </Grid>
    </section>
  );
};

export default Footer;
