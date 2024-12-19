((html) => {
  const chapterDom = org.jsoup.Jsoup.parse(html).body();
  const novelIdMatch = html.match(/fetch\('\/comment\/n\/(\d+)'/);
  const seriesDom = chapterDom.select('div.container div.row.flex-lg-row-reverse div.col-lg-3.mt-3 div ul li.list-group-item.text-center a');

  if (!seriesDom) return getSeries('novel', novelIdMatch[1]);
  const seriesId = seriesDom.attr('href').match(/\/s\/(\d+)/)[1];
  return getSeries('series', seriesId);
})(result);