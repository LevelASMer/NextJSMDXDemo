import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ title }) {
  const { asPath } = useRouter();

  function checkLink(url, name) {
    if (url == asPath) {
      return (
        <Link href={url}>
          <a class="fw-bold text-white text-decoration-none">{name}</a>
        </Link>
      );
    } else {
      return (
        <Link href={url}>
          <a class="text-white text-decoration-none">{name}</a>
        </Link>
      );
    }
  }

  return (
    <>
      <h1 class="mt-5 title">
        <Link href="/">
          <a class="text-white text-decoration-none">{title}</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>{checkLink('/upcoming', 'Upcoming')}</li>
          <li>Resources</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </>
  );
}
