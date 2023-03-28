import { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/commons/layout";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../src/commons/style/globalStyle";

// ///////////////////////////// 파이어베이스 /////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-l6dgJcDubCbC8H5KMXXKgCNe165ZaY",
  authDomain: "codecamp-study.firebaseapp.com",
  projectId: "codecamp-study",
  storageBucket: "codecamp-study.appspot.com",
  messagingSenderId: "569557469983",
  appId: "1:569557469983:web:89887e486215610e177e2a",
};
// //////////////////////////////////////////////////////////////////

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={GlobalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}
