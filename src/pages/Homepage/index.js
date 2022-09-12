import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Stack,
  Slider,
  Input,
  Line,
} from "components";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/faq");
  }
  function handleNavigate4() {
    navigate("/aboutus");
  }
  function handleNavigate5() {
    navigate("/doctor");
  }
  function handleNavigate6() {
    navigate("/servicesone");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-splinesans mx-[auto] lg:pb-[25px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[40px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Column
            className="bg-cover bg-repeat w-[100%]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <header className="w-[100%]">
              <Row className="bg-white_A700_99 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[20px] w-[100%]">
                <Img
                  src="images/img_20220827162854.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] 3xl:ml-[100px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] w-[9%]"
                  alt="20220827162854"
                />
                <Text className="cursor-pointer hover:font-semibold font-semibold lg:ml-[107px] xl:ml-[123px] 2xl:ml-[138px] 3xl:ml-[166px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-blue_600 w-[auto]">
                  Home
                </Text>
                <Text
                  className="common-pointer cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]"
                  onClick={handleNavigate4}
                >
                  About Us
                </Text>
                <Text
                  className="common-pointer cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]"
                  onClick={handleNavigate5}
                >
                  Doctor
                </Text>
                <Text
                  className="common-pointer cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]"
                  onClick={handleNavigate6}
                >
                  Services
                </Text>
                <Text
                  className="common-pointer cursor-pointer font-medium hover:font-semibold lg:ml-[51px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] hover:text-blue_600 text-gray_900 w-[auto]"
                  onClick={handleNavigate1}
                >
                  FAQ
                </Text>
                <Text className="cursor-pointer font-medium hover:font-semibold lg:ml-[107px] xl:ml-[123px] 2xl:ml-[138px] 3xl:ml-[166px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] hover:text-blue_600 text-cyan_900 w-[auto]">
                  Welcome Taiwo
                </Text>
              </Row>
            </header>
            <Row className="items-center 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[71%]">
              <Column className="w-[61%]">
                <Text className="font-bold lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_902 w-[auto]">
                  For private clinics and medical centers
                </Text>
                <Text className="font-semibold leading-[normal] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[60%]">
                  Good health is a state of mental, physical and social well
                  being
                </Text>
                <Button
                  className="font-medium lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[40%]"
                  shape="RoundedBorder16"
                  size="sm"
                  variant="FillLightblue900"
                >
                  Book an Appointment
                </Button>
              </Column>
              <Img
                src="images/img_image1.png"
                className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] lg:w-[311px] xl:w-[355px] 2xl:w-[400px] 3xl:w-[480px]"
                alt="imageOne"
              />
            </Row>
          </Column>
          <Text className="font-bold 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
            Our Services
          </Text>
          <Text className="font-medium leading-[normal] lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-gray_800 w-[52%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            dignissim vitae venenatis vestibulum, facilisis aliquam enim
            consectetur.
          </Text>
          <List
            className="lg:gap-[51px] xl:gap-[59px] 2xl:gap-[66px] 3xl:gap-[80px] grid grid-cols-2 min-h-[auto] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[75%]"
            orientation="horizontal"
          >
            <Row className="bg-teal_50 items-center lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] rounded-radius8 w-[100%]">
              <Column className="w-[55%]">
                <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                  Consultancy
                </Text>
                <Text className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_800 w-[87%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dignissim vitae{" "}
                </Text>
                <Button
                  className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[58%]"
                  shape="RoundedBorder16"
                  size="sm"
                  variant="FillLightblue900"
                >
                  More Info
                </Button>
              </Column>
              <Img
                src="images/img_unsplashtfjwm.png"
                className="lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius4 w-[45%]"
                alt="unsplashTFJwm"
              />
            </Row>
            <Row className="bg-teal_50 items-center lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] rounded-radius8 w-[100%]">
              <Column className="w-[55%]">
                <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                  Ear, Nose & Throat
                </Text>
                <Text className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_800 w-[87%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dignissim vitae{" "}
                </Text>
                <Button
                  className="font-medium 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[58%]"
                  shape="RoundedBorder16"
                  size="sm"
                  variant="FillLightblue900"
                >
                  More Info
                </Button>
              </Column>
              <Img
                src="images/img_unsplashtfjwm_200X240.png"
                className="lg:h-[130px] xl:h-[149px] 2xl:h-[167px] 3xl:h-[201px] rounded-radius4 w-[45%]"
                alt="unsplashTFJwm One"
              />
            </Row>
          </List>
          <Stack className="lg:h-[412px] xl:h-[471px] 2xl:h-[530px] 3xl:h-[636px] 3xl:mt-[100px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] w-[100%]">
            <Row className="absolute bottom-[7%] items-center justify-center left-[12%] w-[5%]">
              <Img
                src="images/img_clock.svg"
                className="cursor-pointer lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] w-[12%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright.svg"
                className="cursor-pointer lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[44px] xl:ml-[51px] 2xl:ml-[57px] 3xl:ml-[69px] w-[12%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
            <Slider
              slidesToShow={3}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[0.53] absolute"
              magnifiedIndex={1}
              centerMode
              ref={sliderRef}
              className="absolute bg-blue_600 w-[100%]"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <List
                    className="lg:gap-[25px] xl:gap-[29px] 2xl:gap-[33px] 3xl:gap-[40px] grid grid-cols-5 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column
                      className="bg-cover bg-repeat lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] items-center justify-end rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Column className="bg-teal_50 justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[82%]">
                          The Effects of Drugs in Elderly
                        </Text>
                        <Text className="font-normal xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                          14th Aug 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] items-center justify-end rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Column className="bg-teal_50 justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[82%]">
                          The Effects of Drugs in Elderly
                        </Text>
                        <Text className="font-normal xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                          14th Aug 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] items-center justify-end rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Column className="bg-teal_50 justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[82%]">
                          The Effects of Drugs in Elderly
                        </Text>
                        <Text className="font-normal xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                          14th Aug 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] items-center justify-end rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Column className="bg-teal_50 justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[82%]">
                          The Effects of Drugs in Elderly
                        </Text>
                        <Text className="font-normal xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                          14th Aug 2022
                        </Text>
                      </Column>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat lg:h-[208px] xl:h-[238px] 2xl:h-[267px] 3xl:h-[321px] items-center justify-end rounded-radius8 w-[100%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Column className="bg-teal_50 justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                        <Text className="font-medium leading-[normal] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[100%]">
                          The Effects of Drugs in Elderly
                        </Text>
                        <Text className="font-normal xl:mb-[5px] lg:mb-[5px] 2xl:mb-[6px] 3xl:mb-[8px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                          14th Aug 2022
                        </Text>
                      </Column>
                    </Column>
                  </List>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
          </Stack>
          <Text className="font-bold xl:mt-[107px] 2xl:mt-[120px] 3xl:mt-[145px] lg:mt-[93px] lg:text-[25px] xl:text-[29px] 2xl:text-[33px] 3xl:text-[40px] text-gray_900 w-[auto]">
            What Our Customers Are Saying
          </Text>
        </Column>
        <Column className="items-end lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[39px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] w-[100%]">
          <List
            className="lg:gap-[41px] xl:gap-[47px] 2xl:gap-[53px] 3xl:gap-[64px] grid grid-cols-4 min-h-[auto] lg:pr-[15px] xl:pr-[17px] 2xl:pr-[20px] 3xl:pr-[24px] w-[94%]"
            orientation="horizontal"
          >
            <Column className="items-center w-[100%]">
              <Row className="items-center lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[52px] w-[98%]">
                <Img
                  src="images/img_ellipse2.png"
                  className="3xl:h-[101px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] rounded-radius50 3xl:w-[100px] lg:w-[64px] xl:w-[74px] 2xl:w-[83px]"
                  alt="EllipseTwo"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] w-[57%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Taiwo Odusoro
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    Product Designer
                  </Text>
                </Column>
              </Row>
              <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
            <Column className="items-center w-[100%]">
              <Row className="items-center lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[52px] w-[98%]">
                <Img
                  src="images/img_ellipse2_100X100.png"
                  className="3xl:h-[101px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] rounded-radius50 3xl:w-[100px] lg:w-[64px] xl:w-[74px] 2xl:w-[83px]"
                  alt="EllipseTwo One"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] w-[57%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Taiwo Odusoro
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    Product Designer
                  </Text>
                </Column>
              </Row>
              <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
            <Column className="items-center w-[100%]">
              <Row className="items-center lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[52px] w-[98%]">
                <Img
                  src="images/img_ellipse2_1.png"
                  className="3xl:h-[101px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] rounded-radius50 3xl:w-[100px] lg:w-[64px] xl:w-[74px] 2xl:w-[83px]"
                  alt="EllipseTwo Two"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] w-[57%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Taiwo Odusoro
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    Product Designer
                  </Text>
                </Column>
              </Row>
              <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
            <Column className="items-center w-[100%]">
              <Row className="items-center lg:pr-[33px] xl:pr-[38px] 2xl:pr-[43px] 3xl:pr-[52px] w-[98%]">
                <Img
                  src="images/img_ellipse2_2.png"
                  className="3xl:h-[101px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] rounded-radius50 3xl:w-[100px] lg:w-[64px] xl:w-[74px] 2xl:w-[83px]"
                  alt="EllipseTwo Three"
                />
                <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] w-[57%]">
                  <Text className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 w-[auto]">
                    Taiwo Odusoro
                  </Text>
                  <Text className="font-normal lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_600 w-[auto]">
                    Product Designer
                  </Text>
                </Column>
              </Row>
              <Text className="font-normal leading-[normal] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
          </List>
        </Column>
        <Column className="font-inter items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] w-[100%]">
          <Row className="items-center justify-center w-[9%]">
            <Button
              className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              size="mdIcn"
              variant="icbOutlineBlue600"
            >
              <Img
                src="images/img_clock.svg"
                className="flex items-center justify-center"
                alt="clock"
              />
            </Button>
            <Button
              className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:ml-[25px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[40px] rounded-radius50 lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              size="mdIcn"
              variant="icbFillBlue600"
            >
              <Img
                src="images/img_arrowright_60X60.svg"
                className="flex items-center justify-center"
                alt="arrowright One"
              />
            </Button>
          </Row>
          <Row className="bg-blue_600 font-splinesans items-center xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[140px] lg:mt-[90px] lg:p-[25px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[40px] w-[100%]">
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
          <Line className="bg-gray_900 h-[1px] xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[140px] lg:mt-[90px] w-[100%]" />
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
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
              </Text>
            </Column>
            <Column className="lg:ml-[40px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[62px] mt-[3px] w-[24%]">
              <Text className="font-medium lg:text-[20px] xl:text-[23px] 2xl:text-[26px] 3xl:text-[32px] text-gray_900 w-[auto]">
                Resources
              </Text>
              <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[100%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas dignissim vitae venenatis vestibulum, facilisis aliquam
                enim consectetur.
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
      </Column>
    </>
  );
};

export default HomepagePage;
