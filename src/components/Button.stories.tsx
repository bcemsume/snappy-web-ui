import React from "react";
import { storiesOf } from "@storybook/react";
import ColorButton from "./Buttton";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";

storiesOf("ColorButton", module).addDecorator(withKnobs);
