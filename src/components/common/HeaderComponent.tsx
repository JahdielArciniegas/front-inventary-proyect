import { Link } from "react-router";
import styles from "./Home.module.css";

const HeaderComponent = ({
  title,
  description,
  imgUrl,
  url,
}: {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
}) => {
  return (
    <div className={styles.card}>
      <Link to={url}>
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <img src={imgUrl} alt={`foto grafica para sobre ${title}`} />
    </div>
  );
};

export default HeaderComponent;
