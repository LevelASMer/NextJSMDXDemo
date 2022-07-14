export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className="d-flex flex-column align-items-center py-5">
        <div>
          <a href="https://twitter.com/SaveYourPrimos">
            <i className="fs-2 p-1 text-white-50 fa-brands fa-twitter"></i>
          </a>
          <a href="https://discord.gg/SaveYourPrimos">
            <i className="fs-2 p-1 text-white-50 fa-brands fa-discord"></i>
          </a>
        </div>
        <div className="text-white-50">&copy;{date} SaveYourPrimos</div>
      </footer>
    </>
  );
}
