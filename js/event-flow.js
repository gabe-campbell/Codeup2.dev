function showElement() {
  alert(this.innerHTML);
}

el = document.getElementById("list"); // el is resused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el = document.getElementById("link");
el.addEventListener('click', showElement, false);

el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true)

// This exercise shows the difference between the bubbling and capture state for event handlers
// Bubbling starts at the most specific element and goes out
// Capturing starts at the outermost containing element and trickles down
