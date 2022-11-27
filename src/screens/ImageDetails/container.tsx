import React from "react";
import { useRoute } from "@react-navigation/native";

import ImageDetailsView from "./view";

import { DetailsScreenRouteProp } from "types/navigation";

const ImageDetailsContainer = () => {
  const {
    params: { data },
  } = useRoute<DetailsScreenRouteProp>();

  return <ImageDetailsView data={data} />;
};

export default ImageDetailsContainer;
