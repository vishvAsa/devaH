function get_toc_item_id(header_id) {
    return "toc_item_" + header_id;
}

// https://github.com/ghiculescu/jekyll-table-of-contents
// This is how a jquery plugin is defined - https://stackoverflow.com/questions/2937227/what-does-function-jquery-mean .
$.fn.toc = function(options) {
    console.debug("Setting up TOC for " + document.location);
    var defaults = {
      noBackToTopLinks: false,
      title: '',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4',
      listType: 'ol', // values: [ol|ul]
    },
    settings = $.extend(defaults, options);
    
    // console.debug($(settings.headers));
    var headers = $(settings.headers).filter(function() {
      // get all headers with an ID
      var previousSiblingName = $(this).prev().attr( "name" );
      if (!this.id && previousSiblingName) {
        this.id = $(this).attr( "id", previousSiblingName.replace(/\./g, "-") );
      }
      return this.id;
    }), output = $(this);
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      return;
    }
    // console.debug(headers);
    
    var get_level = function(ele) { return parseInt(ele.nodeName.replace("H", ""), 10); }
    var highest_level = headers.map(function(_, ele) { return get_level(ele); }).get().sort()[0];
    
    var level = get_level(headers[0]),
      this_level,
      html = settings.title + " <"+settings.listType+" id=\"toc_ul\" class=\"nav\">";
    headers.on('click', function() {
      if (!settings.noBackToTopLinks) {
        window.location.hash = this.id;
      }
    })
    .addClass('clickable-header')
    .each(function(_, header) {
      this_level = get_level(header);
      if (!settings.noBackToTopLinks && this_level === highest_level) {
        $(header).addClass('top-level-header');
      }
      var toc_item_id = get_toc_item_id(header.id);
      if (this_level === level) // same level as before; same indenting
        html += "<li id='" + toc_item_id + "'><a href='#" + header.id + "'>" + header.innerText + "</a>";
      else if (this_level <= level){ // higher level than before; end parent ol
        for(i = this_level; i < level; i++) {
          html += "</li></"+settings.listType+">"
        }
        html += "<li  id='" + toc_item_id + "'><a href='#" + header.id + "'>" + header.innerText + "</a>";
      }
      else if (this_level > level) { // lower level than before; expand the previous to contain a ol
        for(i = this_level; i > level; i--) {
          html += "<"+settings.listType+">";
          if(i == level + 1) {
              html +=  "<li id='" + toc_item_id + "'>";
          } else {
              html += "<li>";
          }
        }
        html += "<a href='#" + header.id + "'>" + header.innerText + "</a>";
      }
      level = this_level; // update for the next one
    });
    html += "</"+settings.listType+">";
    
    headers.each(function () {
      var header = $(this);
      if (!header.next().hasClass("back-to-top")){
          // There is a javascript click listener (defined later in this file) for the below to scroll up.
          var return_to_top = $('<div id="toc_up_' + header.attr('id') + '" class="icon-arrow-up back-to-top" style="text-align:right;">Up↑</div>');
          var toc_item_id = get_toc_item_id(header.attr('id'));
          return_to_top.click(function () {
              // First, set up the right selections in the table-of-contents menu.
              // So, the user can follow the trail of highlights menu items and expand the menu items till he reaches the appropriate level.
              // On 20181119, I spent close to a working day messing with the menu getting it to expand to the right spot; but on realizing that the above is good enough, gave up.
              var itemToActivate = undefined;
              $("#toc_ul").find("li").each(function (liIndex, liElement) {
                  // console.debug(liIndex, liElement);
                  if (liElement.id == toc_item_id) {
                      itemToActivate = $(this);
                  } else {
                      $(this).removeClass("active");
                  }
              });
              itemToActivate.addClass("active");
              itemToActivate.parents("li").addClass("active"); // This call is ineffective for some reason.
              
              // Now scroll up.
              $([document.documentElement, document.body]).animate({
                  scrollTop: $("[id='" + toc_item_id + "']").offset().top
              }, 100);
          });
          header.after(return_to_top);
      }
    })
    
    output.html(html);
    resetNavgocoMenu();
    // Finally, set up navgoco options.
};

function resetNavgocoMenu() {
    $('#toc_ul').navgoco({
        accordion: true,
        openClass: 'active', // open
        save: false,
        caretHtml: '...', // Make it easier to expand the drawers by increasing click-capture area.
        cookie: {
            name: 'navgoco_toc',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 0, // 400ms was causing screen shakes with scrolling to the top by pressing the Up bottons.
            easing: 'swing'
        }
    });
    // console.debug("Set up navgoco.");
    $("#toc_ul").navgoco('toggle', false);
}

function updateToc() {
    $('#toc').toc({minimumHeaders: 0, listType: 'ul', headers: 'h2,h3,h4,h5,h6'});
}

// Update table of contents (To be called whenever page contents are updated).
$( document ).ready(updateToc);



// Code to make the "Nav" button, which toggles the table of contents.
// Not to be confused with toggling sub-items in that menu.
var toggleToc = function() {
    $("#toc").toggle();
    $("#toggle-toc-icon").toggleClass('fa-toggle-on');
    $("#toggle-toc-icon").toggleClass('fa-toggle-off');
};

function toggleTocExpansion() {
    $("#toggle-toc-expansion-icon").toggleClass('fa-toggle-on');
    $("#toggle-toc-expansion-icon").toggleClass('fa-toggle-off');
    if($("#toggle-toc-expansion-icon").hasClass('fa-toggle-on')) {
        $("#toc_ul").navgoco('toggle', true);
    } else {
        $("#toc_ul").navgoco('toggle', false);
    }
}

$(document).ready(function() {
    $("#toggle-toc-icon").click(toggleToc);
    $("#toggle-toc-expansion-icon").click(toggleTocExpansion);
});
