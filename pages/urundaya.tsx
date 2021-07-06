import Head from "next/head";
import Airtable from "airtable";
import { useEffect, useState } from "react";

type UrunDayaProps = {
  base: any;
  table: string[];
  apiKey: string;
};

export default function UrunDaya(props: UrunDayaProps) {
  // TODO: Use getInitialProps or getStaticProps instead of useEffect
  useEffect(() => {
    const base = new Airtable({ apiKey: props.apiKey }).base(
      "appxkHt7qtyh7IIPp"
    );
    base("Table 1")
      .select({
        view: "Grid view",
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        setTable(records);
      });
    // const names = table.map((name) => <li key={name}>{name}</li>);
  }, [props.apiKey]);
  const [table, setTable] = useState([]);
  const names = table?.map((record) => (
    <li key={record}>{JSON.stringify(record)}</li>
  ));
  return (
    <>
      <Head>
        <title>Urun Daya - Warga Bantu Warga</title>
        <meta
          name="description"
          content="Kumpulan Informasi untuk membantu melawan COVID-19"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        {/* <OxygenList /> */}
        <ul>{names}</ul>
      </main>
    </>
  );
}

UrunDaya.getInitialProps = async () => {
  // Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
  // const base = Airtable.base("appxkHt7qtyh7IIPp");
  // let table = await base.makeRequest();
  // const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  //   "appxkHt7qtyh7IIPp"
  // );
  // const table = [];
  // base("Table 1")
  //   .select({
  //     view: "Grid view",
  //   })
  //   .firstPage(function (err, records) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     records?.forEach(function (record) {
  //       console.log("Retrieved", record.get("Name"));
  //       table.push(record.get("Name"));
  //     });
  //   });

  return {
    // base,
    // table,
    apiKey: process.env.AIRTABLE_API_KEY,
  };
};
