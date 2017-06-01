#(c) 2017 Nils Reichert & Felix Pojtinger

# Default PAGE object:
page = PAGE
page {
  
  typeNum = 0
  shortcutIcon = fileadmin/templates/img/favicon.ico
  insertClassesFromRTE = 1
  
  # Assign the Template files with the Fluid Backend-Template
  10 = FLUIDTEMPLATE
  10{
    file.stdWrap.cObject = CASE
    file.stdWrap.cObject {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = fileadmin/templates/template-home.html
    
    # template-home
    1 = TEXT
    1.value = fileadmin/templates/template-home.html
    
    # template-layout-1
    2 = TEXT
    2.value = fileadmin/templates/template-layout-1.html
    
    # template-rvwg-01
    3 = TEXT
    3.value = fileadmin/templates/template-rvwg-01.html
  }     
  
  partialRootPath = fileadmin/templates/Partials/
  layoutRootPath =  fileadmin/templates/Layouts/
  
  variables {
    siteName = TEXT
    siteName.value =
    
    Content-Top < styles.content.get
    Content-Top.select.where = colPos = 1
    
    Content-Main < styles.content.get
  }
}


# body-Tag mit Klasse auszeichnen  
bodyTagCObject = CASE
bodyTagCObject {
  
  ## stdWrap.dataWrap = <body id="p-{TSFE:id}" class="fixed-header  |" data-spy="scroll" data-target=".navbar" data-offset='61'>
  ## stdWrap.splitChar = |
  
  stdWrap.dataWrap = <body class="|">
  stdWrap.splitChar = |
  
  key.data = levelfield:-1, backend_layout_next_level, slide
  key.override.field = backend_layout
  
  default = TEXT
  default.value = template-home fixed-header
  
  1 = TEXT
  1.value = template-home fixed-header
  
  2 = TEXT
  2.value = template-layout-1 fixed-header
  
  # template-rvwg-01
  3 = TEXT
  3.value = template-rvwg-01
}


headerData{
  
  1 = TEXT
  1.value = <!-- START HeaderData -->
  
  # Neuen title Tag in headerData setzen
  5 = TEXT
  5 {
    field = title
    noTrimWrap = |<title>| - Richard-von-Weizsäcker-Gymnasium Baiersbronn</title>|
  }
  
  ##++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  10 = TEXT
  10.value = <meta class="viewport" name="viewport" content="width=device-width, initial-scale=1.0">
  
  20 = TEXT
  20.value = <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  ##----------------------------------------------------------------------------------------------------------
  100 = TEXT
  100.value = <!-- Font -->
  
  110 = TEXT
  110.value = <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Arimo:400,700,400italic,700italic'>
  
  120 = TEXT
  120.value = <!-- Custom CSS -->
  
  130 = CASE
  130 {
    # stdWrap.wrap = <link rel="stylesheet" type="text/css" href="fileadmin/templates/css/|" media="all" />
    # stdWrap.wrap = <link rel="stylesheet" type="text/css" href="|" media="all" />
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = <link rel="stylesheet" href="fileadmin/templates/css/style.css">
    
    2 = TEXT
    2.value = <link rel="stylesheet" href="fileadmin/templates/css/material-kit.css">
    
    # template-rvwg-01
    3 = TEXT
    3.value = <link rel="stylesheet" href="fileadmin/templates/css/material-kit.css">
    
    # fullcalendar stuff
    #3.value = <link rel="stylesheet" href="fileadmin/templates/css/fullcalendar.min.css">
    #3.value = <link rel="stylesheet" media='print' href="fileadmin/templates/css/fullcalendar.print.min.css">
  }
  
  140 = CASE
  140 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = <link rel="stylesheet" href="fileadmin/templates/css/customizer/home-pages-customizer.css">
    
    2 = TEXT
    #2.value = <link rel="stylesheet" href="fileadmin/templates/css/customizer/home-pages-customizer.css">
    2.value = <link rel="stylesheet" href="fileadmin/templates/css/style2.css">
    
    # template-rvwg-01
    3 = TEXT
    3.value = <link rel="stylesheet" href="fileadmin/templates/css/style2.css">
  }
  
  150 = CASE
  150 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = <link rel="stylesheet" href="fileadmin/templates/css/customizer/pages-pages-customizer.css">
    
    2 = TEXT
    
    #2.value = <link rel="stylesheet" href="fileadmin/templates/css/customizer/pages-pages-customizer.css">
    2.value = <link rel="stylesheet" href="fileadmin/templates/css/webviewstyle.css">
    
    # template-rvwg-01
    3 = TEXT
    3.value = <link rel="stylesheet" href="fileadmin/templates/css/animate.min.css">
  }
  
  160 = CASE
  160 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = 
  }
  
  170 = CASE
  170 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = 
  }
  
  
  300 = TEXT
  300.value = <!-- IE Styles-->
  310 = TEXT
  310.value = <link rel='stylesheet' href="fileadmin/templates/css/ie/ie.css">
  320 = TEXT
  320.value = <!--[if lt IE 9]>
  330 = TEXT
  330.value = <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  340 = TEXT
  340.value = <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  350 = TEXT
  350.value = <link rel='stylesheet' href="fileadmin/templates/css/ie/ie8.css">
  360 = TEXT
  360.value = <![endif]-->
  
  
  400 = TEXT
  400.value = <!-- END HeaderData -->
}  

