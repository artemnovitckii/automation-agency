import React from "react";
import { useParams } from "react-router-dom";

interface ClientPageProps {}

const ClientPage: React.FC<ClientPageProps> = ({}) => {
  let { clientName } = useParams<"clientName">();
  return <div>ClientPage {clientName}</div>;
};

export default ClientPage;
