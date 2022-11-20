import { CardImg, CardContainer, CardTitle, TagsContainer, CardTag } from './styles';

type CardProps = {
    id: string,
    image: string,
    name: string[],
    cuisines: string[],
}

export function Card({id, image, name, cuisines}: CardProps) {
    return (
        <div key={id}>
            <CardImg src={image === undefined ? "https://images.unsplash.com/photo-1569994652340-8bcae2f75ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" : image} alt="Restaurant cover" />
            <CardContainer>
                <CardTitle>{name[1]}</CardTitle>
                <TagsContainer>
                    {cuisines.map((cuisine: string) => {
                    return <CardTag size="small" color="#7935D2">{cuisine}</CardTag>
                    })}
                </TagsContainer>
            </CardContainer>
        </div>
    )
}