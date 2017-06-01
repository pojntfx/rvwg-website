#(c) 2017 Nils Reichert & Felicitas Pojtinger

### -------------------------------------------------------------------------------------------
### -------------------------------------------------------------------------------------------
lib.menuMain = HMENU
lib.menuMain {
         
    entryLevel = 0

    wrap = <ul class="nav navbar-nav navbar-center navbar-inverted menuMain"> | </ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }

        ACT = 1
        ACT {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagParams =class="active"
            ATagTitle.field = nav_title // title
        }
        
        ACTIFSUB = 1
        ACTIFSUB {
            wrapItemAndSub = <li class="pid-{field:uid} parent">|</li>        
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagParams =class="active"
            ATagTitle.field = nav_title // title
        }

        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li class="pid-{field:uid} parent">|</li>        
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }

    2 = TMENU
    2 {
        expAll = 1
        noBlur = 1

        wrap = <ul class="sub"> | </ul>

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }

        ACT = 1
        ACT {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagParams =class="active"
            ATagTitle.field = nav_title // title
        }

        ACTIFSUB = 1
        ACTIFSUB {
            wrapItemAndSub = <li class="pid-{field:uid} parent">|</li>        
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagParams =class="active"
            ATagTitle.field = nav_title // title
        }

        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li class="pid-{field:uid} parent">|</li>        
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }

    }

    3 = TMENU
    3 {
        expAll = 1
        noBlur = 1

        wrap = <ul class="sub"> | </ul>

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }

        ACT = 1
        ACT {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagParams =class="active"
            ATagTitle.field = nav_title // title
        }
    }
}

### -------------------------------------------------------------------------------------------
### -------------------------------------------------------------------------------------------
lib.menuMeta = COA
lib.menuMeta {
    wrap =  <ul id="menuMeta">|</ul>
    
    20 = HMENU
    20.special = directory
    20.special.value = 4
    20.entryLevel = 0
    20.1 = TMENU
#    20.1.wrap =  <ul id="menuMeta">|</ul>
    20.1 {
        # Normal state properties
        NO{
            linkWrap = <li> | </li><li class="menuGap">&nbsp;</li> |*| <li> | </li><li class="menuGap">&nbsp;</li> |*| <li> | </li>
###linkWrap = <li class="left fb"> | </li> |*| <li class="menuGap">I</li><li> | </li> |*| <li class="menuGap">I</li><li class="right"> | </li>
            #linkWrap = <li class="left"> | </li> |*| <li class="menuGap">I</li><li> | </li> |*| <li class="menuGap">I</li><li class="right fb"> | </li>
###linkWrap = <li class="left"> | </li> |*| <li class="menuGap">&nbsp;</li><li> | </li> |*| <li class="menuGap">&nbsp;</li><li class="right fb"> | </li>

        }   
        # Enable active state and set properties:
        ACT = 1
        ACT{
            linkWrap = <li class="act"> | </li><li class="menuGap">&nbsp;</li> |*| <li class="act"> | </li><li class="menuGap">&nbsp;</li> |*| <li class="act"> | </li>
###linkWrap = <li class="left fb act"> | </li> |*| <li class="menuGap">I</li><li class="act"> | </li> |*| <li class="menuGap">I</li><li class="right act"> | </li>
###linkWrap = <li class="left act"> | </li> |*| <li class="menuGap">&nbsp;</li><li class="act"> | </li> |*| <li class="menuGap">&nbsp;</li><li class="right fb act"> | </li>
        }
    }
}

### -------------------------------------------------------------------------------------------
### -------------------------------------------------------------------------------------------
lib.menuUeberRvWG = HMENU
lib.menuUeberRvWG {
        
    special = directory
    special.value = 9
    entryLevel = 0

    wrap = <ul id="menuUeberRvWG">|</ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }
}

lib.menuUnterrichtsangebot = HMENU
lib.menuUnterrichtsangebot {
        
    special = directory
    special.value = 11
    entryLevel = 0

    wrap = <ul id="menuUnterrichtsangebot">|</ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }
}

lib.menuAktivitaeten = HMENU
lib.menuAktivitaeten {
        
    special = directory
    special.value = 12
    entryLevel = 0

    wrap = <ul id="menuAktivitaeten">|</ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }
}

lib.menuOrganisatoriches = HMENU
lib.menuOrganisatoriches {
        
    special = directory
    special.value = 13
    entryLevel = 0

    wrap = <ul id="menuOrganisatoriches">|</ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }
}

lib.menuService = HMENU
lib.menuService {
        
    special = directory
    special.value = 63
    entryLevel = 0

    wrap = <ul id="menuService">|</ul>

    1 = TMENU
    1 {
        wrap = |
        expAll = 1
        noBlur = 1

        NO {
            wrapItemAndSub = <li class="pid-{field:uid}">|</li>
            wrapItemAndSub.insertData=1
            ATagBeforeWrap = 1
            ATagTitle.field = nav_title // title
        }
    }
}

### -------------------------------------------------------------------------------------------
### -------------------------------------------------------------------------------------------
#lib.rootline = HMENU
#lib.rootline {
    #special = rootline
 
    # zeige komplette rootline an
    #special.range = 1|-1
 
    # Variation: Link nur auf die Uebergeordnete Seite
    #special.range = -2|-2
 
    # Text vor dem Rootline Menue
    #wrap = <p>Sie sind hier:&nbsp;|</p>
 
    #1 = TMENU
    #1.target = _top
    #1.NO {
     #   stdWrap.htmlSpecialChars = 1
 
        # Layout 1: Seite 1 | Seite 2 | Seite 3
        #linkWrap = |&nbsp;&#124;&nbsp;|*||*| |
 
        # Layout 2: Seite 1 > Seite 2 > Seite 3
        #linkWrap = |&nbsp;>&nbsp;|*||*| |
 
        # Layout 3: Seite 1 >> Seite 2 >> Seite 3
      #  linkWrap = |&nbsp;&raquo;&nbsp;|*||*| <span class="active">|</span>
 
       # doNotLinkIt = |*| 0 |*| 1
   # }
#}

