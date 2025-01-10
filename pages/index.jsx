import Link from '../src/components/Link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/faq">
        Ir para a página de FAQ
      </Link>
    </div>
  );
}