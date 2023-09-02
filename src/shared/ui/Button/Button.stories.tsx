import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import 'app/styles/index.scss';
import { ThemeDecorator } from "shared/config/storybook/themeDecorator/themeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: "shared/Button",
    component: Button,

    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

export const Outlined = Template.bind({});
Outlined.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]


export const Background = Template.bind({});
Background.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};


export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};

export const OutlinedSizeL = Template.bind({});
OutlinedSizeL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
};
export const OutlinedSizeXL = Template.bind({});
OutlinedSizeXL.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
};