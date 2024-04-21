import React from "react";
import { Button, Text, Heading, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="container-xs mt-2 flex items-center justify-between gap-5 md:flex-col md:p-5">
        <div className="flex w-[54%] items-center justify-between gap-5 md:w-full sm:flex-col">
          <Img src="images/img_image_45.png" alt="imagefortyfive" className="h-[49px] w-[39%] object-cover sm:w-full" />
          <ul className="flex flex-wrap gap-10">
            <li>
              <a href="#" className="cursor-pointer self-end">
                <Text
                  size="xl"
                  as="p"
                  className="!font-dinpro capitalize !text-gray-800_02 hover:font-bold hover:!text-green-800_01"
                >
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="self-end">
                <Heading size="xl" as="h5" className="!font-dinprobold !font-bold capitalize">
                  find doctors
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer self-end">
                <Text
                  size="xl"
                  as="p"
                  className="!font-dinpro capitalize !text-gray-800_02 hover:font-bold hover:!text-green-800_01"
                >
                  About us{" "}
                </Text>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button className="flex h-[56px] min-w-[118px] items-center justify-center rounded-[11px] border border-solid border-green-800_01 bg-orange-50 px-[29px] text-center font-dinpro text-2xl font-medium text-green-800_01 sm:px-5">
            Login
          </Button>
          <Button className="flex h-[56px] min-w-[163px] items-center justify-center rounded-[11px] bg-green-800_01 px-[35px] text-center font-dinpro text-2xl font-medium text-white-A700_01 sm:px-5">
            Sign-up
          </Button>
        </div>
      </div>
    </header>
  );
}
