import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Text, Line, Button, Row } from "components";

const SignupPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/homepage");
  }

  return (
    <>
      <Column
        className="bg-cover bg-repeat bg-white_A700 font-splinesans items-center mx-[auto] w-[100%]"
        style={{ backgroundImage: "url('images/img_signup.png')" }}
      >
        <Column className="bg-blue_600_ea justify-end xl:pl-[106px] 2xl:pl-[120px] 3xl:pl-[144px] lg:pl-[93px] xl:py-[106px] 2xl:py-[120px] 3xl:py-[144px] lg:py-[93px] w-[100%]">
          <Text className="font-semibold lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[55px] xl:mr-[1056px] 2xl:mr-[1188px] 3xl:mr-[1425px] lg:mr-[923px] lg:mt-[44px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_100 w-[auto]">
            Signup
          </Text>
          <Column className="lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[97%]">
            <Line className="bg-blue_100 h-[1px] w-[100%]" />
            <Column className="bg-white_A700 lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[47px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius28 w-[88%]">
              <Text className="font-medium lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_901 w-[auto]">
                Enter Your Full Name:
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius28 w-[88%]">
              <Text className="font-medium lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_901 w-[auto]">
                Enter Your Email Address:
              </Text>
            </Column>
            <Column className="bg-white_A700 lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[32px] rounded-radius28 w-[88%]">
              <Text className="font-medium lg:my-[11px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-black_901 w-[auto]">
                Enter Your Password:
              </Text>
            </Column>
            <Text className="font-medium lg:mt-[32px] xl:mt-[37px] 2xl:mt-[41px] 3xl:mt-[50px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
              Minimum of 8 Characters
            </Text>
            <Button
              className="font-medium lg:mt-[33px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[15%]"
              shape="RoundedBorder16"
              size="lg"
              variant="OutlineLightblue9001_2"
            >
              Signup
            </Button>
            <Row className="items-center xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[9px] 3xl:mt-[101px] lg:mt-[65px] xl:mt-[74px] 2xl:mt-[84px] w-[30%]">
              <Text className="font-medium my-[1px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
                Already have an account?
              </Text>
              <Text
                className="common-pointer font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 underline w-[auto]"
                onClick={handleNavigate3}
              >
                Login
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default SignupPage;
