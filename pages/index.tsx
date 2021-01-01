import Head from "next/head";
import { useRouter } from "next/router";
import Editor from "rich-markdown-editor";

export default function Home() {
  const router = useRouter();
  const { markdown } = router.query;

  return (
    <div>
      <Head>
        <title>Render My Markdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Editor
        defaultValue={markdown as string}
        key={markdown as string}
        onChange={() => {}}
        readOnly
      />
    </div>
  );
}
