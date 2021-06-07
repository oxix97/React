import React from "react";
import {storiesOf} from "@storybook/react";
import NewCounter from "../Component/NewCounter";

storiesOf('NewCounter', module).add('기본 설정', () => <NewCounter count={0}/>)
