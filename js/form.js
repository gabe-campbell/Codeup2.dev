var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;   // Declare variables
elForm = document.getElementById('formSignup');   // Store elements
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {    // Declare function
    var pack = this.options[this.selectedIndex].value;  // Get selected options
    if (pack === 'monthly') {   // If monthly package is chosen
      elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';   // Show this msg
      document.getElementById('packageHint').className = 'tip';
    } else if (this.options[this.selectedIndex].value === 'default') {
      elPackageHint.innerHTML = '';
    } else {    // Otherwise
      document.getElementById('packageHint').className = 'tip';
      elPackageHint.innerHTML = 'Wise choice!';
                // Show this msg
    }
}

function checkTerms(event) {                             // Declare function
  if (!elTerms.checked) {                                // If checkbox ticked
    elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
}

function clearMessage(event) {
  if (elTerms.checked) {
    elTermsHint.innerHTML = '';
  }
}

function checkPackage(event) {
  if (elSelectPackage.value === "default") {
    elPackageHint.innerHTML = 'You must select a package';
    document.getElementById('packageHint').className = 'warning';
    event.preventDefault();
  }
}

// create event listeners, submit calls checkTerms() and change calls packageHint
elForm.addEventListener('submit', checkTerms, false);
elForm.addEventListener('change', clearMessage, false);
elForm.addEventListener('submit', checkPackage, false);
elSelectPackage.addEventListener('change', packageHint, false);
