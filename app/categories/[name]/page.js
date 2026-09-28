import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";


export default async function CategoriesPage({ params }) {
  const { name } = await params;
const docs = getDocuments();
const matchedDocs = getDocumentsByCategory(docs, name);


  return (
    <div>
       <ContentDisplay id={matchedDocs[0].id} />
    </div>
  );
}