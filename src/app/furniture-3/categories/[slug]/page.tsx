import type { Metadata } from "next";
// PAGE VIEW COMPONENT
import { FurnitureThreeCategoriesPageView } from "pages-sections/furniture-3/page-view";
// CUSTOM DATA MODEL
import { SlugParams } from "models/Common";

export const metadata: Metadata = {
};

export default function FurnitureThreeCategories({ params }: SlugParams) {
  return <FurnitureThreeCategoriesPageView slug={params.slug} />;
}
