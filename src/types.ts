export interface PreloadOptions {}

export interface RendererOptions {
  preloadEntry: string;
  importString?: string;
}

export interface ExportInfo {
  name: string;
  as: string;
  from: string;
}
