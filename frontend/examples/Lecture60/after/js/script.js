$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";

var allCategoriesUrl = "http://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";

var insertProperty = function(string, propName, propValue){
  var propToReplace = "{{" + propName  "}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
  
// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml, 
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  }, 
  false); //false means i dont want you to preprocess this as json because it's an html snippet
});

dc.loadMenuCategories = function(){
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    allCategoriesUrl,
    buildAndShowCategoriesHTML
    );
}

function buildAndShowCategoriesHTML(categories){
  
}
global.$dc = dc;

})(window);

