import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
// LOCAL CUSTOM COMPONENTS
import Section2 from "../section-2";
// API FUNCTIONS
import api from "utils/__api__/furniture-3";

// ==============================================================
type Props = { slug: string };
// ==============================================================

export default async function FurnitureThreeCategoriesPageView({ slug }: Props) {
  const [products, breadcrumb] = await Promise.all([
    api.getAllProductsBySlug(),
    api.getBreadcrumb(slug)
  ]);

  return (
    <Fragment>

      
      <Section2 products={products} breadcrumb={breadcrumb} />
      <Setting />


    </Fragment>
  );
}
