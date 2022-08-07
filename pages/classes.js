import React from "react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const Classes = ({ user, classes }) => {
  console.log(user);
  return (
    <>
      <h1>Welcome {user.name}!</h1>
      <h2>Email: {user.email}</h2>
      <button
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
      >
        Sign out of {user.name}
      </button>
      <ul>
        {classes ? (
          classes.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <h1>No classes found</h1>
        )}
      </ul>
     
    </>
  );
};

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  const prisma = new PrismaClient();
  const classes = await prisma.class.findMany();

  return {
    props: {
      user: session.user,
      classes
    },
  };
}

export default Classes;
