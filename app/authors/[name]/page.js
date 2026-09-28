import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

export default async function AuthorPage({ params }) {
  const { name } = await params;
const docs = getDocuments();
const matchedDocs = getDocumentsByAuthor(docs, name);


  return (
    <div>
       <ContentDisplay id={matchedDocs[0].id} />
    </div>
  );
}