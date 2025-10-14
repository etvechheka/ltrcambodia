
import { Container } from "../ProductGrid/styles"
import { ServiceCard, ServiceGrid, ServiceHeading, ServiceHeadTitle, ServiceWrapper, InnerServiceTitle, Description, RightPortion, ReadLink, ReadIcon, ServiceTitle } from "./styles";

const serviceData = [
    {
        id: 1,
        title: 'Procurement Strategy and Execution',
        image: new URL('../../assets/images/icon-1.png', import.meta.url).href,
        description: 'Strategy sourcing, marketing intelligence supplier selections'
    },
      {
        id: 2,
        title: 'End-to-End Supply Chain Management',
        image: new URL('../../assets/images/icon-4.png', import.meta.url).href,
        description: 'Planning, Logistics, Delivery Tracking, Sustainability focus'
    },
      {
        id: 3,
        title: 'Supplier and Contract Oversight',
        image: new URL('../../assets/images/icon-3.png', import.meta.url).href,
        description: 'Performance monitoring, Onboarding, compliance management'
    }
];

export function ServiceLayout() {

    return (
        <>
            <ServiceWrapper>
                <Container>
                    <ServiceHeading>
                        <InnerServiceTitle>
                            <ServiceHeadTitle>What we do ?</ServiceHeadTitle>
                            <Description>Services procurement solution include</Description>
                        </InnerServiceTitle>
                        <RightPortion>
                            <ReadLink>View More</ReadLink>
                        </RightPortion>
                    </ServiceHeading>
                    <ServiceGrid>
                        {
                            serviceData.map((item) => (
                                <ServiceCard key={item.id}>
                                    <div className="card-body">
                                        <img src={item.image} width={64} alt="" />
                                        <ServiceTitle>{item.title}</ServiceTitle>
                                        <Description>{item.description}</Description>
                                    </div>
                                    <ReadIcon>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ width: 34 }} fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                        </a>
                                    </ReadIcon>
                                </ServiceCard>
                            ))
                        }
                    </ServiceGrid>
                </Container>
            </ServiceWrapper>
        </>
    )
}