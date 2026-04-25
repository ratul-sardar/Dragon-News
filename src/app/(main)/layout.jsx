import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <header>
        <h2 className="">{children}</h2>
      </header>
    </>
  );
}
