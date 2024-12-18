function foo(a, b) {
  // Handle null values explicitly
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b;
  console.log(a + b);
}

foo(null, 1); // 1
foo(1, null); // 1
foo(1, 2);    // 3
foo(null, null); //0