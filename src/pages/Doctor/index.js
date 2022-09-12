import React from "react";

import { Column, Row, Img, Text, Button, Grid, Input, Line } from "components";

const DoctorPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-splinesans items-center mx-[auto] lg:pb-[25px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[40px] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700_99 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
            <Img
              src="images/img_20220827162854.png"
              className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 3xl:ml-[100px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] w-[9%]"
              alt="20220827162854"
            />
            <Text className="cursor-pointer font-medium hover:font-semibold 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
              Home
            </Text>
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
              About Us
            </Text>
            <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_600 w-[auto]">
              Doctor
            </Text>
            <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
              Services
            </Text>
            <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
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
        <Text className="font-bold lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
          Meet with our Doctors
        </Text>
        <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[23px] 3xl:gap-[28px] grid grid-cols-4 lg:mt-[44px] xl:mt-[50px] 2xl:mt-[56px] 3xl:mt-[68px] w-[86%]">
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_169X169.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven One"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_1.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Two"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_2.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Three"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_3.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Four"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_4.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Five"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_5.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Six"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_6.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Seven"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_7.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Eight"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_8.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Nine"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_9.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Ten"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
          <Column className="bg-teal_50 items-center lg:p-[16px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]">
            <Img
              src="images/img_ellipse11_10.png"
              className="lg:h-[110px] xl:h-[126px] 2xl:h-[141px] 3xl:h-[170px] rounded-radius50 lg:w-[109px] xl:w-[125px] 2xl:w-[140px] 3xl:w-[169px]"
              alt="EllipseEleven Eleven"
            />
            <Text className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[43px] lg:text-[26px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
              Taiwo Odusoro
            </Text>
            <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_800 w-[auto]">
              Surgeon
            </Text>
            <Text className="font-light leading-[normal] mb-[4px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-black_900 text-center w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              tincidunt volutpat laoreet tincidunt gravida netus pretium. Cursus
              ut{" "}
            </Text>
          </Column>
        </Grid>
        <Button
          className="font-medium lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[17%]"
          shape="RoundedBorder16"
          size="sm"
          variant="FillLightblue900"
        >
          Book an Appointment
        </Button>
        <Row className="bg-blue_600 items-center lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] w-[100%]">
          <Column className="lg:ml-[119px] xl:ml-[137px] 2xl:ml-[154px] 3xl:ml-[185px] mt-[2px] w-[43%]">
            <Text className="font-bold lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-white_A700 w-[auto]">
              Get in Touch
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-white_A700_cc w-[71%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dignissim vitae venenatis vestibulum, facilisis aliquam enim
              consectetur.
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
        <footer className="font-inter 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[86px] w-[100%]">
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
    </>
  );
};

export default DoctorPage;
