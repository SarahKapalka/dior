/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable react/no-danger */
import React from 'react';
import Head from 'next/head';

export default function Sethead({ title }) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    "brand": "Dior",
    "email": "onlinecare.my@dior.com.my",
    "telephone": "1 (800) 929-3467"
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
