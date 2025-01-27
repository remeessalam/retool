// eslint-disable-next-line
const RoundedHeading = ({ text }) => {
  return (
    <div data-aos="fade-up" className="w-full flex justify-center">
      <h3 className="text-black text-smhead rounded-full bg-primary/35 px-5 py-5 min-w-[200px] text-center border-[1px] border-[#9798a2]">
        {
          // eslint-disable-next-line
          text.toUpperCase()
        }
      </h3>
    </div>
  );
};

export default RoundedHeading;
