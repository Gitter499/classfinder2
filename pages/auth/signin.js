import React from "react";
import { useRouter } from "next/router";
import { getProviders, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/ClassfinderLogo.png";
import Card from "../../components/card";

const SignIn = ({ providers }) => {
  const router = useRouter();
  const { status } = useSession();

  status === "authenticated" && router.push("/");

  return (
    <>
      <div className="bg-gradient-to-tr from-sky-500 via-lime-600 to-pink-400 h-screen animate-background background-size">
        <div className="flex justify-center items-center h-screen w-screen">
          <div className="grid place-items-center mb-8  prose ">
            <Card h="full" p="2">
              <h1 className="text-4xl prose-h1 text-black pt-10 ">
                CLASSFINDER <span className="inline-block text-6xl text-center transform rotate-12 text-red-600">
                  2
                </span>
              </h1>
              <h3 className="pb-12 italic">Find your classes</h3>
              <div className="animate-bounce duration-1000 rounded-[80px]  border-8 border-black mt-10">
                <Image
                  className="rounded-[80px]  border-8 border-black "
                  src={logo}
                  width={"200vw"}
                  height={"200vh"}
                  alt="Classfinder logo"
                ></Image>
              </div>
            </Card>
            <Card h="1/2" p="6">
              {Object.values(providers).map((provider) => (
                <div
                  key={provider.name}
                  className="flex flex-col justify-center p-10 pb-6 w-full"
                >
                  <button
                    className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 drop-shadow-[4px_6px] hover:drop-shadow-[6px_8px] duration-500 ease-linear hover:text-white active:text-opacity-75 focus:outline-none focus:ring h-12 "
                    onClick={() =>
                      signIn(provider.id, {
                        callbackUrl: "/classes",
                      })
                    }
                  >
                    <span className="block px-12 py-[0.5rem] prose font-bold bg-white text-red-500 hover:text-white rounded-full hover:bg-transparent ease-in-out duration-500 ">
                      Sign in with {provider.name}
                    </span>
                  </button>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
