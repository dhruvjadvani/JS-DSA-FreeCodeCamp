// Only change code below this line
function urlSlug(title) {
  const lw = title.toLowerCase().trim();
  console.log(lw);
  const res = lw.split(/\s+/);
  console.log(res);
  const fin = res.join("-");
  console.log(fin);
  return fin;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
