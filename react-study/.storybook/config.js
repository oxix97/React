import {configure} from "@storybook/react";

function loadStories() {
    require('../src/DoItReact/stories/InputStory')
}

configure(loadStories,module);