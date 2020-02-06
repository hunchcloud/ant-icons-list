const fs = require("fs");
// import * as allIconDefs from "@ant-design/icons-svg";
const allIconDefs = require("@ant-design/icons-svg");

const icons = [];

Object.values(allIconDefs).forEach(({ name, theme, icon }) => {
  // console.log(name, val, val.icon.children)
  if (
    theme === "outlined" &&
    icon.children.length === 1 &&
    icon.children[0].tag == "path" &&
    icon.children[0].attrs.d
  ) {
    icons.push({
      name,
      viewBox: icon.attrs.viewBox,
      path: icon.children[0].attrs.d
    });
  }
});

fs.writeFileSync("icons.json", JSON.stringify(icons));
