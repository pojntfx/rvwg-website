#(c) 2017 Nils Reichert & Felicitas Pojtinger

RTE.default {
    tinymceConfiguration = fileadmin/templates/ext/TinyMce/standard.js

    contentCSS {
        file1 = fileadmin/templates/css/bootstrap.min.css
        file2 = fileadmin/templates/css/customizer/pages-pages-customizer.css
        file3 = fileadmin/templates/ext/TinyMce/standard.css
    }

    buttons {
        link.properties.class.allowedClasses := addToList( internal-link, external-link, mail, download, download-pdf, download-pdf-spezial, btn btn-default)
    }
}

##    theme_advanced_font_sizes: "8px 10px,12px,13px,14px,16px,18px,20px",
##    font_size_style_values : "8px 10px,12px,13px,14px,16px,18px,20px",


##    proc.allowedClasses := addToList(download-pdf) 
##  buttons {
##      link.properties.class.allowedClasses := addToList(download-pdf, mail, download, ##internal-link, internal-link-new-window, external-link, external-link-new-window, btn btn-default, btn ##btn-success, btn btn-primary, btn btn-danger)
##  }
##    proc.allowedClasses := addToList(fa fa-shopping-cart)


