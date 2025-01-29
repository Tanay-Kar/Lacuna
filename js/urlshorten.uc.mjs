BrowserUIUtils.trimURL = function trimURL(aURL) {
    let url = this.removeSingleTrailingSlashFromURL(aURL);
    return url.startsWith("http://") || url.startsWith("https://")
        ? url.split('/')[2]
        : url;
}
