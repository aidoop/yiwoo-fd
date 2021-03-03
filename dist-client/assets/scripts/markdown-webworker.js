importScripts('/node_modules/marked/marked.min.js')

var TOPIC_OFFSET = '/helps/'.length

marked.use({
  renderer: {
    link: function link(href, title, text) {
      var baseUrl = new URL(this.options.baseUrl, location.origin)
      var targetUrl = new URL(href, baseUrl)
      var outside = targetUrl.origin !== location.origin

      if (!outside) {
        var pathname = targetUrl.pathname
        if (pathname.endsWith('.md') || pathname.endsWith('.markdown')) {
          var url = new URL(location.origin + '/help')
          url.searchParams.append('topic', pathname.slice(TOPIC_OFFSET, pathname.lastIndexOf('.')))

          href = url.href
        }
      }

      return `<a href="${href}" ${title ? `title="${title}"` : ''} ${outside ? 'target="_blank"' : ''}>${text}</a>`
    }
  }
})

onmessage = e => {
  const { content, options } = e.data
  postMessage(marked(content, options))
}
