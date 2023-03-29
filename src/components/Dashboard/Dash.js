import React from "react";
import MyCard from "./Card/MyCard";
import { CgAddR } from "react-icons/cg";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import "./Card/card.css";
import { Card, CardBody, CardFooter } from "@material-tailwind/react";

const Dash = () => {
  return (
    <div className="mt-10 max-h-full flex justify-evenly w-full">
      <Card
        style={{
          width: "43%",
          borderRadius: "5%",
        }}
      >
        <div className="flex justify-between px-6 py-4 pb-0">
          <span size="sm">Items To Approve</span>
          <CgAddR size={25} />
        </div>
        <CardBody
          className="container"
          style={{
            width: "100%",
          }}
        >
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </CardBody>
        <CardFooter className="pt-3 flex justify-end ">
          <GrLinkPrevious className="mx-2" />
          <GrLinkNext />
        </CardFooter>
      </Card>
      <Card
        style={{
          width: "50%",
          borderRadius: "5%",
        }}
      >
        <div className="flex align-center justify-between px-6 py-4 pb-0">
          <span size="sm">My Activities</span>
          <CgAddR size={25} />
        </div>
        <CardBody
          className="container px-2"
          style={{
            width: "100%",
          }}
        >
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
          <MyCard />
        </CardBody>
        <CardFooter className="flex pt-3">
          <span>View all</span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dash;
