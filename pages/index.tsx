import { useRouter } from "next/router";
import { useEffect } from "react";
import Editor from "rich-markdown-editor";
import MetaTags from "../components/MetaTags/MetaTags";

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
      <MetaTags
        image="https://res.cloudinary.com/albin-groen/image/upload/f_auto/v1609525659/rmmd-seo_tm4oba.png"
        description="Render any markdown through a simple url"
        title="rmmd.link | Render My Markdown"
        url={`https://rmmd.link${router.asPath}`}
      />

      <Editor
        defaultValue={markdown as string}
        dark={darkMode === "true"}
        key={markdown as string}
        onChange={() => {}}
        readOnly
      />

      <p className="banner">
        <span>Shared using</span>{" "}
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
