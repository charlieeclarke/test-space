# ON NextJS Template<!-- omit in toc -->
[![Tests](https://github.com/on-associates/on-nextjs-template/actions/workflows/tests.yml/badge.svg)](https://github.com/on-associates/on-nextjs-template/actions/workflows/tests.yml)

## Summary<!-- omit in toc -->
- [Pre-requisites](#pre-requisites)
- [Getting Started with the Template](#getting-started-with-the-template)
  - [Cloning the code](#cloning-the-code)
  - [Remove and edit this README](#remove-and-edit-this-readme)
  - [Dependancies](#dependancies)
  - [Storyblok](#storyblok)
  - [Development Server](#development-server)
- [ESLint & Husky](#eslint--husky)
- [Schema](#schema)
- [Google Tag Manager - History Change](#google-tag-manager---history-change)
- [Images](#responsive-images)
- [Localization](#localization)
    - [Adding a new language.](#adding-a-new-language)
    - [Remove a language.](#remove-a-language)
- [Storyblok](#storyblok-1)
  - [Localization](#localization-1)
  - [Generating custom asset URLs](#generating-custom-asset-urls)
  - [Removing Storyblok](#removing-storyblok)
  - [Content Types](#storyblok-content-types)
  - [Filters](#adding-filtering-and-search-support)
  - [Linking URLs getCleanURL](#linking-urls)
- [Hubspot](#hubspot)
- [Envrionment Settings](#envrionment-settings)
  - [Environment Variables](#environment-variables)
  - [Google Analytics 4 and Google Tag Manager](#google-analytics-4-and-google-tag-manager)
  - [Media Queries](#media-queries)
- [SVG Icon Sprite](#svg-icon-sprite)
- [Bundle Analyzer](#bundle-analyzer)
- [GitHub Actions](#github-actions)
  - [Roadmap](#roadmap)
  - [:octocat: Generate documentation](#octocat-generate-documentation)
  - [:octocat: Code style](#octocat-code-style)
  - [:octocat: Code review](#octocat-code-review)
  - [:octocat: Running unit and integration tests](#octocat-running-unit-and-integration-tests)
  - [:octocat: Running e2e tests](#octocat-running-e2e-tests)
  - [:octocat: Accessibility audit (A11Y)](#octocat-accessibility-audit-a11y)
  - [:octocat: Performance audit](#octocat-performance-audit)
  - [:octocat: Lighthouse audit](#octocat-lighthouse-audit)
  - [:octocat: Lighthouse monitoring](#octocat-lighthouse-monitoring)
  - [:octocat: Quality assurance](#octocat-quality-assurance)
  - [:octocat: Code coverage](#octocat-code-coverage)

## Pre-requisites

- Node.js 14.x or higher
- yarn

## Install Node

It's recommended to use [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) to install NodeJS.

## Install Yarn

See: [https://yarnpkg.com/getting-started/install](https://yarnpkg.com/getting-started/install)

Run `corepack enable` in your terminal.

Check yarn is installed by running `source ~/.zshrc` and then trying `yarn`.

## Getting Started with the Template

### Cloning the code

Rather than cloning this repository, please click "Use as Template". This means you can create a new repository using this code but with a fresh Git history.

### Remove and edit this README

<!-- ❗ TODO: Remove this README through GitHub Actions when using this as a template -->

Edit this readme before you push to your new repository. Remove everything except the necessary `yarn/node` installation instructions. Only then add project-specific content to the readme.

### Dependancies

You need to install all the NPM Dependancies.

To do this, run:

```bash
yarn install
```

<!-- ❗ TODO: Automatic remove deps that aren't required by the project using this template. -->

### Storyblok

Check with your project team if your project is using Storyblok. If it is, ensure the `NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN` environment variable is correct. Refer to the [more detailed Storyblok section](#storyblok-1) further down in this readme.

### Development Server

You can now run the development server. This loads the site in your browser, and when you make changes, the browser will reload to show them.

```bash
yarn dev:proxy
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ESLint & Husky

We use ESLint to enforce best practices.

We use a tool called Husky to create git hooks with ease. We have setted up one to lint and format your code on pre-commit.

Run `yarn lint` anytime to get a list of all linting issues. You can also run `yarn lint:fix` to fix all auto-fixable issues.

## Localization

[next-i18next](https://github.com/i18next/next-i18next) is used to handle translations, package is based on [i18next](https://www.i18next.com/).

All localization settings are stored in `next-i18next.config.js`.

### Adding a new language.

Add the new locale code in `next-i18next.config.js`.

Duplicate the `public/locales/en` and change the name to your new locale.

### Remove a language.

Remove the locale code from `next-i18next.config.js`.

Delete the folder `public/locales/<locale_code>`.

### Set default locale

Please search the code base for all instances of "en" and change as appropriate.

## Storyblok

A Storyblok setup is included with this starter.

You can find the matching Storyblok component setup within Storyblok by looking for the space called "StoryblokStarter". The process for using both the starter space and this repository is as follows:

1. Create a new Storyblok space within Storyblok. When prompted, choose the "Duplicate" option and duplicate the [StoryblokStarterV2 (Latest)](https://app.storyblok.com/#/me/spaces/173250) space.
2. Add the necessary Storyblok preview/exit preview URLs within Storyblok [space's settings](https://app.storyblok.com/#/me/spaces/173250/settings?tab=editor). The default preview URLs when you clone the Starter space will not be correct, and you may initially be presented with blank pages with a "liquid" error when trying to edit content.
3. Clone this repository and setup the project.
4. Amend `NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN` env var to match the preview token in your new space. You can find the token under `settings` and `Access Tokens` options in Storyblok space.
5. Amend `STORYBLOK_SPACE_ID=` env var to match the space ID in your new space. You can find the space ID under `settings` and `Space` in the Storyblok space. (Only copy the space ID numerals - you do not need the hash symbol for the env variables.)
6. Ensure you run codegen locally to update the Storyblok GraphQL schema: `yarn run codegen`.

### Rendering

The ON Template uses SSG for static pages: home, page and blog posts.

It uses SSR for the blog index pages. This is to allow these pages to deliver filtering and search behaviours.

### Localization

[Setup the localization settings](#localization), and duplicate the `/en` folder and rename it to match your to your new locale code in **lower case** and update your new content.

![image](https://user-images.githubusercontent.com/82026569/188436854-6bfa4524-069a-4ee1-8175-36b700b85b26.png)

### Removing Localisation

- Remove locale folders in Storyblok
- Pass "localisation" as false to `generateSiteMap` methods
- Pass "localisation" as false to all uses of `generatePaths`
- Ensure all uses of `getStoryblokPage`, `getStoryblokBlog` and other data fethcing methods you're using pass `locale` as false.

### Removing Storyblok

<!-- ❗ TODO: Automatic remove deps that aren't required by the project using this template. -->

If you are not using Storyblok you can remove all Storyblok dependencies:

<details>
<summary><strong>Removing with script</strong></summary>

Copy and paste the entire command on your terminal make sure you are in the root of the project and execute it to remove the Storyblok dependencies:
```bash
rm -f src/pages/[...]slug.tsx src/pages/index.tsx &&\
rm -rf src/components/RichText vendors/storyblok &&\
mv src/pages/index-nonsb.tsx src/pages/index.tsx
```
</details>

or

<details>
<summary><strong>Manual removal</strong></summary>

1. Delete `src/pages/[...slug].tsx`
2. Delete `src/pages/index.tsx`
3. Rename `src/pages/index-nonsb.tsx` to `index.tsx`
4. Remove `src/components/RichText`
5. Remove the Storyblok folder

</details>

## Hubspot

Hubspot integration is located in `vendors/hubspot`.

Get Hubspot forms in `getStaticProps` or `getServerSideProps` and pass them to your Page.

```
import { getHubspotForms } from 'vendors/hubspot/getForms';

export const getStaticProps: GetStaticProps = async ({ params, preview = false, locale = 'en' }) => {
  try {
    const hubspotForms = await getHubspotForms();

    const TEN_MINUTES = 10 * 60; // 10 minutes in seconds. ❗️ Always avoid use magic numbers!

    return {
      props: {
        collectionData,
        hubspotForms: hubspotForms,
        slug,
        ...storyStaticProps,
        ...(await serverSideTranslations(locale, ['common', 'catalog'])),
      },
      revalidate: TEN_MINUTES,
    };
  } catch {
    return { notFound: true };
  }
};

```

Import `HubspotProvider`, wrap it around any components that need the context and add the forms data to it.

```
import { HubspotProvider } from 'vendors/hubspot/context/HubspotProvider';

<HubspotProvider forms={forms}>
  // inner components
</HubspotProvider>

```

## Envrionment Settings
### Environment Variables

Make sure any environment variables you require are configured.
```bash
cp .env.sample .env.local
```
Then just add project-specific variables. Check with your project team what these values should be.

> ⚠️ ***WARNING:*** Avoid using .env files in production as they are not encrypted and insecure. Use [Encrypted secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) instead.

### Google Analytics 4 and Google Tag Manager

All you should need to do is add the client's GTM Container ID and GA4 tracking code using:

```
NEXT_PUBLIC_GTM_TRACKING_ID
NEXT_PUBLIC_GA_4_TRACKING_ID
```

### Responsive Images

The Image component `src/components/Image/Image.tsx` will handle the generation of the right HTML to support responsive images implemented using [https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images](srcset).

It accepts the following props:

```
src -- the original path to the image
alt -- alt tag
sizes -- see below, an object of breakpoints/widths
sourceSetPathFormatter -- see below, a responsive image path formatter
fill -- if image should fill width of container
height -- if you wish to hard crop the image height
retina -- if you would like 2x quality images
```

To implement the responsive images, you can pass an object which defines key/value pairs, whereby the key is the breakpoint, and the value is the image display size proportional to that breakpoint.

```ts
  const sizes: ImageSizes = {
    375: 100,
    767: 50,
    1024: 50,
    1400: 50,
  };
```

In this example we are specifying that at a 375px browser width, our image will occupy a 100% width of the viewport.
At 767px it will occupy 50% of the viewport, and the same for 1024px and 1400px. Whilst the values for the last three are the same, we still need to specify each breakpoint we require, otherwise the larger crops will not be inserted.

By then passing a method `sourceSetPathFormatter` we can tell the Image component how it should re-format the image path for each correct image crop required. A Storyblok formatter is included and found here: `vendors/storyblok/helpers/getImageSourceSetPaths.tsx`.

The helper takes the original path of the image, and based on the supplied widths, will re-crop the image to the relevant size. Therefore, at 1400px for example, the image is cropped to 1400px width.

For Retina quality images, pass the `retina` prop.

***If you use Retina images, remember to reduce their size by 50% using CSS***

For a hard, fixed crop, pass the `height` and/or `width` prop. All images will be cropped to this height in `px`. 
Note that, the same size image will then be served across screen sizes. If you want to maintain responsive sized images, you should use `srcSetImages` instead.

## SVG Icon Sprite

Refer to the Icon component: `components/Icon`

You can add new icons by amending the sprite, located in `components/Icon/Iconsprite.tsx`.

This involves exporting the SVG from Figma and converting to a symbol. You can use online tools to help with this, e.g. [https://svg-to-symbol.herokuapp.com/](https://svg-to-symbol.herokuapp.com/).

When you add an SVG to the sprite - remove any colouring. Re-apply the colouring using CSS. This means you can style the SVG with CSS.

Not all SVGs work well as icons and you may have issues if the SVGs you're using are all different sizes. For an icon set, you should ask your designer to help you export all SVG icons onto the same size canvas. This will ensure they always line up correctly in the browser.

## Bundle Analyzer

Run `yarn build:analyzer` in your terminal to analyze bundle sizes.

To reduce bundle sizes and improve performance, consider:

- Replacing libraries with vanilla JavaScript
- Using more lightweight libraries, and avoiding heavy old libraries such as Slick
- Lazy-loading components with NextJS Dynamic - see examples in `storyblok/components/DynamicComponent.tsx`

## GitHub Actions

> ❗⚠️ ***WORK IN PROGRESS:*** This section is still in progress and may not reflect the actual situation of the project. Also, everything on this section can be changed without previous notice.

This repository has a few GitHub Actions that you can use to automate your workflow.

### Roadmap

- [ ] Code style
- [ ] Code review
- [ ] Unit tests
- [ ] e2e tests
- [ ] Accessibility audit (A11Y)
- [ ] SEO audit
- [ ] Performance audit
- [ ] Quality Assurance
- [ ] Code coverage
- [ ] Generate documentation

### :octocat: Generate documentation

This action will deploy your project documentation to GitHub Pages. It's a unblocking process, so you can continue working on your project while it's deploying.

### :octocat: Code style

This action will lint your project on every push you make to GitHub and will fail the checks if there are any errors.

### :octocat: Code review

This action will run a code review on every pull request you make to main branch and will automatically merge the pull request if there are no issues.

### :octocat: Running unit and integration tests

This action will run your project's tests on every push to main and protected branches. It uses the [Jest](https://jestjs.io/) testing framework with [ts-jest](https://www.npmjs.com/package/ts-jest) to test TypeScript. This instance has jest extended by [@testing-library/react](https://testing-library.com/docs/react-testing-library/getting-started) and [jest-axe](https://www.npmjs.com/package/jest-axe) to test your components and accessibility violations respectively.

### :octocat: Running e2e tests

This action will run your project's e2e tests on every pull request to the main branch. It uses the [cypress](https://www.cypress.io/) framework with [cypress-visual-regression](https://www.npmjs.com/package/cypress-visual-regression) to compare screenshots and [cypress-axe](https://www.npmjs.com/package/cypress-axe) to check accessibility.

It's recommended to use rollback to revert changes to your project and run this action asynchronously to avoid blocking your pull request.

### :octocat: Accessibility audit (A11Y)

This action will run a subset of your project's tests that are related to accessibility. It will run on every pull request to the main branch. It uses Jest and Cypress extended by the [@axe-core](https://www.npmjs.com/package/@axe-core) and [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) packages to accessibility audit the project

### :octocat: Performance audit

This action will run your project's tests on every push to main and protected branches. It uses the [Jest](https://jestjs.io/) testing framework with [ts-jest](https://www.npmjs.com/package/ts-jest) to test TypeScript. This instance has jest extended by [@testing-library/react](https://testing-library.com/docs/react-testing-library/getting-started) to test your components performance.

### :octocat: Lighthouse audit

This action will run a subset of your project's tests that are related to SEO, performance and accessibility. It uses [Lighthouse](https://lighthouse-ci.org/) to audit your project.

### :octocat: Lighthouse monitoring

This action will run a subset of your project's tests that are related to SEO, performance and accessibility. It uses [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to monitor your releases and will run weekly. It will notify the team if the release is not meeting the minimum top-level score.

### :octocat: Quality assurance

This action will run all the test and audit actions and it's recommended to run this action manually to avoid overloading your Actions runners.

### :octocat: Code coverage

This action will run a code coverage every time you run one of the test actions on your repository and will generate a report in the `coverage` folder.

## Linking URLs

To make every URL in the project use `getCleanURL` function and avoid unnecessary string concatenation

### Adding filtering and search support

Your content type can filter and search - just like the blog.

1. Make sure you are rendering the `<Filter>` and `<Search>` components in the UI component for your content type list. See `src/components/Blog/BlogList/BlogList.tsx` for exmaple of implementation.
2. Ensure that, as `vendors/storyblok/helpers/getContentTypeData.ts` does, your content type GraphQL query accepts the tag, sort by and search parameters.

If you need to filter by custom data, you can modify your query to accept `filter_query_v2`. Please refer to Storyblok documentation for how to use this parameter.

You would then need to modify `src/components/Filters/FiltersOptions.tsx` to be able to render a dropdown for your new filter. This readme will not go into detail on how to achieve this as there are quite a few steps required - so please give the development team a shout if you require assistance.

# Schema

The ON Template includes a standard library created by Google for implementing JSON+LD Schema.

You start by importing the library and the type definiions:

```
import { BlogPosting } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
```

Then add your schema, for example:

```
<JsonLd<BlogPosting>
  item={{
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(storyImage && { image: storyImage.filename }),
    datePublished: publicationDate,
  }}
/>
```

There are many examples of Schema found here: https://jsonld.com/

# Google Tag Manager - History Change
We have been experiencing some issues between SPA websites and GA4 tracking due to how Next.js handles loading new pages.
Due to this, when the Data Layer event called gtm.historyChange is fired, the data provided for it is incorrect and logging the wrong page.

To help combat this, we have a custom hook that will fire a custom GTM event called ```routeChangeComplete``` each time the route changes on the site.
The page title and path is logged for this event.  

![Screenshot 2024-01-03 at 10 45 43](https://github.com/on-associates/on-nextjs-template/assets/103422168/5b20e32d-1984-45fc-8ba7-07286abbee4e)


```
useGTMRouteChange(GA4_ID, gtagLoaded);
```

If you do not require this type of event tracking, feel free to remove the line of code above from the project.
