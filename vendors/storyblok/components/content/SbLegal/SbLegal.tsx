//? Storyblok component types
import type { SbLegalComponent } from './types';

//? Type guards
import { isArray } from '@on/utils';
//? React hooks
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { GridColumn, Grid } from '@components/Grid';
//? Storyblok components

export const SbLegal: SbLegalComponent = ({ blok }) => {
  return (
    <Grid>
      <GridColumn sm={12}>
        <div {...storyblokEditable(blok)}>
          {isArray(blok.body) &&
            blok.body.map((nestedBlok: any) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)}
        </div>
      </GridColumn>
    </Grid>
  );
};

//? Export default to prevent circular dependency when importing dynamically on SbDynamic
export default SbLegal;
