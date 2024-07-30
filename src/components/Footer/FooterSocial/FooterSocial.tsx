import type { FooterSocialComponent } from './types';

import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

import styles from './FooterSocial.module.scss';

export const FooterSocial: FooterSocialComponent = ({ facebook, instagram, twitter, linkedIn, youtube }) => {
  return (
    <ul className={styles.social}>
      {instagram && (
        <li>
          <a href={instagram} rel="noopener" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a href={twitter} rel="noopener" target="_blank" aria-label="Twitter">
            <FiTwitter />
          </a>
        </li>
      )}
      {facebook && (
        <li>
          <a href={facebook} rel="noopener" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </li>
      )}
      {linkedIn && (
        <li>
          <a href={linkedIn} rel="noopener" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a href={youtube} rel="noopener" target="_blank" aria-label="YouTube">
            <FaYoutube />
          </a>
        </li>
      )}
    </ul>
  );
};

export default FooterSocial;
