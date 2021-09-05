import {I18nProvider,locales} from './react-intl';

import React from 'react';
import {FormattedMessage} from 'react-intl';

function reactIntl() {
    return (
        <I18nProvider locale ={locales.GERMAN}>
            <FormattedMessage id="hello"/>
        </I18nProvider>
    )
}

export default reactIntl
