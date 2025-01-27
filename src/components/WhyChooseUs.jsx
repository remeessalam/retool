import { images, whyChooseUs } from "../constant";

const WhyChooseUs = () => {
  const { whychooseusbackground } = images;
  return (
    <div
      className="relative mt-1 sm:mt-16 py-[4rem]  w-[100vw] bg-cover bg-right bg-no-repeat text-black"
      style={{ backgroundImage: `url(${whychooseusbackground})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/90 lg:bg-white/10" />

      {/* <div className="absolute top-0 w-full h-full bg-primary/30"></div> */}
      <div className=" grid  grid-cols-3  adjustedwidth mx-auto items-center">
        <div className="w-full col-span-3 sm:col-span-2 sm:w-[100%]">
          <h2
            data-aos="fade-up"
            className="text-smhead text-black sm:text-start text-center leading-tight"
          >
            Why Choose Us
          </h2>
          <div>
            <h2
              data-aos="fade-up"
              className="text-sechead mt-4  sm:text-start text-center leading-tight"
            >
              The Power Behind Our IT Solutions
            </h2>
            <p
              data-aos="fade-up"
              className="text-desc text-black max-w-[40rem]  sm:text-start text-center"
            >
              We begin by evaluating your needs to gain a clear understanding of
              your goals, challenges, and requirements.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid items-center gap-5 mt-9">
              <div className="flex flex-col gap-5 h-full">
                {whyChooseUs.map((obj) => (
                  <div
                    key={obj.id}
                    data-aos="fade-right"
                    className=" w-full h-full"
                  >
                    <div className="flex w-full text-start items-center  gap-3">
                      <div className="min-w-[60px] h-[60px]  flex justify-center items-center rounded-lg">
                        <img
                          src={obj.icon}
                          className="h-[3rem] object-contain grayscale"
                          alt=""
                        />
                      </div>
                      <h5 className="text-head text-black">{obj.heading}</h5>
                    </div>
                    <p className=" !text-black text-desc  text-start mt-3 ">
                      {obj.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
