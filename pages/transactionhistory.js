import Head from "next/head";
import CustomTable from "../components/CustomTable";

const transactionHistory = ({ result }) => {
  return (
    <>
      <Head>MG Banking - transactionHistory</Head>

      <div className="banner__container" style={{ height: "60vh" }}>
        <div className="content tcontent" style={{ marginTop: "8rem" }}>
          <CustomTable
            title="Transaction History"
            data={result.transactions}
            forTransfer={true}
          />
        </div>
      </div>
    </>
  );
};

export default transactionHistory;

export async function getServerSideProps() {
  const res = await fetch(
    `https://basic-banking-system-six.vercel.app/api/transaction`
  );
  const result = await res.json();

  return {
    props: {
      result,
    },
  };
}
