import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heading}>Featured Products</h1>
      <h4 className={styles.heroSubHeading}>
        Explore and discover a variety of products
      </h4>
    </div>
  );
};
