import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href='/projects'>projects</Link>
        </li>
      </ul>
    </main>
  );
}
