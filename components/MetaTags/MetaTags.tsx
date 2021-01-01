import Head from "next/head";

interface IMetaTagsProps {
  description: string
  title: string
  image: string
  url: string
}

export default function MetaTags({
  description,
  title,
  image,
  url,
}: IMetaTagsProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
  );
}
