const COMMON_META = {
  url: 'https://localhost:3000',
  title: 'Opera AI',
  description: 'AI-powered sales assistant for Opera. Ask me anything about Opera, sales, or AI!',
  logo: '/favicon.ico',
};

const initMeta = {
  metadataBase: new URL(COMMON_META.url),
  title: COMMON_META.title,
  description: COMMON_META.description,
  alternates: {
    canonical: '',
  },
  openGraph: {
    title: COMMON_META.title,
    description: COMMON_META.description,
    url: COMMON_META.url,
    images: [
      {
        url: COMMON_META.logo,
        width: 1200,
        height: 628,
        secure_url: COMMON_META.logo,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    title: COMMON_META.title,
    description: COMMON_META.description,
    card: 'summary_large_image',
    images: [COMMON_META.logo],
  },
  other: {
    'og:locale:alternate': 'en_US',
  },
};

type ImageSnippet = {
  url: string;
  width?: number;
  height?: number;
};

type Meta = {
  title?: string;
  description?: string;
  openGraph?: object;
  twitter?: object;
  other?: object;
  canonical?: string;
  imageSnippet?: ImageSnippet;
  robots?: {
    index: boolean;
    follow: boolean;
  };
  url?: string;
};

export default function populateMetaData({
  title,
  description,
  openGraph,
  twitter,
  other,
  canonical,
  imageSnippet,
  url,
}: Meta) {
  const result = { ...initMeta };

  // replace metadata title
  if (title) {
    result.title = title;
    result.openGraph.title = title;
    result.twitter.title = title;
  }

  // replace metadata description
  if (description) {
    result.description = description;
    result.openGraph.description = description;
    result.twitter.description = description;
  }

  // replace metadata openGraph
  if (openGraph) {
    result.openGraph = { ...result?.openGraph, ...openGraph };
  }

  // replace metadata twitter
  if (twitter) {
    result.twitter = { ...result?.twitter, ...twitter };
  }

  if (canonical) {
    result.alternates.canonical = canonical?.toLowerCase();
  }

  // add metadata other
  if (other) {
    result.other = { ...result?.other, ...other };
  }

  // replace metadata image snippet
  if (imageSnippet) {
    result.openGraph = {
      ...result?.openGraph,
      images: [
        {
          url: imageSnippet?.url,
          width: imageSnippet?.width || 1200,
          height: imageSnippet?.height || 628,
          secure_url: imageSnippet?.url,
        },
      ],
    };
    result.twitter = { ...result.twitter, images: [imageSnippet?.url] };
  }

  if (url) {
    result.openGraph = {
      ...result?.openGraph,
      url,
    };
  }

  return result;
}
