import styles from "./Button.module.css";
function Button() {
  let arr = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.Buton}>
      {arr.map((item) => (
        <button className={styles.buttoni}>{item}</button>
      ))}
    </div>
  );
}
export default Button;
