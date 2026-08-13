import ClientPage from './client';

export function generateStaticParams() {
  return [{ id: '1' }];
}

export default function Page() {
  return <ClientPage />;
}