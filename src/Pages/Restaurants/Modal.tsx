import { Fragment } from 'react';
import { Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardButton, CardTag  } from './styles';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';

type ModalProps = {
    handleClick: () => void,
    name: string,
    address: string[],
    alt_address: string[],
    banner_image: string,
    body: string,
    title: string,
    phone: string,
    phone_natl: string,
    stations: string[],
    url: string
}

export function Modal ({handleClick, name, address, alt_address, banner_image, body, title, phone, phone_natl, stations, url}: ModalProps) {
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
               <h1>{name}</h1>
            </Fragment>
            </ModalDialog>
    )
}