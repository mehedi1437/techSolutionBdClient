
import Carousel from '../../components/Carousel';
import AboutUs from '../../components/AboutUs';
import WhyChooseUs from '../../components/WhyChooseUs';
import OurService from '../../components/OurService';
import PricingPlans from '../../components/PricingPlans';
import RequestAQuoteSection from '../../components/RequestAQuoteSection';
import Testimonials from '../../components/Testimonials';
import TeamMemberSection from '../../components/TeamMemberSection';
import LatestBlog from '../../components/LatestBlog';
import Partners from '../../components/Partners';

const Home = () => {
    return (
        <div>
            
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <WhyChooseUs></WhyChooseUs>
            <OurService></OurService>
            <PricingPlans></PricingPlans>
            <RequestAQuoteSection></RequestAQuoteSection>
            <Testimonials></Testimonials>
            <TeamMemberSection></TeamMemberSection>
            <LatestBlog></LatestBlog>
            <Partners></Partners>
        </div>
    );
};

export default Home;