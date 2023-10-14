
// import Header from "@/components/header";
// import Footer from "@/components/footer";

// import Layout from "@/layout";
// import Image from "next/image";
// import { useEffect } from "react";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(()=>import("@/layout"))

export default function Main({ children, metaTitle, metaDescription }) {

  // useEffect(()=>{
  //   fetch("/api/hello")
  //   .then((res) => res.json())
  //   .then((res)=> console.log("response ", res))
  //   .catch((err)=> console.log("err => ", err))
  // }, [])

  return (
    <div>
      <LayoutComponent metaTitle={"Home"}>
     {/* <Layout metaTitle="Home"> */}
      <p>Home</p>
      {/* <Image src="/haircut.png" width={500} height={400} alt="barber img"/>
      <img 
        src="/haircut.png"
        style={{ width:500, height: 400 }}
        alt="barber img"
      /> */}
      {/* </Layout> */}
      </LayoutComponent>
    </div>
  );
}