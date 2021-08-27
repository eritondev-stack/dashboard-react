import React from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";



const ChartBar: React.FC = () => {
 
  return (
    <Card>
      <CardHeader color="pink" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          Overview
        </h6>
        <h2 className="text-white text-2xl">Sales value</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
           <img src="" alt="" />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartBar;
