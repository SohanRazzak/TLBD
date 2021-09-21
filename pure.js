



/* Auto SRCSET */
(function() {

    function createSrcSet(imageTag) {
        var source = imageTag.getAttribute('src');
        var srcSetValue = createSrcSetValue(source);
        imageTag.setAttribute("srcset", srcSetValue);
    };

    function createSrcSetValue(imageSource) {
        var result = [];
        var sourceArray = imageSource.split('/');
        var resolutions = [320, 640, 1200, 1600, 3200];
        Array.prototype.forEach.call(resolutions, function(resolution, index) {
            sourceArray[7] = 's' + resolution;
            var url = sourceArray.join('/') + ' ' + resolution + 'w';
            result.push(url);
        });
        return result.join(', ');
    };
	
    var images = document.querySelectorAll(".Blog img");
	
    Array.prototype.forEach.call(images, function(image, index) {
        createSrcSet(image);
    });
	
})();

/* Auto Table of Content*/
// Table Of Contents By SR
function tlbdTOC() {
	var a = 1,
		b = 0,
		c = "";
	document.getElementById("grab-toc").innerHTML = document.getElementById("grab-toc").innerHTML.replace(/<h([\d]).*?>(\n.*?|.*?)<\/h([\d]).*?>/gi, function(d, e, f, g) {
		return e != g ? d : (e > a ? c += new Array(e - a + 1).join("<ol class='point" + a + "'>") : e < a && (c += new Array(a - e + 1).join("</ol></li>")), b += 1, c += '<li><a href="#' + f.replace(/[]/gi, " ").trim().replace(/\s/g, "_") + '" title="' + f + '">' + f + "</a>", a = parseInt(e), "<h" + e + " id='" + f.replace(/[]/gi, " ").trim().replace(/\s/g, "_") + "'>" + f + "</h" + g + ">")
	}), a && (c += new Array(a + 1).join("</ol>")), document.getElementById("post-TOC").innerHTML += c
}

