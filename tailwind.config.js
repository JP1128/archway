import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js}",
  ".flowbite-react\\class-list.json",
  "./node_modules/flowbite/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [flowbiteReact];
