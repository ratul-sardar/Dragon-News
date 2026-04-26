import { Circles } from "react-loader-spinner";

export default function Loading() {
  return (
    <section>
      <div className="cssContainer w-full h-dvh flex items-center justify-center">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </section>
  );
}
