import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import {  getDocumentsByTag } from "@/utils/doc-utils";

export default async function TagPage({ params }) {
  const { name } = await params;
const docs = getDocuments();
const matchedDocs = getDocumentsByTag(docs, name);


  return (
    <div>
       <ContentDisplay id={matchedDocs[0].id} />
    </div>
  );
}