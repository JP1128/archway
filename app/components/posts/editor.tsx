"use client";

import { useState } from "react";
import DefaultEditor, { EditorProvider } from "react-simple-wysiwyg";
import styles from "./article-view.module.css";

export default function ContentEditor({ defaultHtml }) {
  const [html, setHtml] = useState(defaultHtml);

  return (
    <EditorProvider>
      <DefaultEditor
        value={html}
        className={styles.article}
        onChange={(event) => setHtml(event.target.value)}
      ></DefaultEditor>
    </EditorProvider>
  );
}
