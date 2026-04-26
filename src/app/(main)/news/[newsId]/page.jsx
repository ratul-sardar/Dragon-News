import CatagorySelectorButton from "@/components/Home_Sections/CatagorySelectorButton/CatagorySelectorButton";
import Sidebar from "@/components/Home_Sections/Sidebar/Sidebar";

export default function NewsDetail() {
  return (
    <section className="cssContainer grid grid-cols-12 gap-5  justify-center pb-12 ">
      {/* Catagory selector*/}
      <div className="col-span-3 space-y-2.5 p-4 bg-background-inverse">
        <h3 className="font-semibold text-md text-white mb-2">All Catagorys</h3>

        <CatagorySelectorButton></CatagorySelectorButton>
      </div>
      {/* End of catagory filter*/}

      {/* News Display area*/}
      <div className="col-span-6 bg-red-700">d</div>
      {/* End of news display*/}

      {/* Sidebar*/}
      <div className="col-span-3  p-4 bg-background-inverse text-white">
        <Sidebar></Sidebar>
      </div>
      {/* End of sidebar*/}
    </section>
  );
}
