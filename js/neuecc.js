$('body').css('background', 'white');
$('*').not('.csharp >span').css('color', 'black');
$('#s').css('background', 'white');
$('#comment').css('background', 'white');
$('input').css('background', 'white'); /*for "Search" button has no id */
$('A').css('color','royalblue');
$('#content > h1:nth-child(1) > a').css('color','black');
$("div.entry_body h2").css('font-weight', 'bold');

var url = window.location.href;
if(url.match("neue.cc/\\d{4}/\\d{1,2}/[^./]+.html")) {
	$(function(){
	        var idcount = 1;
	        var toc = '';
	        var currentlevel = 0;
	        
	        $("div.entry_body h2", this).each(function(){
	            this.id = "chapter_" + idcount;
		        idcount++;
	            var level = 1;
	            while(currentlevel < level) {
	                toc += '<ol class="chapter">';
	                currentlevel++;
	            }
	            while(currentlevel > level) {
	                toc += "</ol>";
	                currentlevel--;
	            }
	            toc += '<li><a href="#' + this.id + '">' + $(this).html() + "</a></li>\n";
	        });
	        
	        while(currentlevel > 0) {
	            toc += "</ol>";
	            currentlevel--;
	        }
	        
	        toc = "<div id=\"toc\" style=\"border:solid 1px #000;padding-left:10px;margin-bottom:30px;\">"
	                 + "<span style=\"color:#000;font-weight:bold;\">目次</span>" 
	                 + toc
	                 + "</div>";
	        $("div.entry_body").prepend(toc);
	});
}
