import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
}: SEOProps) {
  const siteTitle = 'Smart File Movement Tracking System';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'A professional-grade solution for monitoring physical file movements across engineering departments using advanced QR technology and real-time analytics.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
    </Helmet>
  );
}
