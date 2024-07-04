"use client";
import { Card, Input, Typography, Button } from "@material-tailwind/react";

export default function PersonalInfo() {
  return (
    <div className=" items-center shadow-xl">
      <form className=" grid gap-10 w-[60%] px-10 mt-24 lg:grid-cols-1 sm:px-2  py-10 md:w-[100%] ">
        <Input label="Current Password" placeholder="enter current Password" />
        <Input label="New Password" placeholder="enter new password" />
        <Input label="Retype Password" placeholder="repeat your password" />

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
