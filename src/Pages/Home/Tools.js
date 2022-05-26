import { data } from "autoprefixer";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import Tool from "./Tool";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("tools", () =>
    axios.get("https://afternoon-journey-16786.herokuapp.com/tools").then(toolsData => toolsData.data)
  );
  if(isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-6">
      <h2 className="text-4xl text-center">Too<span className="text-primary">ls</span></h2>
      <div className="container lg:px-28 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {
          tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;
