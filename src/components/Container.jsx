import App from "../App";
import styles from "./Container.module.css";
function Container(props) {
  return <center className={styles.container}>{props.children}</center>;
}
export default Container;
