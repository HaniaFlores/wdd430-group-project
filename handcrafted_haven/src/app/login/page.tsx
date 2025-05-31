// src/app/login/page.tsx
import styles from './login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1> {/* Usamos styles.title */}
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label> {/* Usamos styles.label */}
          <input type="email" id="email" name="email" required className={styles.input} /> {/* Usamos styles.input */}
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label> {/* Usamos styles.label */}
          <input type="password" id="password" name="password" required className={styles.input} /> {/* Usamos styles.input */}
        </div>
        <button type="submit" className={styles.button}>Log In</button>
        <p className={styles.signUpLink}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}