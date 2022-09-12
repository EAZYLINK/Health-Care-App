import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Grid,
  Stack,
  Input,
  Line,
} from "components";

const AboutusPage = () => {
  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] lg:pb-[115px] xl:pb-[131px] 2xl:pb-[148px] 3xl:pb-[178px] w-[100%]">
        <header className="font-splinesans w-[100%]">
          <Row className="bg-white_A700_99 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
            <Img
              src="images/img_20220827162854.png"
              className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 3xl:ml-[100px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] w-[9%]"
              alt="20220827162854"
            />
            <Text className="cursor-pointer font-medium hover:font-semibold 3xl:ml-[107px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
              Home
            </Text>
            <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_600 w-[auto]">
              About Us
            </Text>
            <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]">
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
        <List
          className="font-splinesans lg:gap-[51px] xl:gap-[59px] 2xl:gap-[66px] 3xl:gap-[80px] grid grid-cols-2 min-h-[auto] 3xl:mt-[100px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] pt-[2px] w-[85%]"
          orientation="horizontal"
        >
          <Column className="w-[100%]">
            <Text className="font-semibold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
              Our Mission
            </Text>
            <Row className="bg-blue_600 items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
              <Img
                src="images/img_rectangle54.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[134px] 3xl:h-[161px] lg:w-[103px] xl:w-[118px] 2xl:w-[133px] 3xl:w-[160px]"
                alt="RectangleFiftyFour"
              />
              <Text className="font-medium leading-[normal] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[66%]">
                To deliver innovative clinical and service experiences,
                accomplish excellence and establish care team with quality and
                humanized care.
              </Text>
            </Row>
          </Column>
          <Column className="w-[100%]">
            <Text className="font-semibold lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
              Our Vision
            </Text>
            <Row className="bg-blue_600 items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
              <Img
                src="images/img_rectangle54_160X160.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[134px] 3xl:h-[161px] lg:w-[103px] xl:w-[118px] 2xl:w-[133px] 3xl:w-[160px]"
                alt="RectangleFiftyFour One"
              />
              <Text className="font-medium leading-[normal] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[68%]">
                Our vision in Welive health care is to provide world-class
                healthcare with innovation for all our patients and doctor.{" "}
              </Text>
            </Row>
          </Column>
        </List>
        <Text className="font-bold font-splinesans lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[155px] lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
          Our Management
        </Text>
        <Grid className="font-splinesans lg:gap-[51px] xl:gap-[59px] 2xl:gap-[66px] 3xl:gap-[80px] grid grid-cols-4 lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[47px] w-[72%]">
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Maudin
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Team Leader(React JS)
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_200X252.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive One"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Faizah Alayo
              </Text>
              <Text className="font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                UI/UX Designer
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_1.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Two"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[28px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium 2xl:mt-[10px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Obasesam James
              </Text>
              <Text className="font-normal 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Graphics Designer
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_2.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Three"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[22px] xl:p-[25px] 2xl:p-[28px] 3xl:p-[34px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Ezekiel Nwuguru
              </Text>
              <Text className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Node JS
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_3.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Four"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[27px] xl:p-[31px] 2xl:p-[35px] 3xl:p-[43px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Moyinoluwa O
              </Text>
              <Text className="font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Technical Writer
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_4.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Five"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Odusoro Taiwo
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                UI/UX Designer
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_5.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Six"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[17px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Oduwole Olumide
              </Text>
              <Text className="font-normal 2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Graphic Designer
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_6.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Seven"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Ikeoluwa Ashade
              </Text>
              <Text className="font-normal lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                React JS
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_7.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Eight"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:p-[16px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[25px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Adeyemo Stephen
              </Text>
              <Text className="font-normal lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[16px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                React JS
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_8.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Nine"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[39px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Faizah Alayo
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Surgeon
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_5.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Ten"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[39px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Faizah Alayo
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Surgeon
              </Text>
            </Column>
          </Stack>
          <Stack className="lg:h-[201px] xl:h-[230px] 2xl:h-[258px] 3xl:h-[310px] w-[100%]">
            <Img
              src="images/img_rectangle55_6.png"
              className="absolute lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius20 top-[0] w-[100%]"
              alt="RectangleFiftyFive Eleven"
            />
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[39px] rounded-radius20 shadow-bs1 w-[100%]">
              <Text className="font-medium mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                Faizah Alayo
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                Surgeon
              </Text>
            </Column>
          </Stack>
        </Grid>
        <Text className="font-bold font-splinesans lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
          Our Clients
        </Text>
        <Text className="font-medium font-splinesans leading-[normal] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_800 w-[52%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim vitae venenatis vestibulum, facilisis aliquam enim
          consectetur.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dignissim vitae venenatis vestibulum, facilisis aliquam enim
          consectetur.
        </Text>
        <Row className="bg-blue_600 font-splinesans items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] w-[100%]">
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
        <Line className="bg-gray_900 h-[1px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[100%]" />
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dignissim vitae venenatis vestibulum, facilisis aliquam enim
              consectetur.
            </Text>
          </Column>
          <Column className="lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[3px] w-[24%]">
            <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
              Resources
            </Text>
            <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              dignissim vitae venenatis vestibulum, facilisis aliquam enim
              consectetur.
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
        <Text className="font-inter font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-gray_900 w-[auto]">
          ⓒ 2022 Welive Health. All rights reserved
        </Text>
      </Column>
    </>
  );
};

export default AboutusPage;
