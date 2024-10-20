import styles from "./Button.module.css";
function Button() {
  let arr = ["c"];
  return (
    <div className={styles.Buton}>
      {arr.map((item) => (
        <button className={styles.buttoni}>{item}</button>
      ))}
    </div>
  );
}
export default Button;
