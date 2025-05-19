
import googleLogo from "../assets/images/google.png";
import appleLogo from "../assets/images/apple.png";
import msLogo from "../assets/images/ms.png";
import ibmLogo from "../assets/images/ibm.png";
import yahooLogo from "../assets/images/yahoo.png";
import dellLogo from "../assets/images/dell.png"; // Adjust paths as needed

const partners = [
  { src: googleLogo, alt: "Google", width: "w-36" },
  { src: appleLogo, alt: "Apple", width: "w-36" },
  { src: msLogo, alt: "Microsoft", width: "w-36" },
  { src: ibmLogo, alt: "IBM", width: "w-36" },
  { src: yahooLogo, alt: "Yahoo", width: "w-36" },
  { src: dellLogo, alt: "Dell", width: "w-20" },
];
const Partners = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <p className="text-2xl text-[#00A3F7] font-bold">
            Our Trusted Partners
          </p>
        </div>

        <div className="mx-20 my-10 flex lg:flex-row flex-col gap-4 items-center justify-around flex-wrap">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className={partner.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
