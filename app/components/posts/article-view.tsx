import styles from "./article-view.module.css";

export default function ArticleView({ html }) {
  return (
    <div
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
