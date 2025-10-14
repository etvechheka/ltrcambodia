import { GridContainer, ProductCard, ProductImage, ProductInfo, ProductTitle, ProductDesc, ProductPrice, Container, ProductWrapper, ProductHeading, ProductHeadTitle, ProductColumn, Dividen } from "./styles";

function ProductGrid({ products, onSelect }) {

    return (
        <>
            <ProductWrapper>
                <ProductHeading>
                    <ProductHeadTitle>Features Product Gallery</ProductHeadTitle>
                    <span>Procurement Solutions for Maximum Efficiency</span>
                </ProductHeading>

                <Container>
                    <GridContainer>
                        {products.map((item) => (
                            <ProductColumn>
                                <ProductCard key={item.id} onClick={() => onSelect?.(item)}>
                                    <ProductImage src={item.image} alt={item.name} />
                                </ProductCard>
                                <ProductInfo>
                                    <ProductTitle>{item.name}</ProductTitle>
                                    {item.description && (
                                        <ProductDesc>{item.description}</ProductDesc>
                                    )}
                                </ProductInfo>
                            </ProductColumn>
                        ))}
                    </GridContainer>
                </Container>
                <Dividen />
            </ProductWrapper>



        </>
    )
}
export default ProductGrid