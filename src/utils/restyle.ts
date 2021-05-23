import {
    createBox,
    createText,
} from "@shopify/restyle";

// See the "Defining Your Theme" readme section below
import { Theme } from "./theme";
 
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
