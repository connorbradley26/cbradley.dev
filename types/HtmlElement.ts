
export interface HtmlElement {
    tag: string;
    text?: string;
    attributes?: Record<string, string>;
    children?: HtmlElement[];
}