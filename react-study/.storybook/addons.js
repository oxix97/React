import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-actions/register'
import Input from '../src/DoItReact/Component/Input';

storiesOf('Input Component', module)
    .add('First setting', () => <Input name='name' />)
    .add('label example', () => <Input name='name2' label='이름' />)
    .add('onChange example', () => <Input name='name3' onChange={action('onChange event has occurred')} />);