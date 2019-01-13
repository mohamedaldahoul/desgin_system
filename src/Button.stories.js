import React from 'react'
// import {withInfo} from '@storybook/addon-info';
import {wInfo} from './utils'

import { storiesOf} from '@storybook/react'
import {Button} from './Button'
import { text, boolean } from '@storybook/addon-knobs/react';
// import { color } from '@storybook/addon-knobs/dist/deprecated';

storiesOf('Button', module)
  .addWithJSX('with background 1', 
  wInfo(`
      description of the component
  
      ~~~js
      <Button>Clich here</Button>
      ~~~
      
    `
    )(()=>(<Button bg={color('bg', "blue", 'group1')}>Hello World</Button>)))
  .addWithJSX(
    'with background 2', 
    ()=>(<Button bg={boolean('disabled', false)}>
              {text('text','Hello World')}</Button>))

