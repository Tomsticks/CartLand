"use client";
import { Card, Input, Typography, Button } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";

export default function PersonalInfo() {
  return (
    <div className=" items-center">
      <form className=" grid grid-cols-2 gap-10 px-10 mt-24 lg:grid-cols-1 sm:px-2 shadow-xl py-10 ">
        <Input label="First Name" value="Olaniyan Miracle Toluwani" />
        <Input label="Phone Number" />
        <Select label="Country">
          <Option>Niger</Option>
          <Option>Canada</Option>
          <Option>Nigeria</Option>
        </Select>
        <Select label="State">
          <Option>Abuja</Option>
          <Option>Ekiti</Option>
          <Option>Benin</Option>
          <Option>Kwara</Option>
        </Select>
        <Select label="City">
          <Option>Ado</Option>
          <Option>Efon</Option>
          <Option>Ikere</Option>
        </Select>
        <Input label="Address" type="text" />
        <Button
          type="submit"
          className="bg-primary w-60 rounded-none"
          size="lg"
        >
          Save Changes
        </Button>
      </form>
    </div>
  );
}
