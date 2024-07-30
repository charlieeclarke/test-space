import type { NextPage } from 'next';
import { GridColumn, Grid } from '@components/Grid';
import { Carousel } from '@components/Carousel';
import { Button } from '@components/Button';
import { Image } from '@components/Image';
import { Breakout } from '@components/Breakout';
import { Card } from '@components/Card';
import { CardGrid } from '@components/CardGrid';
import { Article } from '@components/Article';
import { CTABanner } from '@components/CTABanner';
import { ImageGrid } from '@components/ImageGrid';

import { PageLayout } from '@layouts/PageLayout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { createElement, useEffect, useRef, useState } from 'react';
import { getImageSourceSetPaths } from '~storyblok/helpers/getImageSourceSetPaths';
import { FadeInJacket } from '@jackets/FadeInJacket';
import { TweenJacket } from '@jackets/TweenJacket';
import { SlideCoverJacket } from '@jackets/SlideCoverJacket';

import { useSearchParams } from 'next/navigation';

const PrototypePage: NextPage = () => {
  const typeEls = useRef([]);
  const imageEls = useRef([]);
  const [typeElsCSS, setTypeElsCSS] = useState([]);
  const [imagesSrcs, setImagesSrcs] = useState([]);

  const searchParams = useSearchParams();
  const debug = searchParams.get('debug');

  // const getTypeStyle = (e) => {
  //   console.log(e);
  // };

  useEffect(() => {
    if (typeEls.current) {
      const typeElsArray = typeEls.current;
      const typeElsStyles = typeElsArray.map((element) => {
        const elementChild = element?.children[0];
        if (!elementChild) return;
        const csStyles = window.getComputedStyle(elementChild as Element);
        return {
          id: element.id,
          fontFamily: csStyles.getPropertyValue('font-family'),
          fontSize: csStyles.getPropertyValue('font-size'),
          fontWeight: csStyles.getPropertyValue('font-weight'),
          lineHeight: csStyles.getPropertyValue('line-height'),
          letterSpacing: csStyles.getPropertyValue('letter-spacing'),
          margin: csStyles.getPropertyValue('margin'),
        };
      });

      setTypeElsCSS(typeElsStyles);
    }
  }, [typeEls]);

  useEffect(() => {
    if (imageEls.current) {
      const imageElsArray = imageEls.current;
      const imageElsItems = imageElsArray.map((element) => {
        const elementChild = element?.children[0].children[0];
        if (!elementChild) return;

        return {
          id: element.id,
          src: elementChild.src,
        };
      });

      setImagesSrcs(imageElsItems);
    }
  }, [imageEls]);

  const typeItems = [
    { name: 'DefaultH1', element: 'h1', text: 'Heading 1' },
    { name: 'DefaultH2', element: 'h2', text: 'Heading 2' },
    { name: 'DefaultH3', element: 'h3', text: 'Heading 3' },
    { name: 'DefaultH4', element: 'h4', text: 'Heading 4' },
    { name: 'DefaultH5', element: 'h5', text: 'Heading 5' },
    { name: 'DefaultH6', element: 'h6', text: 'Heading 6' },
    {
      name: 'DefaultBody',
      element: 'p',
      text: 'Leo a diam sollicitudin tempor id. Porttitor eget dolor morbi non arcu risus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Erat nam at lectus urna duis convallis convallis tellus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Morbi quis commodo odio aenean sed. Egestas sed tempus urna et pharetra pharetra massa massa. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Elit eget gravida cum sociis.',
    },
    { name: 'DefaultBlockquote', element: 'blockquote', text: 'Default quote copy' },
  ];

  const secondaryTypeItems = [
    { name: 'SecondaryH1', element: 'h1', text: 'Heading 1' },
    { name: 'SecondaryH2', element: 'h2', text: 'Heading 2' },
    { name: 'SecondaryH3', element: 'h3', text: 'Heading 3' },
    { name: 'SecondaryH4', element: 'h4', text: 'Heading 4' },
    { name: 'SecondaryH5', element: 'h5', text: 'Heading 5' },
    { name: 'SecondaryH6', element: 'h6', text: 'Heading 6' },
    {
      name: 'SecondaryBody',
      element: 'p',
      text: 'Leo a diam sollicitudin tempor id. Porttitor eget dolor morbi non arcu risus. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Erat nam at lectus urna duis convallis convallis tellus. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Morbi quis commodo odio aenean sed. Egestas sed tempus urna et pharetra pharetra massa massa. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Elit eget gravida cum sociis.',
    },
    { name: 'SecondaryBlockquote', element: 'blockquote', text: 'Secondary quote copy' },
  ];

  const getTypeStyles = (id) =>
    typeElsCSS.find((typeEl) => {
      return typeEl.id === id;
    });

  const getImageSrc = (id) =>
    imagesSrcs.find((imageEl) => {
      return imageEl.id === id;
    });

  const ContentListItem = ({ href, title }) => {
    return (
      <li>
        <Button href={href} target={'_self'}>
          {title}
        </Button>
      </li>
    );
  };

  const GroupUsage = ({ items = [] }) => {
    return (
      <div>
        <Grid>
          <GridColumn xs={12} md={8}>
            <div
              style={{
                backgroundColor: '#e7d8c4',
                padding: '16px 20px',
                margin: '0 0 3rem',
              }}
            >
              <h4
                style={{
                  borderBottom: '2px dotted rgba(0,0,0,0.4)',
                  paddingBottom: '1rem',
                  marginBottom: '2rem',
                  color: '#41382d',
                }}
              >
                Usage
              </h4>
              <ul
                style={{
                  color: '#41382d',
                }}
              >
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </GridColumn>
        </Grid>
      </div>
    );
  };

  const GroupTitle = ({ title, id = '' }) => (
    <Grid id={id}>
      <GridColumn>
        <h5
          className="mt-200"
          style={{ fontWeight: 'bold', borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem' }}
        >
          {title}
        </h5>
      </GridColumn>
    </Grid>
  );

  const TypeStyles = ({ styles }) => {
    return (
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '20px 0 30px',
          borderBottom: '1px solid lightGrey',
          padding: '0 0 1rem',
          listStyle: 'none',
          gap: '15px',
        }}
      >
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Font family:
          </span>
          <span>{styles?.fontFamily}</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Font size:
          </span>
          <span>{styles?.fontSize}</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Font weight:
          </span>
          <span>{styles?.fontWeight}</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Letter spacing:
          </span>
          <span>{styles?.letterSpacing}</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Line height:
          </span>
          <span>{styles?.lineHeight}</span>
        </li>
        <li>
          <span
            style={{
              fontWeight: 'bold',
              marginRight: '5px',
            }}
          >
            Margin:
          </span>
          <span>{styles?.margin}</span>
        </li>
      </ul>
    );
  };

  const imageGridAssets = [
    {
      image: {
        filename: 'https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg',
        alt: 'alt text',
        id: 'image1',
      },
    },
    {
      image: {
        filename: 'https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg',
        alt: 'alt text',
        id: 'image2',
      },
    },
    {
      image: {
        filename: 'https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg',
        alt: 'alt text',
        id: 'image3',
      },
    },
    {
      image: {
        filename: 'https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg',
        alt: 'alt text',
        id: 'image4',
      },
    },
  ];

  return (
    <PageLayout meta={{ title: 'Prototype' }} navigation={{}}>
      <Grid style={{ margin: '1rem 0 2rem' }}>
        <GridColumn>
          <h1>Prototype</h1>
          <Button
            href={{
              pathname: '/prototype',
              query: {
                ...(!debug && {
                  debug: true,
                }),
              },
            }}
          >
            Toggle debug
          </Button>
        </GridColumn>
      </Grid>
      <Grid style={{ marginBottom: '2rem' }}>
        <GridColumn>
          <h4
            style={{ borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem', marginTop: '2rem' }}
          >
            Table of content
          </h4>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <ContentListItem href={'#grid'} title={'Grid'} />
            <ContentListItem href={'#verticalGrid'} title={'Vertical Grid'} />
            <ContentListItem href={'#gridWithScrollSnap'} title={'Grid With Scroll Snap'} />
            <ContentListItem href={'#verticalGridWithSnap'} title={'Vertical Grid With Snap'} />
            <ContentListItem href={'#baseTypography'} title={'Base Typography'} />
            <ContentListItem href={'#secondaryFontTypography'} title={'Secondary Font Typography'} />
            <ContentListItem href={'#breakout'} title={'Breakout'} />
            <ContentListItem href={'#cards'} title={'Cards'} />
            <ContentListItem href={'#carousel'} title={'Carousel'} />
            <ContentListItem href={'#CTAs'} title={"CTA's"} />
            <ContentListItem href={'#CTABanner'} title={'CTA Banner'} />
            <ContentListItem href={'#responsiveImages'} title={'Responsive Images'} />
            <ContentListItem href={'#imageGrid'} title={'Image Grid'} />
          </ol>
        </GridColumn>
      </Grid>
      <GroupTitle title="Grid" id="grid" />
      <GroupUsage
        items={[
          'The grid is always 12 columns across all breakpoints.',
          'The spacing between columns is applied equally left and right in code',
          'Whilst in designs the space between the edge of the grid (page) and the browser may be considered as a single value, in code it is a combination of the column-padding and the addition of row-spacing',
        ]}
      />
      <Grid>
        {[...Array(12)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={4} md={2} lg={1}>
            <FadeInJacket staggerIndex={index}>
              <div
                style={{
                  background: '#ddd',
                  textAlign: 'center',
                  marginBottom: '3rem',
                }}
              >
                {index + 1}
              </div>
            </FadeInJacket>
          </GridColumn>
        ))}
      </Grid>
      <Grid>
        {[...Array(6)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={4} md={2}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>
      <Grid>
        {[...Array(4)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={6} md={3}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>
      <Grid>
        {[...Array(3)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={12} md={4}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>
      <Grid>
        {[...Array(2)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={12} md={6}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>

      <GroupTitle title="Vertical Grid" id="verticalGrid" />
      <GroupUsage
        items={[
          'Column sizing is proportional to the height of the grid container which can be specified using a height prop',
        ]}
      />
      <Grid flexDirection="column" height="100vh">
        {[...Array(6)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={4} md={2}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                height: '100%',
                display: 'grid',
                placeContent: 'center',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>

      <GroupTitle title="Grid With Scroll Snap" id="gridWithScrollSnap" />
      <GroupUsage
        items={[
          'Allows for the implementation of basic scrolling that "snaps" to the columns',
          'This approach is not recommended if your carousel or scroller requires UI controls.',
          'Infinite scroll is also not supported',
          'Whether you are able to scroll on a particular breakpoint or not is determined by whether the columns and their sizing is greater than the grid size, i.e. whether the columns fit onto a single row',
        ]}
      />
      <Grid scrollSnap>
        {[...Array(6)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={4} md={2}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>

      <GroupTitle title="Vertical Grid with Snap" id={'verticalGridWithSnap'} />
      <GroupUsage
        items={['Use in conjunction with the height prop to create a full screen vertical snap scroll effect']}
      />
      <Grid scrollSnap flexDirection="column" height="100vh">
        {[...Array(6)].map((value: undefined, index: number) => (
          <GridColumn key={index} xs={12}>
            <div
              style={{
                background: '#ddd',
                textAlign: 'center',
                height: '100%',
                display: 'grid',
                placeContent: 'center',
              }}
            >
              {index + 1}
            </div>
          </GridColumn>
        ))}
      </Grid>

      <FadeInJacket>
        <GroupTitle title="Base Typography" id={'baseTypography'} />
      </FadeInJacket>
      <Grid className="mb-100">
        <GridColumn md={12}>
          <div>
            {secondaryTypeItems.map((item: any) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              const Component = createElement(item.element, '', item.text);
              return (
                <FadeInJacket key={item.element} speed={'800ms'}>
                  <span id={item.name} ref={(el) => (typeEls.current = [...typeEls.current, el])}>
                    {Component}
                  </span>
                  <TypeStyles styles={getTypeStyles(item.name)} />
                </FadeInJacket>
              );
            })}
          </div>
        </GridColumn>
      </Grid>

      <GroupTitle title="Secondary Font Typography" id={'secondaryFontTypography'} />
      <Grid className="mb-100">
        <GridColumn md={12}>
          <div>
            {typeItems.map((item: any) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
              const Component = createElement(item.element, { className: 'u-font-secondary' }, item.text);
              return (
                <FadeInJacket key={item.element}>
                  <span id={item.name} ref={(el) => (typeEls.current = [...typeEls.current, el])}>
                    {Component}
                  </span>
                  <TypeStyles styles={getTypeStyles(item.name)} />
                </FadeInJacket>
              );
            })}
          </div>
        </GridColumn>
      </Grid>

      <Grid className="mt-600 mb-600">
        <GridColumn md={12}>
          <TweenJacket>
            <div
              style={{
                padding: 'calc(var(--tween-progress) * 80px)',
              }}
            >
              <div
                style={{
                  background: '#e0e0e0',
                  height: '500px',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '0.2s border-radius',
                  borderRadius: 'calc(var(--tween-progress) * 50px)',
                }}
              >
                The border radius and padding changes dynamically based on scroll position.
              </div>
            </div>
          </TweenJacket>
        </GridColumn>
      </Grid>

      <SlideCoverJacket>
        <Image
          sourceSetPathFormatter={getImageSourceSetPaths}
          src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
          alt="alt text"
          as="div"
        />
        <Image
          sourceSetPathFormatter={getImageSourceSetPaths}
          src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
          alt="alt text"
          as="div"
        />
        <div
          style={{
            background: '#ccc',
            width: '100%',
            height: '100vh',
          }}
        ></div>
      </SlideCoverJacket>

      <Grid className="mt-600 mb-600">
        <GridColumn sm={6}>
          <SlideCoverJacket top={'150px'} fanTop={'30px'}>
            <div
              style={{
                background: '#CF9893',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                marginBottom: '36px',
              }}
            ></div>
            <div
              style={{
                background: '#BC7C9C',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                marginBottom: '36px',
              }}
            ></div>
            <div
              style={{
                background: '#A96DA3',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                marginBottom: '36px',
              }}
            ></div>
            <div
              style={{
                background: '#7A5980',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                marginBottom: '36px',
              }}
            ></div>
            <div
              style={{
                background: '#3B3B58',
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                marginBottom: '36px',
              }}
            ></div>
          </SlideCoverJacket>
        </GridColumn>
      </Grid>

      <GroupTitle title="Breakout" />
      <GroupUsage
        items={['Allows you to "break out" a column from the grid.', 'Only currently works for 1-2 column layouts.']}
      />
      <Breakout>
        <Article>
          <h3>Full width</h3>
        </Article>
        <div>
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </div>
      </Breakout>
      <Breakout pinLeft>
        <div>
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </div>
        <Article>
          <h3>Pin column left</h3>
          <p>
            Vestibulum sit amet accumsan lacus. Nam quis ullamcorper nunc. Integer cursus vitae metus vel pretium.
            Vestibulum lobortis enim blandit tempor varius. Praesent mattis viverra lectus, eu auctor arcu rhoncus in.
            Aenean quis ultrices nunc, a fringilla augue. Mauris pulvinar eu purus sit amet viverra.
          </p>
        </Article>
      </Breakout>
      <Breakout pinRight>
        <Article>
          <h3>Pin column right</h3>
          <p>
            Vestibulum sit amet accumsan lacus. Nam quis ullamcorper nunc. Integer cursus vitae metus vel pretium.
            Vestibulum lobortis enim blandit tempor varius. Praesent mattis viverra lectus, eu auctor arcu rhoncus in.
            Aenean quis ultrices nunc, a fringilla augue. Mauris pulvinar eu purus sit amet viverra.
          </p>
        </Article>
        <div>
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </div>
      </Breakout>
      <Breakout pinLeft fullWidth>
        <div>
          <h3 style={{ margin: '20px' }}>Pin column left (full width)</h3>
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </div>
      </Breakout>
      <Breakout pinRight fullWidth>
        <div>
          <h3 style={{ margin: '20px' }}>Pin column right (full width)</h3>
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </div>
      </Breakout>

      <GroupTitle title="Cards" id={'cards'} />
      <GroupUsage
        items={[
          'Available as a grid and individually',
          'Interactivity is only attached to the CTAs and the image for best practise. If you require the whole card to be clickable, ensure you do not wrap interactive elements such as buttons and anchors within the card as this leads to invalid HTML',
        ]}
      />
      <CardGrid title="Card Grid">
        <Card
          _uid="test"
          title="Card title"
          label="label"
          link={{ cached_url: '/' }}
          cta={
            <Button href={{ href: '/' }} variant="secondary">
              Default Secondary
            </Button>
          }
          content="Lorem ipsum doler amut Lorem ipsum doler amut Lorem ipsum doler amut"
        >
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </Card>
        <Card
          _uid="test"
          title="Card title"
          label="label"
          link={{ cached_url: '/' }}
          cta={
            <Button href={{ href: '/' }} variant="secondary">
              Default Secondary
            </Button>
          }
          content="Lorem ipsum doler amut Lorem ipsum doler amut Lorem ipsum doler amut"
        >
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </Card>
        <Card
          _uid="test"
          title="Card title"
          label="label"
          link={{ cached_url: '/' }}
          cta={
            <Button href={{ href: '/' }} variant="secondary">
              Default Secondary
            </Button>
          }
          content="Lorem ipsum doler amut Lorem ipsum doler amut Lorem ipsum doler amut"
        >
          <Image
            sourceSetPathFormatter={getImageSourceSetPaths}
            src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
            alt="alt text"
            as="div"
          />
        </Card>
      </CardGrid>

      <GroupTitle title="Carousel" id={'carousel'} />
      <GroupUsage
        items={[
          'Utilises a library called Keen Slider',
          'Slide widths are defined as a proportion of screen width, as opposed to reflecting the grid',
        ]}
      />
      <Grid className="mb-100">
        <GridColumn md={12}>
          <Carousel options={{ loop: true }}>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide One</div>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide Two</div>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide Three</div>
          </Carousel>
        </GridColumn>
      </Grid>

      <GroupTitle title="CTAs" id={'CTAs'} />
      <GroupUsage
        items={[
          'You can use the button mixin to use the style of buttons independently from the component. This can be useful when the anchor is required on another element.',
          'You can add a new variant by a) adding a new variant to ButtonPropsVariants, & b) specifying the CSS variables to apply the styles you require',
        ]}
      />
      <Grid className="mb-100">
        <GridColumn md={12}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'baseline', margin: '0 0 20px' }}>
            <Button variant="primary">Default Primary</Button>
            <Button variant="secondary">Default Secondary</Button>
            <Button variant="link" href="/">
              Default Link
            </Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'baseline' }}>
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
          </div>
        </GridColumn>
      </Grid>

      <GroupTitle title="CTA Banner" id={'CTABanner'} />
      <CTABanner
        title={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
        text={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
        cta={
          <Button href={{ href: '/' }} variant="primary">
            CTA Label
          </Button>
        }
      />

      <GroupTitle title="Responsive Images" />

      <Grid className="mb-500">
        <GridColumn md={2}>
          <code>
            <pre style={{ backgroundColor: '#e9e9e9', display: 'inline-block', padding: '15px 20px 15px 0' }}>
              {`  sizes = {
    375: 100,
    767: 100,
    1024: 100,
    1400: 100,
  }`}
            </pre>
          </code>
        </GridColumn>
        <GridColumn md={10}>
          <div style={{ marginBottom: '1rem' }}>
            <p>On mobile (375px) the image is shown at approximately 100% width</p>
            <p>On tablet (768) the image is shown at approximately 100% width</p>
            <p>On desktop (1024) the image is shown at approximately 100% width</p>
            <p>On large (1400px) the image is shown at approximately 100% width</p>
          </div>
        </GridColumn>
        <GridColumn md={12}>
          <div>
            <Image
              sourceSetPathFormatter={getImageSourceSetPaths}
              src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
              alt="alt text"
              as="div"
            />
          </div>
        </GridColumn>
      </Grid>

      <Grid className="mb-500">
        <GridColumn md={2}>
          <code>
            <pre style={{ backgroundColor: '#e9e9e9', display: 'inline-block', padding: '15px 20px 15px 0' }}>
              {`  sizes = {
    375: 100,
    767: 100,
    1024: 50,
    1400: 50,
  }
  
  width: 668
  height: 445`}
            </pre>
          </code>
        </GridColumn>
        <GridColumn md={10}>
          <div style={{ marginBottom: '1rem' }}>
            <p>On mobile (375px) the image is shown at approximately 100% width</p>
            <p>On tablet (768) the image is shown at approximately 100% width</p>
            <p>On desktop (1024) the image is shown at approximately 50% width</p>
            <p>On large (1400px) the image is shown at approximately 50% width</p>
            <p>The largest size the image is displayed at is 668px width by 445px height.</p>
          </div>
        </GridColumn>
        <GridColumn md={6}>
          <div>
            <Image
              sourceSetPathFormatter={getImageSourceSetPaths}
              src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
              alt="alt text"
              as="div"
              width={668}
              height={445}
              sizes={{
                375: 100,
                767: 100,
                1024: 50,
                1400: 50,
              }}
            />
          </div>
        </GridColumn>
      </Grid>

      <Grid className="mb-500">
        <GridColumn md={2}>
          <code>
            <pre style={{ backgroundColor: '#e9e9e9', display: 'inline-block', padding: '15px 20px 15px 0' }}>
              {`  sizes = {
    375: 100,
    767: 50,
    1024: 30,
    1400: 30,
  }
  
  width: 437
  height: 291`}
            </pre>
          </code>
        </GridColumn>
        <GridColumn md={10}>
          <div style={{ marginBottom: '1rem' }}>
            <p>On mobile (375px) the image is shown at approximately 100% width</p>
            <p>On tablet (768) the image is shown at approximately 50% width</p>
            <p>On desktop (1024) the image is shown at approximately 30% width</p>
            <p>On large (1400px) the image is shown at approximately 30% width</p>
            <p>The largest size the image is displayed at is 437px width by 291px height.</p>
          </div>
        </GridColumn>
        <GridColumn sm={6} md={4}>
          <div>
            <Image
              sourceSetPathFormatter={getImageSourceSetPaths}
              src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
              alt="alt text"
              as="div"
              width={437}
              height={291}
              sizes={{
                375: 100,
                767: 50,
                1024: 30,
                1400: 30,
              }}
            />
          </div>
        </GridColumn>
      </Grid>

      <Grid className="mb-500">
        <GridColumn md={2}>
          <code>
            <pre style={{ backgroundColor: '#e9e9e9', display: 'inline-block', padding: '15px 20px 15px 0' }}>
              {`  sizes = {
    375: 50,
    767: 30,
    1024: 20,
    1400: 20,
  }

  width: 437
  height: 291`}
            </pre>
          </code>
        </GridColumn>
        <GridColumn md={10}>
          <div style={{ marginBottom: '1rem' }}>
            <p>On mobile (375px) the image is shown at approximately 50% width</p>
            <p>On tablet (768) the image is shown at approximately 30% width</p>
            <p>On desktop (1024) the image is shown at approximately 20% width</p>
            <p>On large (1400px) the image is shown at approximately 20% width</p>
            <p>The largest size the image is displayed at is 318px width by 212px height.</p>
          </div>
        </GridColumn>
        <GridColumn xs={6} sm={4} md={3}>
          <div>
            <Image
              sourceSetPathFormatter={getImageSourceSetPaths}
              src="https://a.storyblok.com/f/173250/1920x1281/4de16ae68c/hero-full.jpeg"
              alt="alt text"
              as="div"
              width={318}
              height={212}
              sizes={{
                375: 50,
                767: 30,
                1024: 20,
                1400: 20,
              }}
            />
          </div>
        </GridColumn>
      </Grid>

      <GroupTitle title="Image Grid" id={'imageGrid'} />
      <GroupUsage
        items={[
          "To create a new variant: create a folder for the new variant, add the variant inside 'Variants/Variant.tsx' and 'Variants/index.ts' and create a new option in the Variants dropdown on the CMS component.",
          "Style each variant image individually from 'ImageGrid.module.scss' as per the example.",
        ]}
      />
      <Grid style={{ marginBottom: '2rem' }}>
        <GridColumn>
          <h5 style={{ borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Image Grid - Variant One
          </h5>
        </GridColumn>
        <GridColumn>
          <ImageGrid images={imageGridAssets} variant={'1'} />
        </GridColumn>
        <GridColumn>
          <h5 style={{ borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Image Grid - Variant Two
          </h5>
        </GridColumn>
        <GridColumn>
          <ImageGrid images={imageGridAssets} variant={'2'} />
        </GridColumn>
        <GridColumn>
          <h5 style={{ borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Image Grid - Variant Three
          </h5>
        </GridColumn>
        <GridColumn>
          <ImageGrid images={imageGridAssets} variant={'3'} />
        </GridColumn>
        <GridColumn>
          <h5 style={{ borderBottom: '1px solid grey', paddingBottom: '1rem', marginBottom: '2rem' }}>
            Image Grid - Variant Four
          </h5>
        </GridColumn>
        <GridColumn>
          <ImageGrid images={imageGridAssets} variant={'4'} />
        </GridColumn>
      </Grid>
      <Grid>
        <GridColumn sm={12}>
          <div style={{ background: '#fff', padding: '100px 0' }}>
            <Button href="blog" variant="primary">
              href: blog target: null
            </Button>
            <Button href="/blog" variant="primary" target="_blank">
              href: /blog target: _blank
            </Button>
            <Button href="https://example.com" variant="primary" target="_blank">
              href: https://example.com: target: _blank
            </Button>
            <Button href="blog/ninth-post/" variant="primary">
              href: blog/ninth-post/: target: null
            </Button>
          </div>
        </GridColumn>
      </Grid>

      <Breakout pinRight>
        <div>Left content</div>
        <div>
          <Carousel options={{ loop: true }}>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide One</div>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide Two</div>
            <div style={{ height: '300px', backgroundColor: 'grey' }}>Slide Three</div>
          </Carousel>
        </div>
      </Breakout>
    </PageLayout>
  );
};

export default PrototypePage;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
