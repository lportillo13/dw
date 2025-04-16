// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css'; // or use a Bootswatch theme
import '../styles/globals.css'; // your custom global styles
import '../styles/form.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
