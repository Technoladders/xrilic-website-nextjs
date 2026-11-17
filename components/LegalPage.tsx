import Footer from "./Footer";
import Navbar from "./Navbar";

const prose = [
  "mt-8 text-[15px] text-black/80 leading-relaxed",
  "[&_.meta]:text-secondary-text [&_.meta]:text-sm [&_.meta]:leading-snug [&_.meta+.meta]:mt-1",
  "[&_h2]:mt-12 [&_h2]:text-2xl md:[&_h2]:text-3xl",
  "[&_h3]:mt-7 [&_h3]:font-medium [&_h3]:text-base [&_h3]:text-foreground",
  "[&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5",
  "[&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:opacity-60",
  "[&_strong]:font-medium [&_strong]:text-foreground",
  "[&_table]:mt-4 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:text-sm",
  "[&_th]:border-b [&_th]:border-border [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-medium [&_th]:text-foreground",
  "[&_td]:border-b [&_td]:border-border [&_td]:px-3 [&_td]:py-2 [&_td]:align-top",
].join(" ");

/** Shared layout for the legal pages. `html` is the policy body copied from the previous xrilic.ai site. */
export default function LegalPage({ title, html }: { title: string; html: string }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <article className="mx-auto w-full max-w-3xl px-5 pt-14 pb-10 md:px-8 md:pt-20">
          <h1 className="text-balance text-[2.6rem] md:text-6xl">{title}</h1>
          <div className={prose} dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
