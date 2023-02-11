import TestComponent from "@components/test";
import { Inter } from "@next/font/google";
import PageHead from "@shared/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageHead title="Home Page" />
      <main>
        <TestComponent />
      </main>
    </>
  );
}
