#(c) 2017 Nils Reichert & Felix Pojtinger

# ------------------------------------------------------------------------
#  seobasics
# ------------------------------------------------------------------------
plugin.tx_seobasics{
  10.wrap = <title>Richard-von-Weizsäcker-Gymnasium - |</title>
  20.wrap = <meta name="title" content="Richard-von-Weizsäcker-Gymnasium -  |" />
  10.stdWrap.noTrimWrap = | ||
  20.stdWrap.noTrimWrap = | ||
  50.date = d.m.Y
}

# Include sitemap.xml
includeLibs.tx_seobasics_sitemap = EXT:seo_basics/class.tx_seobasics_sitemap.php

tx_seo_xmlsitemaps = PAGE
tx_seo_xmlsitemaps {
  typeNum = 776
  config.disableAllHeaderCode = 1
  config.renderCharset = UTF-8
  config.xmlprologue = xml_10
  config.additionalHeaders = Content-type: text/xml
  config.xhtml_cleaning = 0
  10 = USER
  10.userFunc = tx_seobasics_sitemap->renderXMLSitemap
}
