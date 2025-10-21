import { Container } from "../ProductGrid/styles";
import { ArticleCard, ArticleContent, ArticleTitle, FigureImage, GridSection, HeadingWrapper, HeadTitle, MainWrapper } from "./styles";
import Icon from '../../assets/images/premium.svg';

const data = [
    {
        id: 1,
        title: 'Expertise and Specialisation',
        icon: new URL('../../assets/images/premium.svg', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
    {
        id: 1,
        title: 'High End, Personalised Service',
        icon: new URL('../../assets/images/High-Eng.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
    {
        id: 1,
        title: 'Cost and Time Savings',
        icon: new URL('../../assets/images/effectiveness.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
    {
        id: 1,
        title: 'Strategic Sourcing',
        icon: new URL('../../assets/images/strategic-plan.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
    {
        id: 1,
        title: 'Seamless Integration and Flexibility',
        icon: new URL('../../assets/images/supply-chain-management.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
    {
        id: 1,
        title: 'Supplier and Contract Management',
        icon: new URL('../../assets/images/agreement.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
       {
        id: 1,
        title: 'Consultancy and Strategic Insight',
        icon: new URL('../../assets/images/strategic-consulting.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    },
       {
        id: 1,
        title: 'Proven Expertise Across Specialisms',
        icon: new URL('../../assets/images/specialisms.png', import.meta.url).href,
        detail: 'Strategy sourcing, marketing intelligence supplier selections',

    }
];


export function ChooseUs() {

    return (
        <>
            <MainWrapper>
                <HeadingWrapper>
                    <HeadTitle>Why Choose Us?</HeadTitle>
                    <span>We pride our selves on delivering a hight-end</span>
                </HeadingWrapper>
                <Container>
                    <GridSection>
                        {
                            data.map((item, index) => (
                                <ArticleCard key={index}>
                                    <FigureImage>
                                        <img src={item.icon} width={64} alt="" />
                                    </FigureImage>
                                    <ArticleTitle>{item.title}</ArticleTitle>
                                    <ArticleContent>
                                        {item.detail}
                                    </ArticleContent>
                                </ArticleCard>
                            ))
                        }

                    </GridSection>
                </Container>
            </MainWrapper>
        </>
    )
}