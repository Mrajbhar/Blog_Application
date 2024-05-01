import React from "react";
import Header from "./Header";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet> */}
      <Header />
      <main>
        {/* <Toaster /> */}

        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.defaultProps = {
  title: "Blog app",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;