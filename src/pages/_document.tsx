import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

interface DocumentProps {
  locale: string;
}

class Document extends NextDocument<DocumentProps> {
  render() {
    return (
      <Html>
        {/* Note that `lang` is set automatically based on i18n prefs. Do not override */}
        <Head />
        <body id="root">
          <Main key="main" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
