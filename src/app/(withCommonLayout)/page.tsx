"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return <div>Well come home page</div>;
};

export default HomePage;
