import React from "react";

import { Column, Row, Img, Text, Button, Input, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FAQPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-splinesans mx-[auto] lg:pb-[25px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[40px] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700_99 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
              <Img
                src="images/img_20220827162854.png"
                className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 3xl:ml-[100px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] w-[9%]"
                alt="20220827162854"
              />
              <Text className="cursor-pointer font-medium hover:font-semibold 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 hover:text-gray_901 w-[auto]">
                Home
              </Text>
              <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 hover:text-gray_901 w-[auto]">
                About Us
              </Text>
              <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_901 w-[auto]">
                Doctor
              </Text>
              <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 hover:text-gray_901 w-[auto]">
                Services
              </Text>
              <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_600 hover:text-gray_901 w-[auto]">
                FAQ
              </Text>
              <Button
                className="font-medium 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[9%]"
                shape="RoundedBorder16"
                size="sm"
                variant="OutlineLightblue900"
              >
                Sign Up
              </Button>
              <Button
                className="font-medium lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[7%]"
                shape="RoundedBorder16"
                size="sm"
                variant="FillLightblue900"
              >
                Login
              </Button>
            </Row>
          </header>
          <Column className="bg-blue_100 items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] xl:p-[104px] 2xl:p-[117px] 3xl:p-[141px] lg:p-[91px] w-[100%]">
            <Text className="font-bold lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Ask Us Anything
            </Text>
            <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-black_900 w-[auto]">
              Have any questions? we are here to assist you
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] placeholder:text-black_900 text-black_900 w-[100%]"
              wrapClassName="2xl:mb-[6px] 2xl:mt-[90px] 3xl:mb-[8px] 3xl:mt-[108px] flex lg:mb-[5px] lg:mt-[70px] w-[56%] xl:mb-[5px] xl:mt-[80px]"
              name="Frame123"
              placeholder="Search here"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer lg:w-[25px] lg:h-[26px] lg:ml-[3px] lg:mr-[15px] xl:w-[29px] xl:h-[30px] xl:ml-[4px] xl:mr-[17px] 2xl:w-[33px] 2xl:h-[34px] 2xl:ml-[5px] 2xl:mr-[20px] 3xl:w-[40px] 3xl:h-[41px] 3xl:ml-[6px] 3xl:mr-[24px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#000000"
                    className="cursor-pointer lg:w-[25px] lg:h-[26px] lg:ml-[6px] lg:mr-[14px] xl:w-[29px] xl:h-[30px] xl:ml-[7px] xl:mr-[16px] 2xl:w-[33px] 2xl:h-[34px] 2xl:ml-[8px] 2xl:mr-[18px] 3xl:w-[40px] 3xl:h-[41px] 3xl:ml-[10px] 3xl:mr-[22px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
          </Column>
          <Row className="lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[97px] xl:pr-[5px] lg:pr-[5px] 2xl:pr-[6px] 3xl:pr-[8px] xl:pt-[5px] lg:pt-[5px] 2xl:pt-[6px] 3xl:pt-[8px] w-[78%]">
            <Img
              src="images/img_arrowup.svg"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[4%]"
              alt="arrowup"
            />
            <Column className="lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] w-[91%]">
              <Text className="font-normal font-splinesans not-italic lg:text-[36px] xl:text-[41px] 2xl:text-[47px] 3xl:text-[56px] text-black_900 w-[auto]">
                What kind of medical services do they offer?
              </Text>
              <Text className="font-inter font-normal leading-[normal] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] not-italic lg:text-[27px] xl:text-[31px] 2xl:text-[35px] 3xl:text-[42px] text-black_900 w-[100%]">
                Welive health care, Nigeria, provides heart care, consultancy,{" "}
                <br />
                ENT, Cardiosurgery, and critical care to medical evaluation.
              </Text>
            </Column>
          </Row>
        </Column>
        <Row className="items-center lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[157px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[95px] w-[72%]">
          <Img
            src="images/img_arrowdown_black_900.svg"
            className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] w-[4%]"
            alt="arrowdown"
          />
          <Text className="font-normal lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[71px] not-italic lg:text-[36px] xl:text-[41px] 2xl:text-[47px] 3xl:text-[56px] text-black_900 w-[auto]">
            What kind of medical services do they offer?
          </Text>
        </Row>
        <Row className="items-center lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[157px] 2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[81px] xl:mt-[92px] w-[66%]">
          <Img
            src="images/img_arrowdown_black_900.svg"
            className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] w-[4%]"
            alt="arrowdown One"
          />
          <Text className="font-normal lg:ml-[46px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[71px] not-italic lg:text-[36px] xl:text-[41px] 2xl:text-[47px] 3xl:text-[56px] text-black_900 w-[auto]">
            What common conditions do they treat?
          </Text>
        </Row>
        <Row className="items-center lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[157px] 2xl:mt-[105px] 3xl:mt-[127px] lg:mt-[82px] xl:mt-[94px] w-[53%]">
          <Img
            src="images/img_arrowdown_black_900.svg"
            className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] w-[5%]"
            alt="arrowdown Two"
          />
          <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[75px] not-italic lg:text-[36px] xl:text-[41px] 2xl:text-[47px] 3xl:text-[56px] text-black_900 w-[auto]">
            How do I book an appointment?
          </Text>
        </Row>
        <Row className="items-center lg:ml-[101px] xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[157px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[61%]">
          <Img
            src="images/img_arrowdown_black_900.svg"
            className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[26px] w-[5%]"
            alt="arrowdown Three"
          />
          <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[75px] not-italic lg:text-[36px] xl:text-[41px] 2xl:text-[47px] 3xl:text-[56px] text-black_900 w-[auto]">
            How much does a consultation cost?
          </Text>
        </Row>
        <Column className="items-center lg:mt-[302px] xl:mt-[345px] 2xl:mt-[388px] 3xl:mt-[466px] w-[100%]">
          <Row className="bg-blue_600 items-center lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] w-[100%]">
            <Column className="lg:ml-[119px] xl:ml-[137px] 2xl:ml-[154px] 3xl:ml-[185px] mt-[2px] w-[43%]">
              <Text className="font-bold lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-white_A700 w-[auto]">
                Get in Touch
              </Text>
              <Text className="font-normal leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-white_A700_cc w-[71%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
            <Input
              className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="w-[26%]"
              type="email"
              name="FrameEightyThree"
              placeholder="Your Email"
            ></Input>
            <Button
              className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[9%]"
              size="md"
              variant="FillTeal50"
            >
              Subscribe
            </Button>
          </Row>
          <footer className="font-inter xl:mt-[100px] 2xl:mt-[113px] 3xl:mt-[136px] lg:mt-[88px] w-[100%]">
            <Column className="items-center w-[100%]">
              <Line className="bg-gray_900 h-[1px] w-[100%]" />
              <Row className="font-splinesans justify-center lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[39px] w-[67%]">
                <Img
                  src="images/img_20220827162854.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] w-[13%]"
                  alt="20220827162854 One"
                />
                <Column className="lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[27%]">
                  <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                    Company Info
                  </Text>
                  <Text className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[87%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas dignissim vitae venenatis vestibulum, facilisis
                    aliquam enim consectetur.
                  </Text>
                </Column>
                <Column className="lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[3px] w-[24%]">
                  <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                    Resources
                  </Text>
                  <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas dignissim vitae venenatis vestibulum, facilisis
                    aliquam enim consectetur.
                  </Text>
                </Column>
                <Column className="lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[21%]">
                  <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                    Contact
                  </Text>
                  <Row className="items-center ml-[3px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[80%]">
                    <Img
                      src="images/img_call.svg"
                      className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                      alt="call"
                    />
                    <Text className="font-medium lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_800 w-[auto]">
                      000-123-456
                    </Text>
                  </Row>
                  <Row className="items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] pl-[3px] py-[3px] w-[100%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] my-[2px] w-[14%]"
                      alt="checkmark"
                    />
                    <Text className="font-normal lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_900 w-[auto]">
                      welivehealth@gmail.com
                    </Text>
                  </Row>
                  <Img
                    src="images/img_frame100.png"
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[33px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] w-[100%]"
                    alt="Frame100"
                  />
                </Column>
              </Row>
              <Line className="bg-gray_600 h-[1px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[86%]" />
              <Text className="font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900 w-[auto]">
                ⓒ 2022 Welive Health. All rights reserved
              </Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default FAQPage;
