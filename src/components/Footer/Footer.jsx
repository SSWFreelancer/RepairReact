import "./Footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#" className="footer__logo">
          <img src="images/footerlogo.png" alt="" />
        </a>
        <div className="footer__content">
          <a href="#">Политика конфиденциальности</a>
          <span>
            Информация на сайте не является публичной офертой. Вся информация об
            услугах и ценах, предоставленная на сайте, носит исключительно
            информационный характер и ни при каких условиях не является
            публичной офертой
          </span>
          <span>© Чистовой ремонт 2022</span>
        </div>
      </div>
    </footer>
  );
}
