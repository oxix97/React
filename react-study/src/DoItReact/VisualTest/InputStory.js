import React from "react";
import {storiesOf} from "@storybook/react";
import Input from "../Component/Input";
storiesOf('Input',module)
    .add('basic setting',()=><Input name={'name'}/>)
    .add('label example',()=><Input name={'name'} label={'이름'}/>)