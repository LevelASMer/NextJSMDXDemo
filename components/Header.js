import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ title }) {
  const { asPath } = useRouter();

  function checkLink(url, name) {
    if (url == asPath) {
      return (
        <Link href={url}>
          <a className="list-group-item bg-primary bg-gradient border-primary fw-bold text-white text-decoration-none">
            {name}
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={url}>
          <a className="list-group-item bg-dark bg-gradient border-secondary text-white text-decoration-none">
            {name}
          </a>
        </Link>
      );
    }
  }

  return (
    <>
      <h1 className="mt-5 fw-bold display-3">
        <Link href="/">
          <a className="text-white text-decoration-none">{title}</a>
        </Link>
      </h1>
      <nav>
        <div className="list-group list-group-horizontal border-secondary">
          {checkLink('/upcoming', 'Upcoming')}
          {checkLink('/resources', 'Resources')}
          {checkLink('/faq', 'FAQ')}
        </div>
      </nav>
    </>
  );
}
