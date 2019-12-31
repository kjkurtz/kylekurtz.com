import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from '../components/Header';
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        {children}
      </div>
    );
  }
}
