import DefaultEditor, { EditorProvider } from "react-simple-wysiwyg";
import styles from "./article-view.module.css";

export default function ContentEditor({ content, setContent }) {
  return (
    <EditorProvider>
      <DefaultEditor
        value={content}
        id="content"
        name="content"
        className={styles.article}
        onChange={setContent}
      ></DefaultEditor>
    </EditorProvider>
  );
}
