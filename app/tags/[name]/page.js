export default async function TagPage({ params }) {
  const { name } = await params;

  return (
    <div>
      {name}
    </div>
  );
}