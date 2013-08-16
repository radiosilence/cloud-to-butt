// Generated by CoffeeScript 1.6.3
(function() {
  var handleText, walk, words;

  words = ['Reverse Racism', 'Racism', 'Equality', 'SJW', 'Weight', 'Rape', 'Ableism', 'Ableist', 'Social Justice', 'Feminism', 'MRA', 'Masculism', 'multiple', 'Misandry', 'Misogyny', 'Genderfluid', 'Genderqueer', 'Demisexual', 'Otherkin', 'Headmates', 'White people', 'Fatphobia', 'obesity', 'Thin Privilege', 'Privilege', 'POC', 'patriarchy', 'Black', 'Curves', 'kin', 'Cultural Appropriation', 'Culture', 'Cis', 'policing', 'fatphobia', 'wolf', 'Trans', 'LGBT', 'Queer', 'Rape', 'Solidarity', 'Patriachy', 'Pride', 'Oppressed', 'Oppression', 'Tumblr', 'Womyn', 'Wymyn', 'Feminist', 'Ship', 'Fandom', 'Probesity', 'Kyriarchy', 'Heightism', 'Discrimination', 'Queer', 'Sass', 'WOC', 'Heterosexual', 'White privilege', 'Disabled', 'estrogen'];

  walk = function(node) {
    var child, next, _results;
    child = void 0;
    next = void 0;
    switch (node.nodeType) {
      case 1:
      case 9:
      case 11:
        child = node.firstChild;
        _results = [];
        while (child) {
          next = child.nextSibling;
          walk(child);
          _results.push(child = next);
        }
        return _results;
        break;
      case 3:
        return handleText(node);
    }
  };

  handleText = function(textNode) {
    var exp, v, _i, _j, _len, _len1;
    v = textNode.nodeValue;
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      exp = words[_i];
      v = v.replace(new RegExp(exp.toUpperCase(), 'g'), 'HODOR');
    }
    for (_j = 0, _len1 = words.length; _j < _len1; _j++) {
      exp = words[_j];
      v = v.replace(new RegExp(exp, 'gi'), 'hodor');
    }
    return textNode.nodeValue = v;
  };

  walk(document.body);

}).call(this);
