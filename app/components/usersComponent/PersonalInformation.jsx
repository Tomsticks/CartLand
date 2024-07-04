"use client";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

export default function PersonalInfo() {
  return (
    <div className=" items-center">
      <form className=" grid grid-cols-2 gap-10 px-10 mt-24 lg:grid-cols-1 sm:px-2 shadow-xl py-10 ">
        <Input label="First Name" value="Olaniyan Miracle Toluwani" />
        <Input label="Last Name" />
        <Input label="Birthday" type="date" />
        <Select label="Gender">
          <Option>Male</Option>
          <Option>Female</Option>
          <Option>MaleFemale</Option>
        </Select>
        <Input label="Email" type="email" />
        <Input label="Phone Number" type="number" />
        <Button
          type="submit"
          className="bg-primary w-40 rounded-none"
          size="lg"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
