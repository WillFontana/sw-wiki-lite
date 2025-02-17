declare module "*.jpg"; // Permite importar imagens como módulos

declare const require: {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => __WebpackModuleApi.RequireContext;
};
