import HomeClient from "./HomeClient";

export default async function Page({ params }) {
  const { locale } = await params;

  return <HomeClient locale={locale} />;
}
