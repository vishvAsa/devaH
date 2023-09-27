+++
title = "हयग्रीवः १"
+++

<svg width="1000" height="1000">
  <circle cx="500" cy="500" r="3" fill="red" />

  <!-- Circle centered at 500, 500. Circumradius 210/sqrt(3) = 121.24-->
  <circle cx="500" cy="500" r="121.24" fill="none" stroke="black" stroke-width="2" />

  <!-- First equilateral triangle. Width 210. Height sqrt(3)/2*210=182. With circumradius at 500, 500. Top vertex lies circumradius distance away from center.-->
  <polygon points="500,379 605,561 395,561" fill="none" stroke="black" stroke-width="2" />

  <!-- Second equilateral triangle -->
  <polygon points="500,621 605,439 395,439" fill="none" stroke="black" stroke-width="2" />

  <circle cx="500" cy="500" r="191" fill="none" stroke="black" stroke-width="2" />

  <circle cx="500" cy="500" r="226" fill="none" stroke="black" stroke-width="2" />

  <circle cx="500" cy="500" r="295" fill="none" stroke="black" stroke-width="2" />

  <circle cx="500" cy="500" r="365" fill="none" stroke="black" stroke-width="2" />

  <circle cx="500" cy="500" r="400" fill="none" stroke="black" stroke-width="2" />

  <!-- Outer compound layer with gates -->
  <polygon points="980,20 605,20 605,0 395,0 395,20 20,20  20,395 0,395 0,605 20,605 20,980  395,980  395,1000 605,1000 605,980  980,980 980,605 1000,605 1000,395 980,395 980,20" fill="none" stroke="black" stroke-width="2" />

  <!-- Inner compound layer with gates -->
  <polygon points="950,50 575,50 575,30 425,30 425,50 50,50  50,425 30,425 30,575 50,575 50,950  425,950  425,970 575,970 575,950  950,950 950,575 970,575 970,425 950,425 950,50" fill="none" stroke="black" stroke-width="2" />

  <!-- Calculate 16 equally spaced points -->
  <g id="points-c1">
    <circle cx="500" cy="378.76" r="3" fill="red" />
    <circle cx="605" cy="439" r="3" fill="red" />
    <circle cx="621.24" cy="500" r="3" fill="red" />
    <circle cx="561" cy="395" r="3" fill="red" />
    <circle cx="605" cy="561" r="3" fill="red" />
    <circle cx="561" cy="605" r="3" fill="red" />
    <circle cx="500" cy="621.24" r="3" fill="red" />
    <circle cx="439" cy="605" r="3" fill="red" />
    <circle cx="395" cy="561" r="3" fill="red" />
    <circle cx="378.76" cy="500" r="3" fill="red" />
    <circle cx="395" cy="439" r="3" fill="red" />
    <circle cx="439" cy="395" r="3" fill="red" />
  </g>

[//]: # (  <path d="M 500 188 C 20 20, 40 20, 50 10" fill="none" stroke="black" stroke-width="2"/>)
</svg>


