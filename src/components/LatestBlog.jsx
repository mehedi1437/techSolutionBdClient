import { FaUser, FaCalendarDays, FaArrowRight } from "react-icons/fa6";
import blogImg from "../assets/images/blog1.png"; 
const LatestBlog = () => {
    const blogPosts = [
  {
    category: "Web Design",
    author: "Daniel Lee",
    date: "01 Jan 2045",
    title: "How to build a website",
    excerpt:
      "Building a website involves several steps, from planning and design to development and deployment.",
    image: blogImg,
    link: "#"
  },
  {
    category: "Web Design",
    author: "Daniel Lee",
    date: "01 Jan 2045",
    title: "How to build a website",
    excerpt:
      "Building a website involves several steps, from planning and design to development and deployment.",
    image: blogImg,
    link: "#"
  },
  {
    category: "Web Design",
    author: "Daniel Lee",
    date: "01 Jan 2045",
    title: "How to build a website",
    excerpt:
      "Building a website involves several steps, from planning and design to development and deployment.",
    image: blogImg,
    link: "#"
  }
];
    return (
        <div>
            <div className="mx-20 my-10">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-[#00A3F7]">LATEST BLOG</p>
        <p className="text-4xl font-bold text-center">
          Read The Latest Articles from Our Blog Post
        </p>
        <div className="h-2 w-20 bg-[#00A3F7] rounded"></div>
      </div>

      {/* Blog Cards */}
      <div className="flex lg:flex-row flex-col items-center justify-around">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col h-[380px] bg-[#EAF9FF]  w-[300px] rounded my-6 shadow-md relative transition-transform hover:scale-110 hover:bg-white hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={post.image}
                alt="Blog"
                className="h-[200px] w-full rounded-t object-cover"
              />
              <div className="absolute top-2 left-2 w-24 bg-[#00A3F7] text-center py-1 rounded">
                <p className="text-xs text-white">{post.category}</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col px-4 py-2 gap-2">
              <div className="flex justify-evenly my-2">
                <div className="flex gap-2 items-center">
                  <FaUser className="text-[#00A3F7] text-sm" />
                  <p className="text-xs">{post.author}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <FaCalendarDays className="text-[#00A3F7] text-sm" />
                  <p className="text-xs">{post.date}</p>
                </div>
              </div>

              <p className="text-xl font-bold">{post.title}</p>
              <p className="text-xs text-slate-700">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-[#00A3F7] text-xs flex items-center gap-1"
              >
                Read more <FaArrowRight className="text-[#00A3F7]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default LatestBlog;