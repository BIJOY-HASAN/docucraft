import ContentDisplay from "@/components/ContentDisplay";

export default async function Page({ params }) {
  const { contentId } = await params;
  return <ContentDisplay id={contentId} />;
}
