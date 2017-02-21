// querySelector only returns the first match

var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a NodeList
// The third li element is then selected and changed
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';

// This exercise shows the difference between querySelector and querySelectorAll, the first selects only the first matching element while the second creates a nodelist; these both use tags and classnames to specify the desired element(s)
