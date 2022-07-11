import Link from 'next/link';

export default function Header({ title }) {
  return (
    <>
      <h1 className="title">
        <Link href="/">
          <a>{title}</a>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/upcoming">
              <a>Upcoming</a>
            </Link>
          </li>
          <li>Resources</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </>
  );
}
