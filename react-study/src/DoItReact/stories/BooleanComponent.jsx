import React from "react";
import {storiesOf} from "@storybook/react";
import Counter from "../Component/Counter";

storiesOf('Counter',module)
    .add('기본 설정',()=><Counter/>)
    .add('bored 설정',()=><Counter/>)