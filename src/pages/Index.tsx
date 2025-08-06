
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesWithCard from "@/components/FeaturesWithCard";
import FeatureImageOne from "@/components/FeatureImageOne";
import FeatureImageTwo from "@/components/FeatureImageTwo";
import FeatureImageThree from "@/components/FeatureImageThree";
import FeatureImageFour from "@/components/FeatureImageFour";
import FeatureImageFive from "@/components/FeatureImageFive";
import ComoFunciona from "@/components/ComoFunciona";
import Pricing from "@/components/Pricing";
import Forms from "@/components/Forms";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureImageFour />
      <FeatureImageFive />
      <FeatureImageTwo />
      <Pricing />
      <FeatureImageThree />
      <Forms />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
