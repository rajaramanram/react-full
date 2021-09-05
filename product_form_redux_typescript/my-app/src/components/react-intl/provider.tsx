import react, {FC} from 'react';
import {IntlProvider} from 'react-intl';
import {Fragment} from 'react';

import {locales} from './locales';
import messages from './messages';
import { LayersClearSharp } from '@material-ui/icons';

interface props{
    children:any,
    locale:any
}


const Provider:FC<props> = ({children,locale=locales.ENGLISH})=>(<IntlProvider 
        locale = {locale}
        textComponent = {Fragment}
        messages = {messages[locale]}>
            {children}
        </IntlProvider>
)
export default Provider