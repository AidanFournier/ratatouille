import { Fragment } from 'react';
import { Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardButton, CardTag  } from './styles';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// library.add(faGoogle as IconDefinition);
// library.add(faUpRightFromSquare as IconDefinition);
import { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


type ModalProps = {
    handleClick: () => void,
    name: string,
    address: string[],
    alt_address: string[],
    banner_image: string,
    body: string,
    // title: {[key: string]: any},
    phone: string,
    phone_natl: string,
    stations: {[key: string]: any},
    url: string
}

export function Modal ({handleClick, name, address, alt_address, banner_image, body, phone, phone_natl, stations, url}: ModalProps) {
    return (
        <ModalDialog
            data-testid="Modal Test Id"
            hasCloseIcon
            maxWidth={{
                default: 200,
                'min-width: 600px': 400,
                'min-width: 800px': 700
            }}
            onCloseAutoFocus={function noRefCheck(){}}
            onEscapeKeyDown={function noRefCheck(){}}
            onOpenAutoFocus={function noRefCheck(){}}
            onPointerDownOutside={function noRefCheck(){}}
            trigger={<CardButton onClick={handleClick}>
            More
            </CardButton>}
            >
            <Fragment>
                <img src={banner_image} alt="Restaurant banner"/>
                    
                <div className="title">
                    <span>{name[0] + " "}</span>
                    {name[1]? <span>{`(${name[1]})`}</span> : ""}
                    <FontAwesomeIcon icon={faArrowRight as IconProp} />
                </div>




            </Fragment>
            </ModalDialog>
    )
}