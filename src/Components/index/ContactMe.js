import React from "react";
import { TextField, Button } from "@mui/material";
import { Email, LocalPhone, Fax } from "@mui/icons-material";
import { Twitter, FacebookRounded, BlurCircular } from "@mui/icons-material";

export default function ContactMe() {
  const Icons = (props) => {
    return (
      <div className={`hover:cursor-pointer ${props.color}`}>
        <a href={`${props.link}`}>{props.icon} </a>
      </div>
    );
  };

  return (
    <div className="w-screen bg-slate-300">
      <div className=" h-64 relative ">
        <div className=" absolute top-32 flex justify-center items-center w-screen ">
          <span className=" tracking-wider text-8xl md:block hidden uppercase opacity-5">
            Contact
          </span>
        </div>
        <div className=" absolute top-40 flex justify-center items-center w-screen ">
          <span className="text-3xl underline-offset-8 underline ">
            Get in touch
          </span>
        </div>
      </div>
      <div className=" p-5 relative grid grid-cols-12">
        {/* Contact */}
        <div className=" lg:col-span-4 col-span-12 text-center md:text-left space-y-3 p-8 ">
          <span className=" text-lg uppercase font-extrabold">Address</span>
          <div className="flex flex-col space-y-1 ">
            <span>
              <LocalPhone />
              800-000-000
            </span>
            <span>
              <Fax /> 800-000-000
            </span>
            <span>
              <Email /> chat@gmail.com
            </span>
          </div>
          <span className=" text-lg uppercase font-extrabold">Follow me</span>
          <div className="flex space-x-3 justify-center md:justify-start">
            <Icons
              icon={<Twitter />}
              color="hover:text-blue-500 "
              link="https://twitter.com/?lang=en"
            />
            <Icons
              icon={<FacebookRounded />}
              color="hover:text-blue-800 "
              link="https://www.facebook.com/"
            />
            <Icons
              icon={<BlurCircular />}
              color="hover:text-red-500 "
              link="https://github.com/"
            />
          </div>
        </div>
        {/* Send me a message  */}
        <div className="  lg:col-span-8 col-span-12 text-center ">
          <div className=" flex flex-col p-5">
            <span className=" mb-6 text-3xl uppercase font-bold">
              Send me a note
            </span>

            <div className="flex justify-center space-x-7 mb-5">
              <TextField
                label="Name"
                multiline
                variant="filled"
                className=" w-full"
              />
              <TextField
                label="Email"
                multiline
                variant="filled"
                className="w-full"
              />
            </div>
            <TextField
              label="Message"
              multiline
              rows={4}
              placeholder="Tell me about your needs"
              variant="filled"
            />
          </div>
          <Button variant="contained" size="large">
            Send message
          </Button>
        </div>
      </div>
    </div>
  );
}
