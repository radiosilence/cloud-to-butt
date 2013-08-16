// Generated by CoffeeScript 1.6.3
(function() {
  var handleText, ucwords, walk, words;

  words = ['Reverse Rac', 'Racism', 'Equalit', 'SJW', 'Weight', 'Rape', 'Ableism', 'Ableist', 'Social Justice', 'Femin', 'MRA', 'Masculism', 'multiple', 'Misander', 'Misandr', 'Misogyny', 'Genderfluid', 'Genderqueer', 'appropr', 'Demisexual', 'Otherkin', 'Headmates', 'White people', 'Fatphobia', 'obesity', 'Thin Privilege', 'Privilege', 'POC', 'patriarchy', 'Black', 'Curves', 'Cultural Appropriation', 'Culture', 'Cis', 'policing', 'fatphobia', 'wolf', 'Trans', 'LGBT', 'Queer', 'Rape', 'Solidarity', 'Patriachy', 'Pride', 'Oppressed', 'Oppression', 'Tumblr', 'Womyn', 'Wymyn', 'Feminist', 'Ship', 'Fandom', 'demon', 'devil', 'satan', 'Probesity', 'Kyriarchy', 'Heightism', 'Discrimination', 'Queer', 'Sass', 'WOC', 'Heterosexual', 'White privilege', 'Disabled', 'estrogen'];

  ucwords = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
    var exp, v, _i, _j, _k, _len, _len1, _len2;
    v = textNode.nodeValue;
    for (_i = 0, _len = words.length; _i < _len; _i++) {
      exp = words[_i];
      v = v.replace(new RegExp(exp.toUpperCase(), 'g'), 'HODOR');
    }
    for (_j = 0, _len1 = words.length; _j < _len1; _j++) {
      exp = words[_j];
      v = v.replace(new RegExp(ucwords(exp), 'g'), 'Hodor');
    }
    for (_k = 0, _len2 = words.length; _k < _len2; _k++) {
      exp = words[_k];
      v = v.replace(new RegExp(exp, 'gi'), 'hodor');
    }
    return textNode.nodeValue = v;
  };

  walk(document.body);

}).call(this);
