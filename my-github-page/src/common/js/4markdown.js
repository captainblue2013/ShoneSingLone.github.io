import Marked from 'marked';
import Highlight from 'highlight.js';

//对显示的数据做初始化的一些配置。主要是Markdown的处理
let renderer = new Marked.Renderer();
renderer.headerIdPrefix = 0;
renderer.heading = function (text, level, raw) {
  return '<h' + level + ' id="' + (this.headerIdPrefix++) + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '" class="content">' +
    text +
    '</h' + level + '>\n';
}

renderer.link = function (href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return text;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return text;
    }
  }
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<a target="_blank" href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

renderer.image = function (href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + `https://raw.githubusercontent.com/ShoneSingLone/GitBook/master/` + href + '" alt="' + text + '"';
  console.log(out);
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    code = Highlight.highlightAuto(code).value;
    return code;
  }
});


export function toHtml(args) {
  return Marked(args);
}
