import ThemeContainer from "../contexts/theme/ThemeContainer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  );
}

export default MyApp;
