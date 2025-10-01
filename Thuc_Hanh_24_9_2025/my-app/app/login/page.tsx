import Link from "next/link";
import styles from "./login.module.css";
import type { CSSProperties } from "react";

export const metadata = { title: "Đăng Nhập" };

export default function LoginPage() {
  // Chiều cao header (đổi nếu header cao hơn/thấp hơn)
  const headerH = "72px";

  // Kiểu CSS có biến custom
  const cssVars: CSSProperties & { "--header-h": string } = {
    "--header-h": headerH,
  };

  return (
    <>
      {/* Nền full-screen trừ phần header */}
      <div className={styles.background} style={cssVars} />

      {/* Vùng chứa form, cao = 100vh - header */}
      <div className={styles.container} style={cssVars}>
        <form action="/api/login" method="POST" className={styles.form}>
          <h2 className={styles.title}>Đăng Nhập</h2>

          <div className={styles.inputField}>
            <input type="email" name="email" id="email" required placeholder=" " />
            <label htmlFor="email">Nhập email của bạn</label>
          </div>

          <div className={styles.inputField}>
            <input type="password" name="password" id="password" required placeholder=" " />
            <label htmlFor="password">Nhập mật khẩu của bạn</label>
          </div>

          <div className={styles.forget}>
            <label htmlFor="remember" className={styles.remember}>
              <input type="checkbox" id="remember" name="remember" />
              <span>Ghi nhớ Đăng Nhập</span>
            </label>
            <Link href="/forgot">Quên mật khẩu?</Link>
          </div>

          <button type="submit" className={styles.btn}>Đăng Nhập</button>

          <div className={styles.register}>
            Không có tài khoản? <Link href="/register">Đăng Ký</Link>
          </div>
        </form>
      </div>
    </>
  );
}
