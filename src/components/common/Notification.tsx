import styles from "./Notification.module.css";

const Notification = ({
  notification,
  error,
}: {
  notification: string | null;
  error: string | null;
}) => {
  return (
    <div className={styles.container}>
      {notification !== null && (
        <div className={styles.notification}>{notification}</div>
      )}
      {error !== null && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Notification;
