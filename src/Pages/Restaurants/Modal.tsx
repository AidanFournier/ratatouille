import { Fragment } from 'react';
import { Card, CardImg, CardContainer, TagsContainer, CardTitle, ResultsContainer, CardButton, CardTag  } from './styles';
import { ModalDialog } from '@tablecheck/tablekit-modal-dialog';

type ModalProps = {
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

export function Modal ({name, address, alt_address, banner_image, body, title, phone, phone_natl, stations, url}: ModalProps) {
    return (
        <ModalDialog
            data-testid="Modal Test Id"
            // footerContent="Simple footer (maybe custom JSX component)"
            hasCloseIcon
            headerContent="Simple header (maybe custom JSX component)"
            maxWidth={{
                default: 200,
                'min-width: 600px': 400,
                'min-width: 800px': 700
            }}
            onCloseAutoFocus={function noRefCheck(){}}
            onEscapeKeyDown={function noRefCheck(){}}
            onOpenAutoFocus={function noRefCheck(){}}
            onPointerDownOutside={function noRefCheck(){}}
            trigger={<CardButton onClick={function noRefCheck(){}}>
            More
            </CardButton>}
            >
            <Fragment key=".$Quasi nesciunt id aut. Ipsam ratione ratione qui et assumenda. Id molestiae ut molestiae. Dolore in aut delectus accusantium perferendis officia.">
                <h3>
                Architecto nisi quia assumenda consequuntur maiores laborum animi doloribus.
                </h3>
                <p>
                Quasi nesciunt id aut. Ipsam ratione ratione qui et assumenda. Id molestiae ut molestiae. Dolore in aut delectus accusantium perferendis officia.
                </p>
            </Fragment>
            </ModalDialog>
    )
}