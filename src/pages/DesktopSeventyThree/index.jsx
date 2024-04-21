import React from "react";
import './index.css';
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text, RatingBar } from "../../components";
import Header from "../../components/Header";

const data = [{ present: "2016-present" }, { present: "2010-2015" }];
const data1 = [
  {
    description:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    consultedfor: "Consulted for Skin care",
  },
  {
    description:
      "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods",
    consultedfor: "Consulted for Pregnancy",
  },
];



export default function DesktopSeventyThreePage() {

  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (time) => {
    setSelectedButton(time);
  };

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

 

  return (
    <>
      <Helmet>
        <title>Dr. Bruce Willis - Experienced Gynecologist | Book an Appointment</title>
        <meta
          name="description"
          content="Meet Dr. Bruce Willis, a seasoned Gynecologist with a passion for women's health. Specializing in skin care, immunity, and more. Book your appointment now."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[61px] bg-white-A700_01 pb-[85px] md:pb-5 sm:gap-[30px]">
        {/* main header section */}
        <Header className="flex items-end justify-center self-stretch bg-orange-50 py-[15px]" />

        {/* profile section */}
        <div className="mx-auto flex w-full max-w-[1243px] flex-col gap-[41px] md:p-5">
          <div className="relative h-[279px] md:h-auto">
            <div className="w-full">
              <div className="h-[197px] self-start rounded-[12px] bg-green-50 bg-[url(/public/images/img_frame_29.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="h-[197px] rounded-[12px] bg-green-50 bg-[url(/public/images/img_frame_29.png)] bg-cover bg-no-repeat pb-[31px] md:h-auto sm:pb-5">
                  <Img
                    src="images/img_image_160.png"
                    alt="image160_one"
                    className="h-[166px] w-full object-cover md:h-auto"
                  />
                </div>
              </div>
              <div className="relative mt-[-69px] flex justify-end self-end border border-solid border-blue_gray-100 bg-yellow-50 p-[33px] sm:p-5">
                <div className="mr-[15px] flex w-[85%] items-center justify-between gap-5 md:mr-0 md:w-full md:flex-col">
                  <div className="flex w-[60%] items-center justify-between gap-5 md:w-full">
                    <div className="flex w-[31%] flex-col gap-1.5">
                      <div className="flex items-start">
                        <div className="flex flex-col items-start gap-0.5">
                          <Text size="xl" as="p" className="!font-poppins !text-gray-900_03">
                            Dr. Bruce Willis
                          </Text>
                          <Text size="s" as="p" className="!font-poppins !text-green-800_01">
                            Gynecologist
                          </Text>
                        </div>
                        <Img
                          src="images/img_checkmark.svg"
                          alt="checkmark_one"
                          className="relative ml-[-10px] mt-1 h-[23px] w-[23px]"
                        />
                      </div>
                      <div className="flex flex-wrap items-center">
                        <Heading size="s" as="h1" className="h-[21px] self-start tracking-[-0.15px] !text-gray-700_05">
                          4.2
                        </Heading>
                        <Img src="images/img_signal.svg" alt="signal_one" className="h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_three" className="relative ml-[-1px] h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_five" className="h-[22px]" />
                        <Img src="images/img_signal.svg" alt="signal_seven" className="h-[22px]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Followers
                      </Text>
                      <Heading size="xl" as="h2" className="text-center !font-poppins !text-gray-900_03">
                        850
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Following
                      </Text>
                      <Heading size="xl" as="h3" className="text-center !font-poppins !text-gray-900_03">
                        18K
                      </Heading>
                    </div>
                    <div className="flex flex-col">
                      <Text size="xs" as="p" className="text-center !font-poppins !text-green-800_01">
                        Posts
                      </Text>
                      <Heading size="xl" as="h4" className="text-center !font-poppins !text-gray-900_03">
                        250
                      </Heading>
                    </div>
                  </div>
                  <Button className="mb-2.5 flex h-[59px] min-w-[274px] items-center justify-center self-end rounded-lg bg-green-800_01 px-[33px] text-center font-inter text-xl font-medium text-white-A700_01 sm:px-5">
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_ellipse_727.png"
              alt="circleimage"
              className="absolute bottom-[25.00px] left-[30.00px] m-auto h-[159px] w-[159px] rounded-[50%]"
            />
          </div>

          {/* about section */}
          <div className="flex items-start gap-[29px] md:flex-col">
            {/* specialization section */}
            <div className="flex flex-1 flex-col gap-[30px] md:self-stretch">
              <div className="flex flex-col items-start gap-[33px] rounded-[18px] border border-solid border-gray-300_06 bg-white-A700_01">
                <div className="flex items-center justify-between gap-5 self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient1 p-[13px]">
                  <Heading size="2xl" as="h2" className="ml-[22px] self-start !text-blue_gray-900 md:ml-0">
                    A Little About me
                  </Heading>
                  <Button
                    rightIcon={<Img src="images/img_plus.svg" alt="plus" className="h-[14px] w-[14px]" />}
                    className="mr-[22px] flex h-[36px] min-w-[113px] items-center justify-center gap-[7px] rounded-[10px] border border-solid border-green-800_01 bg-white-A700_01 px-5 text-center font-poppins text-base font-medium text-gray-700_03 md:mr-0"
                  >
                    Follow
                  </Button>
                </div>
                <div className="flex w-[85%] flex-col gap-1.5 self-center md:w-full md:p-5">
                  <Text
                    as="p"
                    className="w-[97%] !font-poppins !font-medium leading-[27px] !text-blue_gray-800_7f md:w-full"
                  >
                    Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my
                    hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the{" "}
                  </Text>
                  <div className="flex items-center gap-2.5 sm:flex-col">
                    <div className="h-px flex-1 bg-gray-600_02 sm:self-stretch" />
                    <a href="#" className="self-end">
                      <Text as="p" className="!font-poppins !font-medium !text-blue_gray-900_03 underline">
                        Read More
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="ml-[39px] flex w-[84%] items-center gap-[15px] md:ml-0 md:w-full md:p-5 sm:flex-col">
                  <Text size="xl" as="p" className="self-end tracking-[-0.20px]">
                    Language Spoken{" "}
                  </Text>
                  <Button className="flex h-[40px] w-full flex-1 items-center justify-center rounded-[16px] bg-indigo-700_0a px-[19px] text-center text-xl font-medium tracking-[-0.20px] text-gray-800 sm:self-stretch">
                    English{" "}
                  </Button>
                  <Button className="flex h-[40px] min-w-[83px] items-center justify-center rounded-[16px] bg-indigo-700_0a px-[17px] text-center text-xl font-medium tracking-[-0.20px] text-gray-800">
                    Hindi
                  </Button>
                  <Button className="flex h-[40px] w-full flex-1 items-center justify-center rounded-[16px] bg-indigo-700_0a px-[18px] text-center text-xl font-medium tracking-[-0.20px] text-gray-800 sm:self-stretch">
                    Telugu
                  </Button>
                </div>
                <div className="mb-8 ml-[35px] flex gap-[15px] md:ml-0">
                  <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-blue_gray-400 bg-gray-50_02">
                    <Img src="images/img_facebook.svg" />
                  </Button>
                  <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-blue_gray-400 bg-gray-50_02">
                    <Img src="images/img_info.svg" />
                  </Button>
                  <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-blue_gray-400 bg-gray-50_02">
                    <Img src="images/img_clock.svg" />
                  </Button>
                  <Button className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border border-solid border-blue_gray-400 bg-gray-50_02">
                    <Img src="images/img_trash.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[31px] rounded-[18px] border border-solid border-gray-300_06 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient2 p-3">
                  <Heading size="2xl" as="h3" className="ml-6 self-end !text-blue_gray-900 md:ml-0">
                    I Specialize In
                  </Heading>
                </div>
                <div className="mb-[33px] ml-[31px] flex w-[76%] gap-3.5 md:ml-0 md:w-full md:flex-row md:p-5 sm:flex-col">
                  <div className="flex w-[27%] flex-col items-center gap-[5px] sm:w-full">
                    <div className="flex w-[83%] justify-center rounded-[9px] border border-solid border-gray-200_02 bg-gray-50_05 p-2 md:w-full">
                      <Img
                        src="images/img_user_black_900_02.png"
                        alt="womens_health"
                        className="h-[77px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <Text as="p" className="!font-medium capitalize">
                      women’s health
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1">
                    <Img
                      src="images/img_frame_1000006269.svg"
                      alt="image"
                      className="h-[96px] w-full rounded-[9px] md:h-auto"
                    />
                    <Text as="p" className="!font-medium capitalize">
                      Skin Care
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-[5px]">
                    <Img
                      src="images/img_floating_icon.svg"
                      alt="floatingicon"
                      className="h-[96px] w-full rounded-[9px] md:h-auto"
                    />
                    <Text as="p" className="!font-medium capitalize">
                      Immunity
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col items-center gap-1.5">
                    <div className="self-stretch rounded-[9px] border border-solid border-gray-200_02 bg-gray-50_05 p-2">
                      <Img src="images/img_globe.svg" alt="globe_one" className="h-[78px] w-full md:h-auto" />
                    </div>
                    <Text as="p" className="!font-medium capitalize">
                      Hair care
                    </Text>
                  </div>
                </div>
              </div>

              {/* treatment section */}
              <div className="flex flex-col items-center gap-6 rounded-[18px] border border-solid border-gray-300_06 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient3 p-[13px]">
                  <Heading size="2xl" as="h4" className="ml-3.5 self-start !text-blue_gray-900 md:ml-0">
                    The Concerns I Treat
                  </Heading>
                </div>
                <div className="mb-[29px] flex w-[91%] flex-col gap-[18px] md:w-full md:p-5">
                  <div className="flex items-center gap-[11px] sm:flex-col">
                    <Button className="flex h-[43px] min-w-[154px] items-center justify-center rounded-[19px] bg-gray-50_02 px-4 text-center font-poppins text-base font-medium text-green-800_01">
                      Skin Treatment
                    </Button>
                    <Button className="flex h-[42px] min-w-[113px] items-center justify-center rounded-[18px] bg-gray-50_02 px-[11px] text-center font-poppins text-base font-medium text-green-800_01">
                      Pregnancy
                    </Button>
                    <Button className="flex h-[42px] w-full flex-1 items-center justify-center rounded-[18px] bg-gray-50_02 px-2.5 text-center font-poppins text-base font-medium text-green-800_01 sm:self-stretch">
                      Period Doubts
                    </Button>
                    <Button className="flex h-[42px] w-full flex-1 items-center justify-center rounded-[18px] bg-gray-50_02 px-[9px] text-center font-poppins text-base font-medium text-green-800_01 sm:self-stretch">
                      Endometriosis
                    </Button>
                  </div>
                  <div className="flex w-[73%] md:w-full sm:flex-col">
                    <Button className="flex h-[42px] w-full flex-1 items-center justify-center rounded-[18px] bg-gray-50_02 px-6 text-center font-poppins text-base font-medium text-green-800_01 sm:self-stretch sm:px-5">
                      Pelvic Pain
                    </Button>
                    <Button className="ml-4 flex h-[42px] w-full flex-1 items-center justify-center rounded-[18px] bg-gray-50_02 px-[9px] text-center font-poppins text-base font-medium text-green-800_01 sm:ml-0 sm:self-stretch">
                      Ovarian Cysts
                    </Button>
                    <Button className="ml-[11px] flex h-[42px] min-w-[119px] items-center justify-center rounded-[18px] border border-solid border-gray-300 px-[23px] text-center font-poppins text-base font-medium text-green-800_01 sm:ml-0 sm:px-5">
                      + 5 More
                    </Button>
                  </div>
                </div>
              </div>

              {/* experience section */}
              <div className="flex flex-col items-start gap-[35px] rounded-[18px] border border-solid border-gray-300_06 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient4 p-3">
                  <Heading size="2xl" as="h5" className="ml-3.5 self-end !text-blue_gray-900 md:ml-0">
                    My Work Experience
                  </Heading>
                </div>
                <div className="ml-7 flex md:ml-0">
                  <Heading size="lg" as="h6" className="!font-poppins !font-semibold uppercase">
                    I have been in practice for : 7+ Years
                  </Heading>
                </div>
                <div className="mb-10 ml-[31px] flex w-[79%] flex-col gap-[18px] md:ml-0 md:w-full md:p-5">
                  {data.map((d, index) => (
                    <div key={"listuserone" + index} className="flex flex-1 items-start gap-2.5 sm:flex-col">
                      <Button className="flex h-[48px] w-[48px] items-center justify-center rounded-md bg-gray-50_02">
                        <Img src="images/img_user.svg" />
                      </Button>
                      <div className="flex flex-1 items-start justify-between gap-5 pr-[18px] sm:self-stretch">
                        <div className="flex flex-col items-start gap-1.5">
                          <Text as="p" className="!font-poppins !font-medium !text-blue_gray-800">
                            Midtown Medical Clinic
                          </Text>
                          <Text as="p" className="!font-poppins !font-medium !text-blue_gray-800_7f">
                            Senior doctor
                          </Text>
                        </div>
                        <Text as="p" className="!font-poppins !font-medium !text-blue_gray-800_b5">
                          <span className="font-normal text-blue_gray-800_b5">2016-</span>
                          <span className="font-normal uppercase text-blue_gray-800_b5">present</span>
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* reviews section */}
              <div className="flex flex-col items-center gap-[21px] rounded-[18px] border border-solid border-gray-300_06 bg-white-A700_01">
                <div className="flex self-stretch rounded-tl-[15px] rounded-tr-[18px] bg-gradient5 p-[15px]">
                  <Heading size="2xl" as="h4" className="ml-[15px] self-end !text-blue_gray-900 md:ml-0">
                    Featured Reviews (102)
                  </Heading>
                </div>
                <div className="mb-9 flex w-[87%] flex-col gap-6 md:w-full md:p-5">
                  {data1.map((d, index) => (
                    <div
                      key={"listalicent" + index}
                      className="flex flex-1 flex-col items-center gap-3.5 rounded-[17px] bg-gray-50 p-[13px]"
                    >
                      <div className="flex w-[91%] items-center justify-between gap-5 md:w-full sm:flex-col">
                        <div className="flex w-[54%] items-center justify-center gap-2 sm:w-full">
                          <Img
                            src="images/img_frame_2608514.png"
                            alt="alicent"
                            className="h-[56px] w-[22%] self-end rounded-[27px] object-cover"
                          />
                          <div className="flex flex-col items-start justify-center">
                            <Heading size="xl" as="h5" className="!text-blue_gray-900_01">
                              Alicent Hightower
                            </Heading>
                            <Text as="p" className="!font-medium !text-gray-500_01">
                              {d.consultedfor}
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="tracking-[-0.16px] !text-gray-500">
                          20 January 2023
                        </Text>
                      </div>
                      <div className="mb-[9px] flex w-[92%] flex-col gap-[5px] md:w-full">
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f79624"
                          activeColor="#f79624"
                          size={20}
                          className="flex justify-between"
                        />
                        <Text as="p" className="leading-6 tracking-[-0.16px] !text-blue_gray-900_02">
                          {d.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* appointment section */}
            <div className="flex w-[48%] flex-col items-center rounded-[29px] border border-solid border-gray-200_01 bg-white-A700_01 p-[18px] md:w-full">
              <div className="mt-4 flex flex-wrap items-center justify-between gap-5 self-stretch rounded-[15px] border border-solid border-gray-300_01 bg-white-A700_01 p-3.5">
                <Heading
                  size="xl"
                  as="h5"
                  className="ml-[13px] self-end text-center tracking-[0.20px] !text-black-900_02 md:ml-0"
                >
                  Appointment Fee
                </Heading>
                <Heading size="xl" as="h5" className="mr-[13px] text-center !font-inter tracking-[0.20px] md:mr-0">
                  ₹699.00
                </Heading>
              </div>
              <div className="mt-[45px] flex items-center gap-[21px] self-stretch sm:flex-col">
                <Heading size="xl" as="h5" className="text-center !font-bold tracking-[0.50px] !text-black-900_02">
                  Select your mode of session
                </Heading>
                <div className="h-px w-[46%] bg-blue_gray-100_02" />
              </div>
              <div className="mt-10 flex gap-[22px] self-stretch md:flex-row sm:flex-col">
                <div className="flex w-full flex-col items-center gap-1 rounded-[10px] border border-solid border-gray-300_05 bg-white-A700_01 p-3 sm:w-full">
                  <Text as="p" className="mt-1.5 text-center !font-gothamrounded tracking-[0.50px] !text-gray-900_02">
                    In-Clinic
                  </Text>
                  <Text as="p" className="text-center tracking-[0.50px] !text-gray-700_04">
                    45 Mins
                  </Text>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-[3px] rounded-[10px] border border-solid border-green-800_84 bg-gray-100_02 p-3 sm:w-full">
                  <div className="mr-6 flex items-center gap-2 self-end md:mr-0">
                    <Text
                      size="lg"
                      as="p"
                      className="self-start text-center !font-gothamrounded tracking-[0.50px] !text-green-800_01"
                    >
                      Video
                    </Text>
                    <Img
                      src="images/img_checkmark_green_800_01.svg"
                      alt="checkmark_one"
                      className="h-[21px] w-[20px] self-end"
                    />
                  </div>
                  <Text as="p" className="text-center tracking-[0.50px] !text-gray-700_04">
                    45 Mins
                  </Text>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-1 rounded-[10px] border border-solid border-gray-300_05 bg-white-A700_01 p-[13px] sm:w-full">
                  <Text as="p" className="mt-1 text-center !font-gothamrounded tracking-[0.50px] !text-gray-900">
                    Chat
                  </Text>
                  <Text as="p" className="text-center tracking-[0.50px] !text-gray-700_04">
                    10 Mins
                  </Text>
                </div>
              </div>
              <div className="mt-[33px] flex flex-col gap-[33px] self-stretch pt-[5px]">
                <div className="flex flex-col gap-[21px]">
                  <div className="flex items-center sm:flex-col">
                    <Heading
                      size="xl"
                      as="h5"
                      className="mt-[5px] self-start text-center !font-bold tracking-[0.20px] !text-black-900_02"
                    >
                      <span className="text-black-900_02">Pick a&nbsp;</span>
                      <span className="lowercase text-black-900_02">Time slot</span>
                    </Heading>
                    <div className="ml-[27px] h-px flex-1 bg-blue_gray-100_02 sm:ml-0 sm:self-stretch" />
                    <Button className="ml-[9px] flex h-[43px] w-[44px] items-center justify-center rounded-[21px] border border-solid border-blue_gray-400_01 bg-white-A700_01 p-[9px] sm:ml-0">
                      <Img src="images/img_calendar.svg" />
                    </Button>
                  </div>
                  <div className="flex rounded-[21px] border border-solid border-gray-300_03 bg-white-A700_01 p-[19px]">
                    <div className="flex items-center gap-[18px] self-end sm:flex-col">
                      <Img
                        src="images/left_arrow.svg"
                        alt="arrowleft_one"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                      <div className="flex gap-2.5">
      <div
        onClick={() => handleDayClick('Mon, 10 Oct')}
        className={`flex flex-col items-center justify-center gap-[5px] rounded-[11px] border border-solid ${
          selectedDay === 'Mon, 10 Oct'
            ? 'border-green-800 bg-gray-100'
            : 'border-gray-300 bg-white-A700_01'
        } p-3.5 cursor-pointer`}
      >
        <Heading
          size="md"
          as="h6"
          className={`text-center font-inter tracking-[0.20px] ${
            selectedDay === 'Mon, 10 Oct' ? '!font-bold' : '!text-gray-600_05'
          }`}
        >
          Mon, 10 Oct
        </Heading>
        <Heading
          size="md"
          as="h6"
          className={`text-center ${
            selectedDay === 'Mon, 10 Oct' ? '!font-bold' : '!text-gray-600_05'
          }`}
        >
          10 slots
        </Heading>
      </div>
      <div
        onClick={() => handleDayClick('Tue, 11 Oct')}
        className={`flex flex-col items-center gap-[5px] rounded-[11px] border border-solid ${
          selectedDay === 'Tue, 11 Oct'
            ? 'border-green-800 bg-gray-100'
            : 'border-gray-300 bg-white-A700_01'
        } p-4 cursor-pointer`}
      >
        <Text as="p" className="text-center !font-inter tracking-[0.20px] !text-gray-900">
          Tue, 11 Oct
        </Text>
        <Heading
          size="md"
          as="h6"
          className={`text-center ${
            selectedDay === 'Tue, 11 Oct' ? '!font-bold' : '!text-gray-600_05'
          } !text-deep_orange-700`}
        >
          02 slots
        </Heading>
      </div>
      <div
        onClick={() => handleDayClick('Wed, 12 Oct')}
        className={`flex flex-col items-center justify-center gap-[5px] rounded-[11px] border border-solid ${
          selectedDay === 'Wed, 12 Oct'
            ? 'border-green-800 bg-gray-100'
            : 'border-gray-300 bg-white-A700_01'
        } p-3.5 cursor-pointer`}
      >
        <Text as="p" className="text-center !font-inter tracking-[0.20px] !text-black-900">
          Wed, 12 Oct
        </Text>
        <Heading
          size="md"
          as="h6"
          className={`text-center ${
            selectedDay === 'Wed, 12 Oct' ? '!font-bold' : '!text-gray-600_05'
          } !text-yellow-700`}
        >
          05 slots
        </Heading>
      </div>
    </div>
                      <Img
                        src="images/right_arrow.svg"
                        alt="arrowleft_three"
                        className="h-[20px] w-[20px] sm:w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading
                      size="lg"
                      as="h6"
                      className="ml-[17px] text-center tracking-[0.20px] !text-black-900_02 md:ml-0"
                    >
                      Morning
                    </Heading>
                    <div className="flex flex-col items-start gap-[13px]">
                      <div className="flex gap-3 sm:flex-col">
                      <Button
        onClick={() => handleButtonClick('09:00 AM')}
        className={`flex h-[67px] min-w-[106px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-4 text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
          selectedButton === '09:00 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}
      >
        09:00 AM
      </Button>
      <Button
        onClick={() => handleButtonClick('09:30 AM')}
        className={`flex h-[67px] min-w-[105px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-4 text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
          selectedButton === '09:30 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}
      >
        09:30 AM
      </Button>
      <Button
        onClick={() => handleButtonClick('10:00 AM')}
        className={`flex h-[67px] min-w-[105px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-4 text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
          selectedButton === '10:00 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}
      >
        10:00 AM
      </Button>
                        <Button 
                        onClick={() => handleButtonClick('10:15 AM')} className={`flex h-[67px] min-w-[105px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-[18px] text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
                          selectedButton === '10:15 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}>
                          10:15 AM
                        </Button>
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => handleButtonClick('10:45 AM')} className={`flex h-[67px] min-w-[106px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-[17px] text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
                          selectedButton === '10:45 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}>
                          10:45 AM
                        </Button>
                        <Button onClick={() => handleButtonClick('11:00 AM')} className={`flex h-[67px] min-w-[106px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 px-[17px] text-center font-inter text-[15px] tracking-[0.20px] text-gray-900 ${
                          selectedButton === '11:00 AM' ? 'bg-green-500' : 'bg-white-A700_01'
        }`}>
                          11:00 AM
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <Heading
                      size="lg"
                      as="h6"
                      className="ml-[17px] text-center tracking-[0.20px] !text-black-900_02 md:ml-0"
                    >
                      Evening
                    </Heading>
                    <div className="flex flex-col items-start gap-[13px]">
      <div className="flex gap-3 sm:flex-col">
        <Button
          onClick={() => handleButtonClick('04:00 PM')}
          className={`flex h-[67px] min-w-[104px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 ${
            selectedButton === '04:00 PM' ? 'bg-green-500' : 'bg-white-A700_01'
          } px-[13px] text-center font-inter text-base tracking-[0.20px] text-gray-900`}
        >
          04:00 PM
        </Button>
        <Button
          onClick={() => handleButtonClick('04:15 PM')}
          className={`flex h-[67px] min-w-[104px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 ${
            selectedButton === '04:15 PM' ? 'bg-green-500' : 'bg-white-A700_01'
          } px-3.5 text-center font-inter text-base tracking-[0.20px] text-gray-900`}
        >
          04:15 PM
        </Button>
        <Button
          onClick={() => handleButtonClick('04:30 PM')}
          className={`flex h-[67px] min-w-[103px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 ${
            selectedButton === '04:30 PM' ? 'bg-green-500' : 'bg-white-A700_01'
          } px-3 text-center font-inter text-base tracking-[0.20px] text-gray-900`}
        >
          04:30 PM
        </Button>
        <Button
          onClick={() => handleButtonClick('04:45 PM')}
          className={`flex h-[67px] min-w-[104px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 ${
            selectedButton === '04:45 PM' ? 'bg-green-500' : 'bg-white-A700_01'
          } px-[13px] text-center font-inter text-base tracking-[0.20px] text-gray-900`}
        >
          04:45 PM
        </Button>
      </div>
      <Button
        onClick={() => handleButtonClick('05:15 PM')}
        className={`flex h-[62px] min-w-[104px] items-center justify-center rounded-[22px] border border-solid border-gray-200_02 ${
          selectedButton === '05:15 PM' ? 'bg-green-500' : 'bg-white-A700_01'
        } px-[15px] text-center font-inter text-base tracking-[0.20px] text-gray-900`}
      >
        05:15 PM
      </Button>
    </div>
                  </div>
                </div>
              </div>
              <Button className="mb-[27px] mt-[45px] flex h-[59px] min-w-[476px] items-center justify-center rounded-lg bg-green-800_01 px-[35px] text-center font-inter text-xl font-medium capitalize text-white-A700_01 sm:px-5">
                Make an appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
