import Link from "../src/components/Link";

function Title({ children, as }) {
  const Tag = as;
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Title as='h1'>Alura Cases - Home</Title>
      <Link href="/faq">Ir para a página de FAQ</Link>
    </div>
  );
}
