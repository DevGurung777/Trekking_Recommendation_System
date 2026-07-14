import { useParams } from "react-router-dom";

import TrekMap from "../components/Map/TrekMap";
import treks from "../data/treks";

const TrekDetail = () => {
  const { trekId } = useParams();

  const trek =
    treks[trekId as keyof typeof treks];

  if (!trek) {
    return <h1>Trek not found</h1>;
  }

  return (
    <>
      <TrekMap trek={trek} />
    </>
  );
};

export default TrekDetail;