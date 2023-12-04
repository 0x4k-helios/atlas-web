import React from "react";
import Navbar from "../components/Navbar";
import { Group, TextInput, Textarea } from "@mantine/core";
import Button from "../components/ui/Button";
import { contactDetails } from "../data/contactData";

const ContactPage = () => {
  return (
    <>
      <section className="2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 dark-background py-16">
        <Navbar textColor="text-white" />
      </section>
      <div className="mt-40 2xl:px-[400px] xl:px-52 lg:px-40 sm:px-24 px-8 flex md:flex-row flex-col justify-between gap-16">
        <div className="left-side md:w-[50%] w-full">
          <h2 className="mb-4 md:text-5xl text-[32px] text-black leading-none tracking-wide max-w-fit ">
            Contact Us<span className="text-orange">.</span>
          </h2>
          <p className="paragraph w-[80%]">
            Leave your email and we will get back to you within 24 hours
          </p>
          <div>
            {contactDetails.map((item, i) => (
              <div className="mt-4" key={i}>
                <p className="flex items-center gap-2">
                  <span className="blueGradient p-2 rounded-full text-lg text-white inline-block">
                    {item.icon}{" "}
                  </span>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-side contact-form flex flex-col gap-4 md:w-[50%] w-full">
          <TextInput label="Email" placeholder="your@email.com" required />
          <TextInput label="Name" placeholder="John Doe" required />
          <Textarea
            label="Your Message"
            placeholder="Write your message here.."
            minRows={4}
            required
          />

          <Group justify="end">
            <Button title="Send" />
          </Group>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
