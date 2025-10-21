import { Container, GridContainer, InnerRecommend, ProductRecommendCard, ProductWrapper, RecommendHeading, RecommendProductImage, RecommendProductTitle, RecommendTitle } from "./styles";
import Utensil from '../../assets/images/utensils-1.jpg';
import Ingredient from '../../assets/images/oil.jpg';
import Meat from '../../assets/images/meat.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export function RecommendProduct() {

    return (
        <>
            <ProductWrapper>
                <RecommendHeading>
                    <Container>
                        <RecommendTitle>Recommend Products</RecommendTitle>
                        <span>Fulfillment sourcing for your products</span>
                    </Container>
                </RecommendHeading>
                <Container>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        modules={[Autoplay, EffectFade]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                    >
                        <SwiperSlide>
                            <ProductRecommendCard>
                                <RecommendProductImage src={Utensil} alt="" />
                                <InnerRecommend>
                                    <RecommendProductTitle>
                                       Olives Et Al Pigs in Blankets Kiln Roasted Nuts - 150g 
                                    </RecommendProductTitle>
                                </InnerRecommend>
                            </ProductRecommendCard>
                        </SwiperSlide>
                         <SwiperSlide>
                            <ProductRecommendCard>
                                <RecommendProductImage src={Ingredient} alt="" />
                                <InnerRecommend>
                                    <RecommendProductTitle>
                                       Olives Et Al Pigs in Blankets Kiln Roasted Nuts - 150g 
                                    </RecommendProductTitle>
                                </InnerRecommend>
                            </ProductRecommendCard>
                        </SwiperSlide>
                         <SwiperSlide>
                            <ProductRecommendCard>
                                <RecommendProductImage src={Meat} alt="" />
                                <InnerRecommend>
                                    <RecommendProductTitle>
                                       Olives Et Al Pigs in Blankets Kiln Roasted Nuts - 150g 
                                    </RecommendProductTitle>
                                </InnerRecommend>
                            </ProductRecommendCard>
                        </SwiperSlide>
                         <SwiperSlide>
                            <ProductRecommendCard>
                                <RecommendProductImage src={Utensil} alt="" />
                                <InnerRecommend>
                                    <RecommendProductTitle>
                                       Olives Et Al Pigs in Blankets Kiln Roasted Nuts - 150g 
                                    </RecommendProductTitle>
                                </InnerRecommend>
                            </ProductRecommendCard>
                        </SwiperSlide>
                         <SwiperSlide>
                            <ProductRecommendCard>
                                <RecommendProductImage src={Utensil} alt="" />
                                <InnerRecommend>
                                    <RecommendProductTitle>
                                       Olives Et Al Pigs in Blankets Kiln Roasted Nuts - 150g 
                                    </RecommendProductTitle>
                                </InnerRecommend>
                            </ProductRecommendCard>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </ProductWrapper>
        </>
    )
}