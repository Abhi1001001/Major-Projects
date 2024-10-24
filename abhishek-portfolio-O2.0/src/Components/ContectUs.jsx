import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import React from "react";

export default function ContectUs(props) {
  return (
    <>
      <section
        className={`p-3 ${
          props.darkMode ? "dark bg-[#18181b]" : ""
        }`}
      >
        <Card className="max-w-screen-2xl min-h-[80vh] m-auto dark:border-1 dark:border-[#3D4852]" shadow="lg">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="font-josefin text-2xl font-bold">My Educations</p>
            </div>
          </CardHeader>
          <Divider className="dark:bg-[#3D4852]" />
          <CardBody className="w-full">
          <Card className="md:w-3/5 w-11/12 m-auto dark:shadow-[0px_0px_40px_-20px_#ffe900d9] shadow-[0px_0px_40px_-12px_#0078ff]">
              <CardBody className="md:px-16 px-4">
                <div className="w-full flex flex-col">
                  <form action="" name="contact" netlify>
                  
                      <Input
                        type="text"
                        variant="underlined"
                        label="Name"
                        name="name"
                      />

                    
                      <Input
                        type="email"
                        variant="underlined"
                        label="Email"
                        name="email"
                      />

                   
                      <Input
                        type="text"
                        variant="underlined"
                        label="Phone No"
                        name="phone-no"
                      />
                    
                    
                      <Input
                        type="text"
                        variant="underlined"
                        label="Profile"
                        name="profile"
                      />
                   
                    
                      <Textarea
                        variant="underlined"
                        labelPlacement="inside"
                        placeholder="Write any message"
                        label="Comment"
                        name="message"
                      />
                    
                    <Button
                      className="w-14 float-right mt-4 hidden md:block"
                      color="primary"
                      variant="ghost"
                      type="submit"
                    >
                      Submit
                    </Button>
                    <Button
                      className="w-14 block md:hidden float-right mt-4"
                      color="primary"
                      variant="solid"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </section>
    </>
  );
}
