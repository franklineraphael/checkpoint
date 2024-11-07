let string = prompt("Enter your age");
if (string <= 12) {
  alert(`you are old eligible to pay $10`);
} else if (string > 13 && string < 17) {
  alert(`you are elegible to be pay $15`);
} else if (string > 18) {
  alert(`you are eligible to pay $20`);
}
