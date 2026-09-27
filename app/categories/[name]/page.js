export default async function AuthorPage({ params }) {
  const { name } = await params;

  return (
    <div>
      {name}
    </div>
  );
}