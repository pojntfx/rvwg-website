#(c) 2017 Nils Reichert & Felicitas Pojtinger

# ke_search searchbox
lib.search = COA_INT
lib.search {
  10 < plugin.tx_kesearch_pi1
 
  # result page 
  10.resultPage = 20
 
  # static or ajax mode
  10.renderMethod = static
 
  # HTML template
  ##10.templateFile = EXT:ke_search/res/template_pi1.tpl
  10.templateFile = fileadmin/templates/ext/ke_search/template_pi1.tpl

  # CSS file
  ##10.cssFile = EXT:ke_search/res/ke_search_pi1.css
  10.cssFile = fileadmin/templates/ext/ke_search/ke_search_blau.css

  # Content element (search box plugin) from which additional
  # configuration should be loaded (UID of content element).
  # Important: If you have two search boxes on your result page
  # (eg. in the top and in the left area), you should set this value!
  # 10.loadFlexformsFromOtherCE = 65
}