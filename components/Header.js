import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ title }) {
  const { asPath } = useRouter();

  function checkLink(url, name) {
    if (url == asPath) {
      return (
        <li class="list-group-item bg-primary bg-gradient border-primary">
          <Link href={url}>
            <a class="fw-bold text-white text-decoration-none">{name}</a>
          </Link>
        </li>
      );
    } else {
      return (
        <li class="list-group-item bg-dark bg-gradient border-secondary">
          <Link href={url}>
            <a class="text-white text-decoration-none">{name}</a>
          </Link>
        </li>
      );
    }
  }

  return (
    <>
      <h1 class="mt-5 fw-bold display-3">
        <Link href="/">
          <a class="text-white text-decoration-none">{title}</a>
        </Link>
      </h1>
      <nav>
        <ul class="list-group list-group-horizontal border-secondary">
          {checkLink('/upcoming', 'Upcoming')}
          {checkLink('/resources', 'Resources')}
          {checkLink('/faq', 'FAQ')}
        </ul>
      </nav>
    </>
  );
}
