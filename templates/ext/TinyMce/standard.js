tinymce.init({
    cleanup : false,
    verify_html : false,    
    // selector: '.tinymce4_rte',
    selector: '.rte',
    browser_spellcheck: true,
    paste_as_text: true,
    remove_script_host: false,
    relative_urls: false,
    autoresize_max_height: 500,
    width: 800,
    height: 500,
    
    plugins: [
        'advlist autolink lists charmap hr anchor pagebreak searchreplace wordcount visualblocks visualchars code',
        'nonbreaking save table directionality template paste textcolor colorpicker autoresize shy contextmenu'
    ],
    // Currently not in use typo3image
    toolbar1: 'undo redo | removeformat | bold italic underline | typo3link unlink typo3image | ' +
        'styleselect | fontsizeselect | forecolor backcolor | ' +
        'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
    toolbar2: "",        
    
    external_plugins: {
        typo3filemanager: 'EXT:tinymce4_rte/Resources/Public/Plugins/Typo3FileManager/typo3filemanager.min.js',
        shy: 'EXT:tinymce/Resources/Public/JavaScript/TinymcePlugins/shy/plugin.min.js'
    },
    
    fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',	
	
    // Currently not in use typo3image
    contextmenu: 'typo3link unlink inserttable | cell row column deletetable'


    // Example for adding/changing style formats
	,style_formats: [
		{
			title: 'Headers', items: [
			{title: 'Header 2', block: 'h2'},
			{title: 'Header 3', block: 'h3'},
			{title: 'Header 4', block: 'h4'},
			{title: 'Header 5', block: 'h5'}
		]
		},
		{
			title: 'Inline', items: [
			{title: 'Bold', icon: "bold", inline: 'strong'},
			{title: 'Italic', icon: "italic", inline: 'em'},
			{title: 'Underline', icon: "underline", inline: 'span', styles: {'text-decoration': 'underline'}},
			{title: 'Strikethrough', icon: "strikethrough", inline: 'span', styles: {'text-decoration': 'line-through'}},
			{title: 'Superscript', icon: "superscript", inline: 'sup'},
			{title: 'Subscript', icon: "subscript", inline: 'sub'},
			{title: 'Code', icon: "code", inline: 'code'}
		]
		},
		{
			title: 'Blocks', items: [
			{title: 'Paragraph', block: 'p'},
			{title: 'Blockquote', block: 'blockquote'},
			{title: 'Div', block: 'div', format: 'greenBox'},
			{title: 'Pre', block: 'pre'}
		]
		},
		{
			title: 'Alignment', items: [
			{title: 'Left', icon: "alignleft", block: 'div', styles: {'text-align': 'left'}},
			{title: 'Center', icon: "aligncenter", block: 'div', styles: {'text-align': 'center'}},
			{title: 'Right', icon: "alignright", block: 'div', styles: {'text-align': 'right'}}
		]
		}
	],
	
	formats: {
		greenBox: {
			block: 'div',
			wrapper: 1,
			remove: 'all',
			classes: 'box-green'
		}
	}
});