//? Storyblok component types
import type { SbLibraryComponent } from './types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

//? Type guards
import { isArray } from '@on/utils';

import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('@components/Grid/Grid').then((cmp) => cmp.Grid));
const GridColumn = dynamic(() => import('@components/Grid/GridColumn').then((cmp) => cmp.GridColumn));
const Logo = dynamic(() => import('@components/Logo').then((cmp) => cmp.Logo));

import { moduleDocs } from '~storyblok/docs/modules';

import styles from './SbLibrary.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export const SbLibrary: SbLibraryComponent = ({ blok }) => {
  const UsageComponent = ({ items }) => {
    return (
      <ul className={styles.libraryUsage}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div {...storyblokEditable(blok)} className={styles.library}>
      <Grid className={clsx(styles.libraryHeader, styles.libraryHeaderUsage)} id="contents">
        <GridColumn>
          <div>
            <Logo />
          </div>
          <h1 className="u-h2">Module Library</h1>
          <p>
            All of the modules that make up the website are listed here, along with notes on their usage. These modules
            can be reused across the site to modify pages and build new pages, and their content is editable via the
            CMS.
          </p>
          <p>
            The Storyblok editor is visual and intuitive, and you can find further learning resources here:{' '}
            <Link href="https://www.storyblok.com/docs/editor-guides/" target="_blank">
              https://www.storyblok.com/docs/editor-guides/
            </Link>
          </p>
          <p>
            To save time when creating new pages, we recommend duplicating existing content as a starting point, rather
            than starting from scratch. Pages can be previewed directly in the CMS, saved internally multiple times, and
            only published once you are ready to push the updates public.
          </p>

          <ol className={styles.contents}>
            {isArray(blok.body) &&
              blok.body.map((nestedBlok: any) => (
                <li key={nestedBlok._uid}>
                  <Link href={`#${nestedBlok._uid}-${nestedBlok.component}`}>{nestedBlok.component}</Link>
                </li>
              ))}
          </ol>
        </GridColumn>
      </Grid>
      {isArray(blok.body) &&
        blok.body.map((nestedBlok: any) => {
          const usageDocs = moduleDocs[nestedBlok.component];

          return (
            <div key={nestedBlok._uid} id={`${nestedBlok._uid}-${nestedBlok.component}`}>
              <div className={styles.libraryBlock}>
                <Grid className={styles.libraryBlock__header}>
                  <GridColumn md={8}>
                    <h4>{nestedBlok.component}</h4>
                    {usageDocs && <UsageComponent items={usageDocs} />}
                  </GridColumn>
                  <GridColumn md={4}>
                    <Link href="#contents">⇑ Contents</Link>
                  </GridColumn>
                </Grid>
                <div className={styles.libraryBlock__board}>
                  <StoryblokComponent blok={nestedBlok} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbLibrary;
