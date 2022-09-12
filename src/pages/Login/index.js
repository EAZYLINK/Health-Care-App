import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Text, Line, Row, Button } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/signup");
  }

  return (
    <>
      <Column
        className="bg-cover bg-repeat bg-white_A700 font-splinesans items-center mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_login.png')" }}
      >
        <Column className="bg-blue_600_ea justify-center lg:pl-[123px] xl:pl-[140px] 2xl:pl-[158px] 3xl:pl-[190px] lg:py-[123px] xl:py-[140px] 2xl:py-[158px] 3xl:py-[190px] w-[100%]">
          <Text className="font-semibold 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] xl:mr-[1071px] 2xl:mr-[1205px] 3xl:mr-[1445px] lg:mr-[936px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_100 w-[auto]">
            Login
          </Text>
          <Column className="lg:mb-[42px] xl:mb-[48px] 2xl:mb-[55px] 3xl:mb-[66px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
            <Line className="bg-blue_100 h-[1px] w-[100%]" />
            <Column className="bg-white_A700 lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[47px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius16 w-[88%]">
              <Text className="font-medium lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_901 w-[auto]">
                Enter Your Email Address:
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:mt-[60px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[93px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius16 w-[88%]">
              <Text className="font-medium lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_901 w-[auto]">
                Enter Your Password:
              </Text>
            </Column>
            <Row className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] w-[21%]">
              <div className="bg-white_A700 border border-blue_600 border-solid lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] mb-[2px] w-[12%]"></div>
              <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] mt-[3px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
                Keep me logged in
              </Text>
            </Row>
            <Button
              className="font-medium lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[14%]"
              shape="RoundedBorder16"
              size="lg"
              variant="OutlineLightblue9001_2"
            >
              Login
            </Button>
            <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[70px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
              Forgot Password?
            </Text>
            <Row className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[82px] w-[31%]">
              <Text className="font-medium mb-[3px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
                Don’t have an account?{" "}
              </Text>
              <Text
                className="common-pointer font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] mt-[3px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 underline w-[auto]"
                onClick={handleNavigate2}
              >
                Sign Up
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default LoginPage;
