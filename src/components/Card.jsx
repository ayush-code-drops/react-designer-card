import styles from "./style.module.css";

export function Card() {
  return (
    <div className={styles.maindiv}>
      <div>
        <img
          width="400px"
          height="200px"
          src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          alt="img"
        />
      </div>
      <h3>Pepperoni Pizza</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        impedit, modi commodi molestias recusandae suscipit?
      </p>
      <div className={styles.caldiv}>
        <p>265cal</p>
        <p>P/F/C : 12/10/31</p>
        <p>53.8 C</p>
      </div>

      <div className={styles.caldiv}>
        <h2>$23.90</h2>
        <h2
          style={{
            color: "red",
            textDecoration: "line-through",
            marginLeft: "-20px"
          }}
        >
          $29.90
        </h2>
        <button className={styles.bt}>ORDER</button>
      </div>
    </div>
  );
}
