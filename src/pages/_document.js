import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="description..." />
          <meta name="referrer" content="no-referrer" />
          {/* Disable automatic detection and formatting of possible phone numbers  */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="copyright" content="Copyright owner" />
          <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
