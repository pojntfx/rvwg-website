#(c) 2017 Nils Reichert & Felix Pojtinger

topnavigation = HMENU
topnavigation.wrap (

<!-- NAVBAR -->
<nav id="mynavbar" class="navbar navbar-semitransparent navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" rel="home" href="#" title="Buy Sell Rent Everyting">
        <img style="max-width:100px; margin-top: -7px;"
             src="fileadmin/templates/img/logo.png">
    </a>
    </div> <!-- ???? -->
    <div class="collapse navbar-collapse navbar-right" id="navbar-collapse">
      <ul class="nav navbar-nav">|</ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>

<!-- TEMPORARY SPACER -->
<!-- <div class="col-xs-12" style="height: 100px;"></div> -->

  )
topnavigation.entryLevel = 0
topnavigation {
    1 = TMENU
  1 {
    expAll = 1
    
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
    
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
    
    IFSUB = 1
    IFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    IFSUB.after = <b class="caret"></b></a>
    IFSUB.doNotLinkIt = 1
    IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
    IFSUB.ATagTitle.field = abstract // description // title
    
    ACTIFSUB = 1
    ACTIFSUB.before = <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    ACTIFSUB.after = <b class="caret"></b></a>
    ACTIFSUB.doNotLinkIt = 1
    ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
    ACTIFSUB.ATagTitle.field = abstract // description // title
     
    }
     
    2 = TMENU
  2 {
    expAll = 1
    
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
    
    ACTIFSUB = 1
    ACTIFSUB.wrapItemAndSub = |
    ACTIFSUB.before = <li class="divider"></li><li class="nav-header">
    ACTIFSUB.after = </li>
    ACTIFSUB.doNotLinkIt = 1
    ACTIFSUB.ATagTitle.field = abstract // description // title
    
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
    
    IFSUB = 1
    IFSUB.before = <li class="divider"></li><li class="nav-header">
    IFSUB.after = </li>
    IFSUB.doNotLinkIt = 1
    IFSUB.ATagTitle.field = abstract // description // title
    
    SPC = 1
    SPC.allWrap = <li class="divider"></li><li class="nav-header">|</li>
    
    wrap = <ul class="dropdown-menu">|</ul>
    }
     
    3 = TMENU
  3 {
    NO.allWrap = <li>|</li>
    NO.ATagTitle.field = abstract // description // title
    
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
    ACT.ATagTitle.field = abstract // description // title
    }
  }