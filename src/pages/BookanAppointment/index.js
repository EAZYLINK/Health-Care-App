import React from "react";

import { Column, Stack, Text, Row, Img, Slider, Button } from "components";

const BookanAppointmentPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-splinesans items-center justify-end mx-[auto] pt-[3px] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Stack className="bg-blue_600_e0 xl:h-[1045px] 2xl:h-[1175px] 3xl:h-[1410px] lg:h-[914px] overflow-auto w-[100%]">
            <Column className="absolute left-[6%] top-[27%] w-[42%]">
              <Text className="font-medium xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_50 w-[auto]">
                Doctor Name
              </Text>
              <div className="bg-white_A700 3xl:h-[102px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-radius1235 w-[100%]"></div>
            </Column>
            <Row className="absolute inset-x-[0] items-center mx-[auto] top-[10%] w-[88%]">
              <Column className="w-[52%]">
                <Text className="font-medium ml-[4px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_50 w-[auto]">
                  Phone Number
                </Text>
                <Column className="bg-white_A700 lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:px-[24px] xl:px-[28px] 2xl:px-[31px] 3xl:px-[38px] rounded-radius1233 w-[91%]">
                  <Column className="bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[91%]">
                    <Text className="font-medium lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_400 w-[auto]">
                      Enter Your Phone Number
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="w-[48%]">
                <Text className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_50 w-[auto]">
                  Booking Date
                </Text>
                <Row className="bg-white_A700 items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:px-[32px] xl:px-[37px] 2xl:px-[41px] 3xl:px-[50px] rounded-radius1225 w-[100%]">
                  <Column className="bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[93%]">
                    <Text className="font-medium lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_400 w-[auto]">
                      Enter Booking Date
                    </Text>
                  </Column>
                  <Img
                    src="images/img_calendar.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[17px] 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[2%]"
                    alt="calendar"
                  />
                </Row>
              </Column>
            </Row>
            <Column className="absolute bottom-[8%] inset-x-[0] mx-[auto] w-[87%]">
              <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-teal_50 w-[auto]">
                Message
              </Text>
              <Column className="bg-white_A700 xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:p-[23px] xl:p-[27px] 2xl:p-[30px] 3xl:p-[37px] w-[100%]">
                <Text className="font-medium lg:mb-[225px] xl:mb-[257px] 2xl:mb-[290px] 3xl:mb-[348px] mt-[4px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_400 w-[auto]">
                  Write here
                </Text>
              </Column>
              <Column className="bg-teal_50 border-2 border-light_blue_900 border-solid items-center 2xl:ml-[1049px] 3xl:ml-[1258px] lg:ml-[815px] xl:ml-[932px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] lg:p-[21px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[33px] rounded-radius16 shadow-bs w-[16%]">
                <Text className="font-medium mb-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-blue_600 w-[auto]">
                  Submit
                </Text>
              </Column>
            </Column>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={3}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[0.81] absolute"
              magnifiedIndex={2}
              centerMode
              ref={sliderRef}
              className="absolute inset-x-[0] mx-[auto] top-[27%] w-[85%]"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="w-[100%]">
                    <Text className="font-medium lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] text-teal_50 w-[auto]">
                      Department
                    </Text>
                    <Row className="bg-white_A700 items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:px-[27px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius1225 w-[100%]">
                      <Column className="bg-white_A700 lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius16 w-[91%]">
                        <Text className="font-medium lg:mb-[4px] 2xl:mb-[5px] xl:mb-[5px] 3xl:mb-[7px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_400 w-[auto]">
                          Search for the Department
                        </Text>
                      </Column>
                      <Button
                        className="flex lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:w-[21px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[33px]"
                        size="smIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_arrowdown.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown One"
                        />
                      </Button>
                    </Row>
                  </Column>
                </React.Fragment>
              ))}
            />
            <Img
              src="images/img_unsplashn7i1j.png"
              className="absolute xl:h-[1045px] 2xl:h-[1175px] 3xl:h-[1410px] lg:h-[914px] w-[100%]"
              alt="unsplashN7I1J"
            />
          </Stack>
        </div>
      </Column>
    </>
  );
};

export default BookanAppointmentPage;
