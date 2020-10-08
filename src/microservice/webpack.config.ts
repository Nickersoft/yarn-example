import path from "path";

export default {
  mode: "development",
  entry: "./index.ts",
  target: "node",
  externals: [/^(?!@custom)[^/.][a-zA-Z\-0-9./]+$/],
  externalsType: "commonjs",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".graphql", ".gql", ".js", ".json"],
  },
};
