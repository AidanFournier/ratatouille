import { CardImg, CardTitle, CardButton, FlexSection } from '../Restaurants/styles';
import { RestaurantModalDialog, RestaurantModalContainer } from './styles';
import { Link as TKLink } from '@tablecheck/tablekit-typography';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faLink, faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type ModalProps = {
    handleClick: () => void,
    name: string,
    alt_address: {[key: string]: any},
    banner_image: string,
    body: {[key: string]: any},
    phone: string,
    url: string,
    id: string
};

export function Modal ({handleClick, name, alt_address, banner_image, body, url, phone, id}: ModalProps) {
    return (
        <RestaurantModalDialog
            data-testid="Restaurant modal"
            hasCloseIcon
            width=
                "regular"
            onCloseAutoFocus={function noRefCheck(){}}
            onEscapeKeyDown={function noRefCheck(){}}
            onOpenAutoFocus={function noRefCheck(){}}
            onPointerDownOutside={function noRefCheck(){}}
            trigger={<CardButton onClick={handleClick}>
            More
            </CardButton>}
        >
            <RestaurantModalContainer key={id}>
                <CardImg src={banner_image === undefined ? "https://images.unsplash.com/photo-1569994652340-8bcae2f75ecd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" : banner_image} alt="Restaurant banner"/>
                <CardTitle>
                    <span>{name[0] + " "}</span>
                    {name[1]? <span>{`(${name[1]})`}</span> : ""}
                </CardTitle>
                <h4>
                    {body[1]? <span>{`${body[1].translation}`}</span> : ""}
                </h4>
                <FlexSection>
                    <p><FontAwesomeIcon icon={faLink as IconProp} /></p>
                    <TKLink href={url}><p>{url}</p></TKLink>
                </FlexSection>
                <FlexSection>
                    <p><FontAwesomeIcon icon={faPhone as IconProp} /></p>
                    <TKLink href={"tel:" + phone}><p>{phone}</p></TKLink>
                </FlexSection>
                <FlexSection>
                    <p><FontAwesomeIcon icon={faMapPin as IconProp} /></p>
                    <p>{alt_address.street2}</p>
                    <p>{alt_address.street}</p>
                    <p>{alt_address.city}</p>
                    <p>{alt_address.region}</p>
                    <p>〒 {alt_address.postal_code}</p>  
                </FlexSection>
            </RestaurantModalContainer>
        </RestaurantModalDialog>
    )
};