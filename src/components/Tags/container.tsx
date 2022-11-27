import React, { useMemo } from "react";

import TagsView from "./view";

interface Props {
  data: string;
}

const TagsContainer = ({ data }: Props) => {
  const tags = useMemo(() => data.split(", "), [data]);

  return <TagsView tags={tags} />;
};

export default TagsContainer;
