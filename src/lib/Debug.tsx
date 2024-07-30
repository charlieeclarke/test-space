import { Grid as LayoutGrid, GridColumn } from '@components/Grid';

import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { getWebsiteUrl } from '@on/utils/getWebsiteUrl';

const WEBSITE_URL = getWebsiteUrl();

const Debug = () => {
  const searchParams = useSearchParams();
  const debug = searchParams.get('debug');
  const sizeInspector = useRef<HTMLDivElement>();
  const allowDebug =
    ['deploy-preview', 'dev'].includes(process.env.NEXT_PUBLIC_CONTEXT || '') || WEBSITE_URL.includes('netlify.app');

  const mouseMoveTooltip = useCallback(
    (e) => {
      const sizeInspectorEl = sizeInspector?.current;
      if (!sizeInspectorEl) return;
      const element = document.elementFromPoint(e.clientX, e.clientY);
      sizeInspectorEl.style.top = e.clientY + 12 + 'px';
      sizeInspectorEl.style.left = Math.min(e.clientX + 12, document.body.clientWidth - 170) + 'px';
      let currentElement;
      if (!element || element === currentElement) return;
      currentElement = element;
      const computed = window.getComputedStyle(element);
      const dimensions = element?.getBoundingClientRect();

      const box =
        '<bq1>' +
        element.nodeName +
        '</bq1> ' +
        dimensions.width.toFixed(2).replace(/[\\.]?0+$/, '') +
        ' × ' +
        dimensions.height.toFixed(2).replace(/[\\.]?0+$/, '');
      const font = '<br><bq>FONT:</bq> ' + computed.fontSize;
      const lineheight =
        '<br><bq>LINE HEIGHT:</bq> ' +
        (parseFloat(computed.lineHeight) / parseFloat(computed.fontSize)).toFixed(3).replace(/[\\.]?0+$/, '') +
        '% / ' +
        computed.lineHeight;
      const padding = '<br><bq>PADDING:</bq> ' + computed.padding;
      const margin = '<br><bq>MARGIN:</bq> ' + computed.margin;
      const maxwidth = '<br><bq>MAX W:</bq> ' + computed.maxWidth;
      const viewport = '<br><br><bq>WINDOW:</bq> ' + window.innerWidth + ' × ' + window.innerHeight;
      sizeInspectorEl.innerHTML = box + font + lineheight + padding + margin + maxwidth + viewport;
    },
    [sizeInspector]
  );

  useEffect(() => {
    if (debug) {
      document.addEventListener('mousemove', mouseMoveTooltip, { passive: true });
    }

    return () => window.removeEventListener('mousemove', mouseMoveTooltip);
  }, [debug]);

  if (!allowDebug) return null;

  return debug ? (
    <>
      <div
        id="debugPane"
        style={
          {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 9999998,
            opacity: 0.1,
            pointerEvents: 'none',
          } as React.CSSProperties
        }
      >
        <LayoutGrid>
          {[...Array(12)].map((value: undefined, index: number) => (
            <GridColumn key={index} xs={1}>
              <div
                style={{
                  background: 'yellow',
                  textAlign: 'center',
                  fontSize: '10px',
                  height: '100vh',
                  paddingTop: '8px',
                }}
              >
                {index + 1}
              </div>
            </GridColumn>
          ))}
        </LayoutGrid>
        {/* eslint-disable react/no-danger */}
        <style
          dangerouslySetInnerHTML={{
            __html: `bq1{font-weight: bold; font-size: 14px; margin-right: 12px} bq{font-size: 11px; font-weight: bold; width: 75px; display: inline-block} #__next *{outline: 1px solid rgb(50 88 200 / 90%); background: rgba(50, 88, 200, 0.1)} #__next *:not(:has(*:hover)):hover {background: #70dbf6 !important}`,
          }}
        />
      </div>
      <div
        style={{
          background: '#ffe000',
          position: 'fixed',
          whiteSpace: 'nowrap',
          border: '1px solid',
          padding: '2px 16px 4px 6px',
          borderRadius: '3px',
          fontSize: '14px',
          zIndex: '9999999',
          fontFamily: 'sans-serif',
        }}
        ref={sizeInspector}
      />
    </>
  ) : null;
};

export default Debug;
