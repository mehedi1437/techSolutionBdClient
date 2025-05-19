import blogImg1 from "../assets/images/82.png";
import blogImg2 from "../assets/images/83.png";
import blogImg3 from "../assets/images/84.png";
import blogImg4 from "../assets/images/85.png";
import Partners from "../components/Partners";
const blogData = [
  {
    title: "Top Marketing Trends in 2023",
    excerpt:
      "In 2023, to survive on more than just a unified, stronger relationship with consumers, brands will need to rely on empathy and authenticity, embrace personalization more fully, and use analytics for greater impact.",
    image: blogImg1,
    link: "#"
  },
  {
    title: "How will cloud computing benefit enterprises or businesses?",
    excerpt:
      "A large number of technology businesses and industry leaders are recognizing the many benefits of the cloud computing trend. Even though data shows business efficiency and competitive advantage, most still operate without it.",
    image: blogImg2,
    link: "#"
  },
  {
    title: "Digital Marketing Trends to look forward to in 2023",
    excerpt:
      "In the fast-paced world of marketing, staying ahead of the curve is key to success and maintaining relationships with your audience.",
    image: blogImg3,
    link: "#"
  },
  {
    title: "Content Intelligence",
    excerpt:
      "The content marketing industry plays an important role in business marketing strategies with a projected CAGR of 16% from 2021 to 2025. This growth is expected to increase the market share to $417.85 billion.",
    image: blogImg4,
    link: "#"
  }
];
const Blog = () => {
    return (
        <div>
             <div className="mt-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <p className="lg:text-5xl text-3xl font-bold">Watch out our latest blogs</p>

        {/* Blog Cards */}
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-[#061E42] lg:h-[392px] flex lg:flex-row flex-col justify-between gap-6 w-10/12 rounded"
          >
            {/* Image */}
            <div className="lg:w-[396px]">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover rounded-t lg:rounded-none" />
            </div>

            {/* Text */}
            <div className="space-y-4 lg:pr-4 p-5 lg:w-[50vw] flex flex-col lg:text-left text-center justify-center text-white">
              <p className="font-[Poppins] lg:text-4xl text-lg font-semibold">{blog.title}</p>
              <p className="font-[Poppins] sm:text-sm">{blog.excerpt}</p>
              <div>
                <a
                  href={blog.link}
                  className="py-2 px-4 rounded border text-[#1F2732] bg-white inline-block w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">

    <Partners></Partners>
      </div>
    </div>
        </div>
    );
};

export default Blog;