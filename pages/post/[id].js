import { useRouter } from "next/router";

export default function Post() {
  const route = useRouter();
  return (
    <>
      <h1>Post : {route.query.id}</h1>{" "}
    </>
  );
}
