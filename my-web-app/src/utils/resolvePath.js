let currentScriptPath, currentScript;
if ((currentScript = window.document.currentScript) && (currentScript = currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    currentScriptPath = currentScript[1]
}

export default subpath => currentScriptPath + subpath;