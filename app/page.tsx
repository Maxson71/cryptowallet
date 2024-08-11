import Image from "next/image";
import WalletPage from "@/app/WalletPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold text-center">
            Вітаємо вас на нашому сайті
          </h1>
          <p className="text-center">
            Тут ви зможете знайти багато цікавої інформації
          </p>
          <WalletPage />
        </div>
      </div>
    </main>
  );
}
