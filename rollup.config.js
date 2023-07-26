import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.tsx",
  output: [
    {
      format: "esm",
      sourcemap: true,
      dir: 'lib',
      preserveModules: true,
      preserveModulesRoot: 'src'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    styles({modules: true}),
    url(),
    svgr(),
  ]
};
