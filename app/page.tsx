import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Home />
      </main>
      <Footer />
    </>
  );
}
