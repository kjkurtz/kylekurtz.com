import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Sidebar from '../components/Sidebar';
import './index.css';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="flex max-w-5xl mx-auto">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Sidebar />
        {children}
      </div>
    );
  }
}
