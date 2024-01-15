import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-lg"> Intercepting Routes </h1>
      <Link href={"/photo"} className="underline italic text-blue-600">
        {" "}
        View Photos{" "}
      </Link>
    </main>
  );
}
