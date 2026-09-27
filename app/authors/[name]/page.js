export default async function CategoriesPage({ params }) {
  const { name } = await params;

  return (
    <div>
       {name}
    </div>
  );
}