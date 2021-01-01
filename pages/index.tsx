import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Editor from "rich-markdown-editor";

export default function Home() {
  const router = useRouter();
  const { markdown, darkMode } = router.query;

  useEffect(() => {
    if (darkMode === "true") {
      document.body.style.background = "#181a1b";
      document.body.style.color = "#fff";
    }
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Render My Markdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Editor
        defaultValue={markdown as string}
        dark={darkMode === "true"}
        key={markdown as string}
        onChange={() => {}}
        readOnly
      />

      <p className="banner">
        Shared using{" "}
        <a
          href="https://github.com/albingroen/render-my-markdown"
          rel="noopener noreferrer"
          target="_blank"
        >
          render-my-markdown
        </a>
      </p>
    </div>
  );
}
