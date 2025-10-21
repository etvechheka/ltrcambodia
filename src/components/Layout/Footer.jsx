import { Container } from "../ProductGrid/styles";
import { Column, FirstSection, FooterWrapper, Row } from "./styles";
import FooterLogo from '../../assets/images/footer-logo.png'


export function Footer() {

    return (
        <>
            <FooterWrapper>
                <Container>
                    <Row>
                        <Column>
                            <FirstSection>
                                <a href="#">
                                    <img src={FooterLogo} width={125} alt="" />
                                </a>
                            </FirstSection>
                        </Column>
                    </Row>
                </Container>
            </FooterWrapper>
        </>
    )
}