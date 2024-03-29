#(c) 2017 Nils Reichert & Felicitas Pojtinger

### -------------------------------------------------------------------------------------------
### -------------------------------------------------------------------------------------------
config {    

    ##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    ##--------------------------------------------------------------------------------------------
    ## Seitentitel ändern
    ## http://www.typo3wizard.com/de/snippets/general-config/seitentitel-aendern.html
    ##
    ##  -->> page.headerData
    ##  -->> config.noPageTitle = 2
    ##--------------------------------------------------------------------------------------------
   
     # Seitentitel entfernen
    noPageTitle = 2
    ##--------------------------------------------------------------------------------------------
    ##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 
    no_cache = 0
    admPanel = 0
    doctype = html5
    xmlprologue = none  
    xhtml_cleaning = all  
    disablePrefixComment = 1
    linkVars = L
    renderCharset = utf-8   

    index_enable = 0
    index_externals = 0

    ### -----------------------------------
    ### Language and locallization
    ### -----------------------------------
    language = de
    locale_all = de_DE.utf8
    #locale_all = de_DE.UTF8
    sys_language_uid = 0
    sys_language_mode = content_fallback  
    sys_language_overlay = 1
    htmlTag_langKey = de
    config.metaCharset = ISO-8859-1
    #sys_language_overlay = hideNonTranslated

###config.plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0
    
    ### Spam protection  
    spamProtectEmailAddresses = ascii

    ### ----------------------------------------------
    simulateStaticDocuments = 0
    baseURL = http://www.rvwg.de/
    tx_realurl_enable = 1
    redirectOldLinksToNew = 1

    ### ----------------------------------------------

  sendCacheHeaders = 1
  sendCacheHeader_onlyWhenLoginDeniedInBranch = 1

  accessibility = 1
  uniqueLinkVars=1
    
  meaningfulTempFilePrefix = 100
  titleTagFunction = tx_browserpagetitle->getTitle
  
  headerComment (
Konzeption: Fritz Günther
Umsetzung:  Fritz Günther
TYPO3-Integration: Fritz Günther
  )
}

#-------------------------------------------------------------------------
#---- Configuration of the language ---------------------------------------
#---- Deutsch, sys_language.uid = 0 ------------------------------------
#-------------------------------------------------------------------------
[globalVar = GP:L = 0]
config.sys_language_uid = 0
config.language = de
config.locale_all = de_DE.UTF8
config.htmlTag_langKey = de
###config.plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0

plugin.tx_staticinfotables_pi1.countryCode = DEU
plugin.tx_staticinfotables_pi1.languageCode = DE
plugin.tx_staticinfotables_pi1.currencyCode = EUR
[global]

# Englisch, sys_language.uid = 1
[globalVar = GP:L = 1]
config.sys_language_uid = 1
config.language = en
config.locale_all = en_UK.UTF8
config.htmlTag_langKey = en
###config.plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 2

plugin.tx_staticinfotables_pi1.countryCode = EN
plugin.tx_staticinfotables_pi1.languageCode = EN
plugin.tx_staticinfotables_pi1.currencyCode = EUR
[global]
