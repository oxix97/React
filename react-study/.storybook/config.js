import {configure} from "@storybook/react";

function loadStories() {
    require('../Component/InputStory');
}

configure(loadStories,module);