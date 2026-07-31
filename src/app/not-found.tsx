import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[100dvh] max-w-[800px] place-content-center px-5 py-16 sm:px-6">
      <p className="text-xs font-bold tracking-[0.2em] text-subtle uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase">
        Página não encontrada
      </h1>
      <Link
        className="mt-7 w-fit border-b border-line-strong text-sm font-semibold text-ink hover:border-ink"
        href="/"
      >
        Voltar para o início
      </Link>
    </main>
  );
}
