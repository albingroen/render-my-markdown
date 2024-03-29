import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Editor from "rich-markdown-editor";
import MetaTags from "../components/MetaTags/MetaTags";

export default function Home() {
  const router = useRouter();
  const { markdown, darkMode, hideBanner } = router.query;

  useEffect(() => {
    if (darkMode === "true") {
      document.body.style.background = "#181a1b";
      document.body.style.color = "#fff";
    }
  }, [darkMode]);

  return (
    <div>
      <MetaTags
        image="https://res.cloudinary.com/albin-groen/image/upload/f_auto/v1609535477/rmmd-seo_kalasn.png"
        description="Render any markdown through a simple url"
        title="rmmd.link | Render My Markdown"
        url={`https://rmmd.link${router.asPath}`}
      />

      {!markdown && <Generator />}

      <Editor
        defaultValue={markdown as string}
        dark={darkMode === "true"}
        key={markdown as string}
        onChange={() => {}}
        readOnly
      />

      {hideBanner !== "true" && (
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
      )}
    </div>
  );
}

const Generator = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [markdown, setMarkdown] = useState<string>();

  const url =
    markdown &&
    `https://rmmd.link/?markdown=${encodeURIComponent(
      markdown
    )}&darkMode=${darkMode}`;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.currentTarget.value)}
          rows={10}
          cols={40}
          placeholder="Enter markdown to generate a link"
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "1rem",
            padding: "1.5rem",
          }}
        />
      </div>

      {url && (
        <>
          <div
            style={{ marginTop: "1rem", display: "flex", alignItems: "center" }}
          >
            <input
              onChange={(e) => setDarkMode(e.target.checked)}
              style={{ marginRight: "0.5rem" }}
              checked={darkMode}
              type="checkbox"
              id="darkMode"
            />
            <label htmlFor="darkMode">Use dark mode</label>
          </div>

          <a
            rel="noopener noreferrer"
            target="_blank"
            style={{
              fontFamily: "sans-serif",
              marginTop: "1rem",
              display: "block",
              lineHeight: 1.5,
            }}
            href={url}
          >
            &rarr; {url}
          </a>
        </>
      )}
    </div>
  );
};
