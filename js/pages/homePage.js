// Type Effect
new TypeIt("#typeElement", {
  speed: 100,
  loop: true,
  html: true,
  cursor: false,
})
  .type("I Love <span class='letterColored'>Javascript</span>")
  .pause(1500)
  .delete()
  .type("I Code Cool <span class='letterColored'>websites</span>")
  .pause(1500)
  .delete()
  .type("I Code SQL In <span class='letterColored'>lowercase &#128513</span>")
  .pause(1500)
  .delete()
  .go();
