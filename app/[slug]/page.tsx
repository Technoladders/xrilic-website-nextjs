import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPage from "@/components/ProductPage";
import { productOrder, products } from "@/lib/content";

// Static export: only these slugs exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return productOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products[slug];
  if (!p) return {};
  return { title: p.metaTitle, description: p.metaDescription };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products[slug];
  if (!p) notFound();
  return <ProductPage p={p} />;
}
