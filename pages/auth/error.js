import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  const { error } = router.query;
  return (
    <>
      <div className="bg-white h-screen flex flex-col justify-center items-center ">
          <div className=" grid place-items-center prose ">
              <h1 className="prose-h1 text-2xl text-center">OH NO! An error occured 😭</h1>
              <h2 className="prose-h2 text-xl text-center text-red-500">Error: {error}</h2>
              <Link
              className=""
                href={`mailto:rafayel.amirkhanyan@gmail.com?subject=[classfinder2]%20ERROR:%20${error}`}
              >
                 <button
                      className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring h-12 "
                  
                    >
                      <span className="block px-8 py-3 text-sm font-medium bg-white text-red-500 hover:text-white rounded-full hover:bg-transparent ease-in-out duration-500 hover:shadow-inner">
                       Report error
                      </span>
                    </button>
              </Link>
          </div>
      </div>
    </>
  );
};

export default ErrorPage;
