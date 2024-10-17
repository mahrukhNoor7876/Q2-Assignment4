import Image from "next/image";
import Link from "next/link";
import logo1 from "/public/logo1.png";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex items-center gap-10 h-16 w-full pl-5 pr-5 bg-blue-900">
          <div className="mt-20 w-30">
            <Image 
              src={logo1}
              alt="logo"
              height={100}
              width={100}
            />
          </div>
          <div className="h-7 w-[60%]">
            <h1 className="font-bold text-[24px] text-blue-200">Tuition Free Education Program on Latest Technologies</h1>
          </div>
          <div className="w-66 ml-auto">
            <ul className="flex gap-6 items-center text-gray-100 text-[19px]">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Apply</Link>
              </li>
              <li>
                <Link href="/">Jobs</Link>
              </li>
              <li>
                <Link href="/">Courses</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
      <main>
        <section className="flex justify-center gap-5 h-auto w-ful p-5 mt-10">
          <div className="h-80 w-[420px] bg-gray-200 rounded-md shadow-2xl"></div>
          <div className="h-80 w-[420px] bg-gray-200 rounded-md shadow-2xl"></div>
          <div className="h-80 w-[420px] bg-gray-200 rounded-md shadow-2xl"></div>
        </section>
        
        <section className="flex gap-2 justify-center h-auto w-full mt-5 p-5">
          <div className="h-[550px] w-[50%] bg-gray-200 rounded-md"></div>
          <div className="h-[550px] w-[50%] bg-gray-200 rounded-md"></div>
        </section>
      </main>
    </div>
  );
}
