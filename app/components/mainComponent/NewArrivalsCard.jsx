import React from "react";
// import Link from 'next/link'
import Image from "next/image";
import { newArrivals } from "../../../data/NewArrivalsData";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function NewArrivalsCard(props) {
  const data = props.cardTitleDetails;
  return (
    <Card className="   w-72">
      <CardHeader
        shadow={false}
        floated={true}
        className="flex items-center justify-center"
      >
        <Image src={data.ProductImage} alt="card-image" className="" />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            <h1 className="text-[20px]">{data.ProductName}</h1>
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {data.currentPrice}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
        <section className=" flex space-x-2 items-center">
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />

          <p>({data.amountleft})</p>
        </section>
      </CardFooter>
    </Card>
  );
}
