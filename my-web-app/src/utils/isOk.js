let getJSPlumb = () => import("@/assets/js/jsPlumb 2.11.1");

export function isJSPlumbOK() {
    return window.jsPlumb ? Promise.resolve(window) : getJSPlumb();
}