includeJSFooterlibs{
  
  ### jQuery UI Source
  fg-jsdatei-1 = http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js
}    

footerData{
  
  9950 = CASE
  9950 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/material.min.js" type="text/javascript"></script>
  }
  9952 = CASE
  9952 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/nouislider.min.js" type="text/javascript"></script>
  }
  9954 = CASE
  9954 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/bootstrap-datepicker.js" type="text/javascript"></script>
  }
  9956 = CASE
  9956 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/material-kit.js" type="text/javascript"></script>
  }
  
  9958 = CASE
  9958 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = 
    
    2 = TEXT
    2.value = 
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/style.js" type="text/javascript"></script>
  }
  
  9990 = CASE
  9990 {
    
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    
    default = TEXT
    default.value = <script src="fileadmin/templates/js/main.js" type="text/javascript"></script>
    
    2 = TEXT
    2.value = <script src="fileadmin/templates/js/main.js" type="text/javascript"></script>
    
    # template-rvwg-01
    3 = TEXT
    3.value = <script src="fileadmin/templates/js/main-rvwg-01.js" type="text/javascript"></script>
    3.value = <script src="fileadmin/templates/js/secret.js" type="text/javascript"></script>
    
    #add fullcalendar stuff    
    #3.value = <script src="fileadmin/templates/lib/moment.min.js"></script>
    #3.value = <script src="fileadmin/templates/lib/jquery.min.js"></script>
    
    #3.value = <script src="fileadmin/templates/js/fullcalendar.min.js" type="text/javascript"></script>
    #3.value = <script src="fileadmin/templates/js/gcal.js" type="text/javascript"></script>
    #3.value = <script src="fileadmin/templates/js/calendar.js" type="text/javascript"></script>
  }
  
  
  
  
  
  
  10000 = TEXT
  10000.value = <!-- END FooterData -->
  
}  

# page.meta
meta {
  keywords = TEXT
  #default: Startseitenwerte übernehmen
  keywords.data = DB:pages:2:keywords
  #aktuelle Seite überschreibt default
  keywords.override {
  required = 1
  data = field:keywords
}
description = TEXT
#default: Startseitenwerte übernehmen
description.data = DB:pages:2:description
#aktuelle Seite überschreibt default
description.override {
required = 1
data = field:description
}
revisit-after = 10 days
Robots = index, follow
author = Fritz Günther
}
}