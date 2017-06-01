#(c) 2017 Nils Reichert & Felix Pojtinger

[globalVar = TSFE:type = 100]

config {
    disableAllHeaderCode = 1
    xhtml_cleaning = none
    admPanel = 0
    metaCharset = utf-8
    additionalHeaders = Content-Type:text/xml;charset=utf-8
    disablePrefixComment = 1
    baseURL = http://www.hp.rvwg-web.de/
    absRefPrefix = http://www.hp.rvwg-web.de/
}

pageNewsRSS = PAGE
pageNewsRSS {
    typeNum = 100
    10 < tt_content.list.20.news_pi1
    10 {
        switchableControllerActions {
            News {
                1 = list
            }
        }
        settings < plugin.tx_news.settings
        settings {
            categories =
            categoryConjunction = notor
            limit = 30
            detailPid = 71
            startingpoint = 14
            format = xml
            recursive = 2
              
            list.rss.channel {
                title = rvwg.de - Die Nachrichten vom Richard-von-Weizsäcker-Gymnasium Baiersbronn
                description = Überall auf dem Laufenden bleiben! Hier finden Sie unser Angebot an RSS-Feeds im XML-Format.
                copyright = Copyright RvWG Baiersbronn
                generator = TYPO3
                link = http://hp.rvwg-web.de
                language = de_DE
                generator = TYPO3 EXT:news
                category =
            }              
        }
    }
}

# set the format
plugin.tx_news.settings.format = xml

#pageNewsRSS = PAGE
#pageNewsRSS {
#  typeNum = 100
#  10 = USER_INT
#  10 {
#    userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
#    extensionName = News
#    pluginName = Pi1
#    controller = News
#    action = list
#    view < plugin.tx_news.view
#    persistence < plugin.tx_news.persistence
#    settings < plugin.tx_news.settings
#    settings {
#      limit = 30
#      detailPid = 133
#      startingpoint = 2
#      format = xml
#      list.rss.channel {
#        title = RvWG Baiersbronn
#        description = Beschreibung .....................
#        language = de
#        copyright = Copyright
#        generator = TYPO3
#        link = http://hp.rvwg-web.de
#      }
#    }
#  }
#}
[global]

page.headerData.110 = TEXT
page.headerData.110.value = <link rel="alternate" type="application/rss+xml" title="RvWG RSS2-Feed" href="http://www.hp.rvwg-web.de/index.php?type=100" />