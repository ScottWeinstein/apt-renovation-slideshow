function getUrl(d) {
    if (!d.url) {
      return 'images/' + d.cap + '.jpg';
    }

    if (d.url[0] === '/') {
        return 'https://s3.amazonaws.com/jo.www.bucket/bowerbirdarchitects.com/uploads/project_image' + d.url;
    }

    return d.url;
}

function getThumb(d) {
    return 'images/thumbs/' + d.cap + '.jpg';
}

d3.json('js/slideshowData.json', function (err, slides) {
    var anchors = d3.select('.clearing-thumbs')
    .selectAll('li')
    .data(slides)
    .enter()
    .append('li')
    .append('a')
    .attr('href', getUrl);

    anchors.append('img')
    .attr('data-caption', function(d) { return d.cap; })
    .attr('src', getThumb);

    $(document).foundation();
});