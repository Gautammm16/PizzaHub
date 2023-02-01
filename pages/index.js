
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import menu from "../pages/menu/index";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
if(process.browser) {
  // localStorage code here
  var myCookie = window.sessionStorage.getItem("auth") || "";
}
export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in surat</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {
        myCookie ? 
        <AddButton setClose={setClose} />
        : ""
        }
      <PizzaList pizzaList={pizzaList} />
     
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
 
  let admin = false;

  if ( myCookie && myCookie.token === "admin") {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
